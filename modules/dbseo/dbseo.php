<?php
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License version 3.0
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    DevBlinders <soporte@devblinders.com>
 * @copyright Copyright (c) DevBlinders
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License version 3.0
 */

if (!defined('_PS_VERSION_')) {
    exit;
}

class Dbseo extends Module
{
    protected $config_form = false;

    public function __construct()
    {
        require_once(dirname(__FILE__) . '/classes/DbSeoDefine.php');
        require_once(dirname(__FILE__) . '/classes/DbSeoAnalysis.php');
        require_once(dirname(__FILE__) . '/classes/DbSeoScore.php');

        $this->name = 'dbseo';
        $this->tab = 'front_office_features';
        $this->version = '1.1.0';
        $this->author = 'DevBlinders';
        $this->need_instance = 0;

        /**
         * Set $this->bootstrap to true if your module is compliant with bootstrap (PrestaShop 1.6)
         */
        $this->bootstrap = true;

        parent::__construct();

        $this->displayName = $this->l('DB SEO');
        $this->description = $this->l('Optimización SEO OnPage');

        $this->ps_versions_compliancy = array('min' => '1.6', 'max' => _PS_VERSION_);
        $this->is160 = version_compare(_PS_VERSION_, '1.6.0.0', '>=');
        $this->is177 = version_compare(_PS_VERSION_, '1.7.7.0', '>=');
        $this->is176 = version_compare(_PS_VERSION_, '1.7.6.0', '>=');
        $this->is175 = version_compare(_PS_VERSION_, '1.7.5.0', '>=');
        $this->is170 = version_compare(_PS_VERSION_, '1.7.0.0', '>=');
    }

    /**
     * Don't forget to create update methods if needed:
     * http://doc.prestashop.com/display/PS16/Enabling+the+Auto-Update
     */
    public function install()
    {
        include(dirname(__FILE__) . '/sql/install.php');
        $this->createTabs();

        if (!$this->is176) {
            if (!$this->copyOverrideFolder()) {
                return false;
            }
        }

        return parent::install() &&
            $this->registerHook('displayBackOfficeHeader') &&
            $this->registerHook('displayAdminProductsSeoStepBottom') &&
            $this->registerHook('displayAdminProductsExtra') &&
            $this->registerHook('actionProductSave') &&
            $this->registerHook('displayBackOfficeProductListAfter') &&
            $this->registerHook('displayBackOfficeCategoryAfter') &&
            $this->registerHook('actionCategoryUpdate') &&
            $this->registerHook('actionCategoryAdd') &&
            $this->registerHook('displayBackOfficeCategoryListAfter') &&
            $this->registerHook('displayBackOfficeManufacturerAfter') &&
            $this->registerHook('actionObjectManufacturerUpdateAfter') &&
            $this->registerHook('actionObjectManufacturerAddAfter') &&
            $this->registerHook('displayBackOfficeManufacturerListAfter') &&
            $this->registerHook('displayBackOfficeCmsAfter') &&
            $this->registerHook('actionObjectCmsUpdateAfter') &&
            $this->registerHook('actionObjectCmsAddAfter') &&
            $this->registerHook('displayBackOfficeCmsListAfter');
            #$this->registerHook('actionAdminProductsListingFieldsModifier'); # k3n
    }

    public function uninstall()
    {
        //include(dirname(__FILE__) . '/sql/uninstall.php');
        $this->deleteTabs();

        return parent::uninstall();
    }

    /**
     * Create Tabs
     */
    public function createTabs()
    {
        // Tabs
        $idTabs = array();
        $idTabs[] = Tab::getIdFromClassName('AdminDbSeoAjax');
        $idTabs[] = Tab::getIdFromClassName('AdminDbSeo');
        $idTabs[] = Tab::getIdFromClassName('AdminDbSeoKeywords');
        $idTabs[] = Tab::getIdFromClassName('AdminDbSeoPriority');
        $idTabs[] = Tab::getIdFromClassName('AdminDbSeoConfig');

        foreach ($idTabs as $idTab) {
            if ($idTab) {
                $tab = new Tab($idTab);
                $tab->delete();
            }
        }

        // Tab hidden
        $tab_config = new Tab();
        $tab_config->name = array();
        foreach (Language::getLanguages(true) as $lang) {
            $tab_config->name[$lang['id_lang']] = $this->l('DbSeo Ajax');
        }
        $tab_config->class_name = 'AdminDbSeoAjax';
        $tab_config->id_parent = 0;
        $tab_config->module = $this->name;
        $tab_config->active = 0;
        $tab_config->add();

        if($this->is170) {
            // Tab Primary
            if (!Tab::getIdFromClassName('AdminDevBlinders')) {
                $parent_tab = new Tab();
                $parent_tab->name = array();
                foreach (Language::getLanguages(true) as $lang) {
                    $parent_tab->name[$lang['id_lang']] = $this->l('DevBlinders');
                }
                $parent_tab->class_name = 'AdminDevBlinders';
                $parent_tab->id_parent = 0;
                $parent_tab->module = $this->name;
                $parent_tab->add();

                $id_full_parent = $parent_tab->id;
            } else {
                $id_full_parent = Tab::getIdFromClassName('AdminDevBlinders');
            }

            // Tabs
            $parent = new Tab();
            $parent->name = array();
            foreach (Language::getLanguages(true) as $lang) {
                $parent->name[$lang['id_lang']] = $this->l('SEO');
            }
            $parent->class_name = 'AdminDbSeo';
            $parent->id_parent = $id_full_parent;
            $parent->module = $this->name;
            $parent->icon = 'trending_up';
            $parent->add();

        } else {

            $parent = new Tab();
            $parent->name = array();
            foreach (Language::getLanguages(true) as $lang) {
                $parent->name[$lang['id_lang']] = $this->l('DB SEO');
            }
            $parent->class_name = 'AdminDbSeo';
            $parent->id_parent = 0;
            $parent->module = $this->name;
            $parent->add();
        }

        // Configuracion SEO
        $tab_config = new Tab();
        $tab_config->name = array();
        foreach (Language::getLanguages(true) as $lang) {
            $tab_config->name[$lang['id_lang']] = $this->l('Seocontrol');
        }
        $tab_config->class_name = 'AdminDbSeoConfig';
        $tab_config->id_parent = $parent->id;
        $tab_config->module = $this->name;
        $tab_config->add();

        // Priorización
        $tab_config = new Tab();
        $tab_config->name = array();
        foreach (Language::getLanguages(true) as $lang) {
            $tab_config->name[$lang['id_lang']] = $this->l('Priorización');
        }
        $tab_config->class_name = 'AdminDbSeoPriority';
        $tab_config->id_parent = $parent->id;
        $tab_config->module = $this->name;
        $tab_config->add();

        // Keywords
        $tab_config = new Tab();
        $tab_config->name = array();
        foreach (Language::getLanguages(true) as $lang) {
            $tab_config->name[$lang['id_lang']] = $this->l('Keywords');
        }
        $tab_config->class_name = 'AdminDbSeoKeywords';
        $tab_config->id_parent = $parent->id;
        $tab_config->module = $this->name;
        $tab_config->add();

    }

    /**
     * Delete Tabs
     */
    public function deleteTabs()
    {
        // Tabs
        $idTabs = array();
        $idTabs[] = Tab::getIdFromClassName('AdminDbSeoAjax');
        $idTabs[] = Tab::getIdFromClassName('AdminDbSeo');
        $idTabs[] = Tab::getIdFromClassName('AdminDbSeoKeywords');
        $idTabs[] = Tab::getIdFromClassName('AdminDbSeoPriority');
        $idTabs[] = Tab::getIdFromClassName('AdminDbSeoConfig');

        foreach ($idTabs as $idTab) {
            if ($idTab) {
                $tab = new Tab($idTab);
                $tab->delete();
            }
        }
    }

    public function copyOverrideFolder()
    {
        if (!is_writable(_PS_MODULE_DIR_ . $this->name)) {
            return false;
        }

        $override_folder_name = "override";

        $version_override_folder = _PS_MODULE_DIR_ . $this->name . '/' . $override_folder_name . '_' . Tools::substr(
                str_replace('.', '', _PS_VERSION_), 0, 2
            );
        $override_folder = _PS_ROOT_DIR_ . '/' . $override_folder_name;

        if (is_dir($version_override_folder)) {
            $this->copyDir($version_override_folder, $override_folder);
        }

        return true;
    }

    protected function copyDir($src, $dst)
    {
        if (is_dir($src)) {
            $dir = opendir($src);
            @mkdir($dst);
            while (false !== ($file = readdir($dir))) {
                if (($file != '.') && ($file != '..')) {
                    if (is_dir($src . '/' . $file)) {
                        $this->copyDir($src . '/' . $file, $dst . '/' . $file);
                    } else {
                        if (file_exists($dst . '/' . $file)) {
                            rename($dst . '/' . $file, $dst . '/' . $file . '.bak');
                        }
                        copy($src . '/' . $file, $dst . '/' . $file);
                    }
                }
            }
            closedir($dir);
        }
    }

    public function getContent()
    {
        Tools::redirectAdmin(
            'index.php?controller=AdminDbSeoConfig&token=' . Tools::getAdminTokenLite('AdminDbSeoConfig')
        );
    }

    public function getRequestContainer()
    {
        if ($sfContainer = $this->getSfContainer()) {
            return $sfContainer->get('request_stack')->getCurrentRequest();
        }
        return null;
    }

    public function getSfContainer()
    {
        if (!class_exists('\PrestaShop\PrestaShop\Adapter\SymfonyContainer')) {
            $kernel = null;
            try {
                $kernel = new AppKernel('prod', false);
                $kernel->boot();
                return $kernel->getContainer();
            } catch (Exception $ex) {
                return null;
            }
        }
        $sfContainer = call_user_func(array('\PrestaShop\PrestaShop\Adapter\SymfonyContainer', 'getInstance'));
        return $sfContainer;
    }

    /**
     * Add the CSS & JavaScript files you want to be added on the FO.
     */
    public function hookDisplayBackOfficeHeader()
    {
        if (!$this->is170) {
            $this->context->controller->addCSS($this->_path . '/views/css/material-icons.css');
        }
        $controller = Tools::getValue('controller');
        if ($controller == 'AdminProducts' || $controller == 'AdminCategories'
            || $controller == 'AdminDbSeoConfig' || $controller == 'AdminDbSeoPriority'
            || $controller == 'AdminDbSeoKeywords' || $controller == 'AdminManufacturers'
            || $controller == 'AdminCmsContent') {
            if ($this->is170 && !$this->is177) {
                //$this->context->controller->addJquery();
                $this->context->controller->addJS($this->_path . '/views/js/jquery-1.11.0.min.js');
                /*$this->context->controller->addJS($this->_path.'/views/js/jquery-migrate-1.2.1.min.js');*/
            }

            $this->context->controller->addJS($this->_path . '/views/js/back.js');
            Media::addJsDef(array(
                                'dbseo_ajax' => $this->context->link->getAdminLink('AdminDbSeoAjax'),
                            ));

            $this->context->controller->addCSS($this->_path . '/views/css/back.css');
        }

        if ($controller == 'AdminCategories') {
            if ($this->is176) {
                $request = $this->getRequestContainer();
                $id_category = (int)$request->get('categoryId');
            } else {
                $id_category = (int)Tools::getValue('id_category');
            }
            Media::addJsDef(array(
                                'dbseo_id_category' => (int)$id_category,
                            ));
        }
    }

    public function saveScore(
        $type,
        $id_item,
        $id_lang,
        $id_shop,
        $keyword = null,
        $rating = 0,
        $keyword2 = null,
        $keyword3 = null
    ) {
        $id_dbseo_score = Db::getInstance()->getValue(
            "SELECT `id_dbseo_score` 
            FROM `" . _DB_PREFIX_ . "dbseo_score`
            WHERE type = '$type' AND id_item = " . (int)$id_item
        );
        if ($id_dbseo_score) {
            $dbseoScore = new DbSeoScore($id_dbseo_score);
        } else {
            $dbseoScore = new DbSeoScore();
        }

        $dbseoScore->type = (int)$type;
        $dbseoScore->id_item = (int)$id_item;
        $dbseoScore->id_shop = (int)$id_shop;
        $dbseoScore->id_lang = (int)$id_lang;
        if ($keyword != null) {
            $dbseoScore->keyword = trim($keyword);
        }
        $dbseoScore->rating = (int)$rating;
        $dbseoScore->date_upd = date('Y-m-d H:i:s');
        if ($keyword2 != null) {
            $dbseoScore->keyword2 = trim($keyword2);
        }
        if ($keyword3 != null) {
            $dbseoScore->keyword3 = trim($keyword3);
        }
        $dbseoScore->save();
    }

    public function hookdisplayAdminProductsSeoStepBottom($params)
    {
        $languages = Language::getLanguages(true);
        $type = 1;
        $id_product = isset($params['id_product']) ? $params['id_product'] : '';
        $analysis = new DbSeoAnalysis();
        $checkProduct = $analysis->checkProduct($id_product);
        $keywords = DbSeoScore::getKeywords($type, $id_product);

        $this->context->smarty->assign('languages', $languages);
        $this->context->smarty->assign('checkProduct', $checkProduct);
        $this->context->smarty->assign('keywords', $keywords);
        return $this->display(__FILE__, 'views/templates/admin/product.tpl');
    }

    public function hookDisplayAdminProductsExtra($params) {
        if ($this->is170) {
            return;
        } else {
            $id_product = (int)Tools::getValue('id_product');
            $template = '/1.6/product.tpl';
        }

        if ($id_product && $id_product > 0) {
            $type = 1;
            $languages = Language::getLanguages(true);
            $id_lang_default = Configuration::get('PS_LANG_DEFAULT');
            $analysis = new DbSeoAnalysis();
            $checkProduct = $analysis->checkProduct($id_product);
            $keywords = DbSeoScore::getKeywords($type, $id_product);

            $this->context->smarty->assign('languages', $languages);
            $this->context->smarty->assign('id_lang_default', $id_lang_default);
            $this->context->smarty->assign('checkProduct', $checkProduct);
            $this->context->smarty->assign('keywords', $keywords);
            return $this->display(__FILE__, 'views/templates/admin/' . $template);
        }
    }

    public function renderRatingProduct($id_product)
    {
        $languages = Language::getLanguages(true);
        $type = 1;
        $analysis = new DbSeoAnalysis();
        $checkProduct = $analysis->checkProduct($id_product);
        $keywords = DbSeoScore::getKeywords($type, $id_product);

        $this->context->smarty->assign('languages', $languages);
        $this->context->smarty->assign('checkProduct', $checkProduct);
        $this->context->smarty->assign('keywords', $keywords);

        return $this->display(__FILE__, 'views/templates/admin/product.tpl');
    }

    public function hookActionProductSave($params)
    {
        if (isset($params['product']) || isset($params['id_product'])) {
            $type = 1;
            if($this->is170) {
                $id_product = $params['product']->id;
            } else {
                $id_product = (int)$params['id_product'];
            }
            $id_shop = $this->context->shop->id;

            if ($this->is170) {
                $keyword = Tools::getValue('dbkeyword', array());
            } else {
                $languages = Language::getLanguages(true);
                $keyword = [];
                foreach ($languages as $lang) {
                    $keyword[$lang['id_lang']] = Tools::getValue('dbkeyword_' . $lang['id_lang']);
                }
            }

            if ($keyword) {
                foreach ($keyword as $id_lang => $value) {

                    $analysis = new DbSeoAnalysis();
                    $checkProduct = $analysis->checkProduct($id_product, $value, $id_lang, $id_shop);

                    // guardamos las keywords y la puntuacion
                    $this->saveScore($type, $id_product, $id_lang, $id_shop, $value, $checkProduct['total']);
                }
            }
        }
    }

    public function hookdisplayBackOfficeProductListAfter($params)
    {
        $type = 1;
        $id_product = (int)$params['id_product'];
        $id_lang = $this->context->language->id;
        $id_shop = $this->context->shop->id;
        $rating  = (int)DbSeoScore::getScoreByIdItem($type, $id_product, $id_lang, $id_shop);
        $total   = (int)DbSeoScore::getTotalByIdItem($id_product, $id_shop); # k3n
        #echo "<pre>";var_dump($total);echo "</pre>";die;
        
        $this->context->smarty->assign('rating', $rating);
        $this->context->smarty->assign('total', $total); # k3n
        return $this->display(__FILE__, 'views/templates/admin/list/listproducts.tpl');
    }

    public function hookdisplayBackOfficeCategoryAfter($params)
    {
        if ($this->is176) {
            $request = $this->getRequestContainer();
            $id_category = (int)$request->get('categoryId');
            $template = 'category.tpl';
        } else {
            $id_category = (int)Tools::getValue('id_category');
            $template = '/1.6/category.tpl';
        }

        if ($id_category && $id_category > 0) {
            $type = 2;
            $languages = Language::getLanguages(true);
            $id_lang_default = Configuration::get('PS_LANG_DEFAULT');
            $analysis = new DbSeoAnalysis();
            $checkProduct = $analysis->checkCategory($id_category);
            $keywords = DbSeoScore::getKeywords($type, $id_category);

            $this->context->smarty->assign('languages', $languages);
            $this->context->smarty->assign('id_lang_default', $id_lang_default);
            $this->context->smarty->assign('checkProduct', $checkProduct);
            $this->context->smarty->assign('keywords', $keywords);
            return $this->display(__FILE__, 'views/templates/admin/' . $template);
        }
    }

    public function renderRatingCategory($id_category)
    {
        if ($this->is176) {
            $template = 'category.tpl';
        } else {
            $template = '/1.6/category.tpl';
        }

        if ($id_category && $id_category > 0) {
            $type = 2;
            $languages = Language::getLanguages(true);
            $id_lang_default = Configuration::get('PS_LANG_DEFAULT');
            $analysis = new DbSeoAnalysis();
            $checkProduct = $analysis->checkCategory($id_category);
            $keywords = DbSeoScore::getKeywords($type, $id_category);

            $this->context->smarty->assign('languages', $languages);
            $this->context->smarty->assign('id_lang_default', $id_lang_default);
            $this->context->smarty->assign('checkProduct', $checkProduct);
            $this->context->smarty->assign('keywords', $keywords);
            return $this->display(__FILE__, 'views/templates/admin/' . $template);
        }
    }

    public function hookActionCategoryUpdate($params)
    {
        if (isset($params['category'])) {
            $type = 2;
            $id_category = $params['category']->id;
            $id_shop = $this->context->shop->id;

            if ($this->is176) {
                $keyword = Tools::getValue('dbkeyword', array());
            } else {
                $languages = Language::getLanguages(true);
                $keyword = [];
                foreach ($languages as $lang) {
                    $keyword[$lang['id_lang']] = Tools::getValue('dbkeyword_' . $lang['id_lang']);
                }
            }

            if ($keyword && count($keyword) > 0) {
                foreach ($keyword as $id_lang => $value) {

                    $analysis = new DbSeoAnalysis();
                    $checkCategory = $analysis->checkCategory($id_category, $value, $id_lang, $id_shop);

                    // guardamos las keywords y la puntuacion
                    $this->saveScore($type, $id_category, $id_lang, $id_shop, $value, $checkCategory['total']);

                }
            }
        }
    }

    public function hookActionCategoryAdd($params)
    {
        return $this->hookActionCategoryUpdate($params);
    }

    public function hookdisplayBackOfficeCategoryListAfter($params)
    {
        $type = 2;
        $id_category = (int)$params['id_category'];
        $id_lang = $this->context->language->id;
        $id_shop = $this->context->shop->id;
        $rating = (int)DbSeoScore::getScoreByIdItem($type, $id_category, $id_lang, $id_shop);

        $this->context->smarty->assign('rating', $rating);
        $this->context->smarty->assign('id_category', $id_category);
        return $this->display(__FILE__, 'views/templates/admin/list/listcategory.tpl');
    }

    public function recheck($type)
    {
        $id_shop = $this->context->shop->id;
        $items = DbSeoScore::getWihtoutRating($type);
        $totals = count($items);
        $all_items = DbSeoScore::getTotalsItems($type);
        $porcent = round(($all_items - ($totals - 1)) * 100 / $all_items, 10);
        foreach ($items as $item) {
            $id_item = $item['id_item'];
            $analysis = new DbSeoAnalysis();
            foreach (Language::getLanguages(true) as $lang) {
                $id_lang = $lang['id_lang'];

                if ($type == 1) {
                    $checkItem = @$analysis->checkProduct($id_item, null, $id_lang, $id_shop);
                } elseif ($type == 2) {
                    $checkItem = @$analysis->checkCategory($id_item, null, $id_lang, $id_shop);
                } elseif ($type == 3) {
                    $checkItem = @$analysis->checkManufacturer($id_item, null, $id_lang, $id_shop);
                } elseif ($type == 4) {
                    $checkItem = @$analysis->checkCms($id_item, null, $id_lang, $id_shop);
                }

                // guardamos las keywords y la puntuacion
                $this->saveScore($type, $id_item, $id_lang, $id_shop, null, $checkItem['total']);
            }
            break;
        }
        return $porcent;
    }

    public function getFieldsListPage($sort_name)
    {
        $def = array();
        if (1) {
            $def = array_merge($def, array(
                'rating' => array(
                    'title' => $this->l('SEO'),
                    'align' => 'text-center',
                    'search' => false
                )
            ));
        }
        return $def;
    }

    public function hookdisplayBackOfficeManufacturerAfter($params)
    {
        if ($this->is176) {
            $request = $this->getRequestContainer();
            $id_manufacturer = (int)$request->get('manufacturerId');
            $template = 'manufacturer.tpl';
        } else {
            $id_manufacturer = (int)Tools::getValue('id_manufacturer');
            $template = '/1.6/manufacturer.tpl';
        }

        if ($id_manufacturer && $id_manufacturer > 0) {
            $type = 3;
            $languages = Language::getLanguages(true);
            $id_lang_default = Configuration::get('PS_LANG_DEFAULT');
            $analysis = new DbSeoAnalysis();
            $checkManufacturer = $analysis->checkManufacturer($id_manufacturer);
            $keywords = DbSeoScore::getKeywords($type, $id_manufacturer);

            $this->context->smarty->assign('languages', $languages);
            $this->context->smarty->assign('id_lang_default', $id_lang_default);
            $this->context->smarty->assign('checkManufacturer', $checkManufacturer);
            $this->context->smarty->assign('keywords', $keywords);
            return $this->display(__FILE__, 'views/templates/admin/' . $template);
        }
    }

    public function hookActionObjectManufacturerUpdateAfter($params)
    {
        if (isset($params['object'])) {
            $type = 3;
            $id_manufacturer = $params['object']->id;
            $id_shop = $this->context->shop->id;

            if ($this->is176) {
                $keyword = Tools::getValue('dbkeyword', array());
            } else {
                $languages = Language::getLanguages(true);
                $keyword = [];
                foreach ($languages as $lang) {
                    $keyword[$lang['id_lang']] = Tools::getValue('dbkeyword_' . $lang['id_lang']);
                }
            }

            if ($keyword && count($keyword) > 0) {
                foreach ($keyword as $id_lang => $value) {

                    $analysis = new DbSeoAnalysis();
                    $checkCategory = $analysis->checkManufacturer($id_manufacturer, $value, $id_lang, $id_shop);

                    // guardamos las keywords y la puntuacion
                    $this->saveScore($type, $id_manufacturer, $id_lang, $id_shop, $value, $checkCategory['total']);

                }
            }
        }
    }

    public function hookActionObjectManufacturerAddAfter($params)
    {
        return $this->hookActionObjectManufacturerUpdateAfter($params);
    }

    public function hookdisplayBackOfficeManufacturerListAfter($params)
    {
        $type = 3;
        $id_manufacturer = (int)$params['id_manufacturer'];
        $id_lang = $this->context->language->id;
        $id_shop = $this->context->shop->id;
        $rating = (int)DbSeoScore::getScoreByIdItem($type, $id_manufacturer, $id_lang, $id_shop);

        $this->context->smarty->assign('rating', $rating);
        $this->context->smarty->assign('id_manufacturer', $id_manufacturer);
        return $this->display(__FILE__, 'views/templates/admin/list/listmanufacturer.tpl');
    }

    public function hookdisplayBackOfficeCmsAfter($params)
    {
        if ($this->is176) {
            $request = $this->getRequestContainer();
            $id_cms = (int)$request->get('cmsPageId');
            $template = 'cms.tpl';
        } else {
            $id_cms = (int)Tools::getValue('id_cms');
            $template = '/1.6/cms.tpl';
        }

        if ($id_cms && $id_cms > 0) {
            $type = 4;
            $languages = Language::getLanguages(true);
            $id_lang_default = Configuration::get('PS_LANG_DEFAULT');
            $analysis = new DbSeoAnalysis();
            $checkCms = $analysis->checkCms($id_cms);
            $keywords = DbSeoScore::getKeywords($type, $id_cms);

            $this->context->smarty->assign('languages', $languages);
            $this->context->smarty->assign('id_lang_default', $id_lang_default);
            $this->context->smarty->assign('checkCms', $checkCms);
            $this->context->smarty->assign('keywords', $keywords);
            return $this->display(__FILE__, 'views/templates/admin/' . $template);
        }
    }

    public function hookActionObjectCmsUpdateAfter($params)
    {
        if (isset($params['object'])) {
            $type = 4;
            $id_cms = $params['object']->id;
            $id_shop = $this->context->shop->id;

            if ($this->is176) {
                $keyword = Tools::getValue('dbkeyword', array());
            } else {
                $languages = Language::getLanguages(true);
                $keyword = [];
                foreach ($languages as $lang) {
                    $keyword[$lang['id_lang']] = Tools::getValue('dbkeyword_' . $lang['id_lang']);
                }
            }

            if ($keyword && count($keyword) > 0) {
                foreach ($keyword as $id_lang => $value) {

                    $analysis = new DbSeoAnalysis();
                    $check = $analysis->checkCms($id_cms, $value, $id_lang, $id_shop);

                    // guardamos las keywords y la puntuacion
                    $this->saveScore($type, $id_cms, $id_lang, $id_shop, $value, $check['total']);

                }
            }
        }
    }

    public function hookActionObjectCmsAddAfter($params)
    {
        return $this->hookActionObjectCmsUpdateAfter($params);
    }

    public function hookdisplayBackOfficeCmsListAfter($params)
    {
        $type = 4;
        $id_cms = (int)$params['id_cms'];
        $id_lang = $this->context->language->id;
        $id_shop = $this->context->shop->id;
        $rating = (int)DbSeoScore::getScoreByIdItem($type, $id_cms, $id_lang, $id_shop);

        $this->context->smarty->assign('rating', $rating);
        $this->context->smarty->assign('id_cms', $id_cms);
        return $this->display(__FILE__, 'views/templates/admin/list/listcms.tpl');
    }

    # k3n
    public function hookActionAdminProductsListingFieldsModifier($params)
    {
        // Obtener los parámetros
        $sqlSelect = &$params['sql_select'];
        $sqlTable = &$params['sql_table'];
        $sqlWhere = &$params['sql_where'];

        // Unir la tabla de detalles de pedidos para obtener las ventas
        $sqlTable .= ' LEFT JOIN `'._DB_PREFIX_.'order_detail` od ON a.id_product = od.id_product';

        // Agrupar por ID de producto para sumar las cantidades vendidas
        $sqlGroupBy = ' GROUP BY a.id_product';

        // Seleccionar la suma de las cantidades vendidas
        $sqlSelect .= ', SUM(od.product_quantity) AS total_sales';

        // Agregar un filtro por ventas (ejemplo: mostrar solo productos con más de 10 ventas)
        // if (Tools::getValue('total_sales')) {
        //     $sqlWhere .= ' AND SUM(od.product_quantity) > '.(int)Tools::getValue('total_sales');
        // }

        // Modificar la consulta (ejemplo: ordenar por ventas)
        // $sqlOrder = ' ORDER BY total_sales DESC';

        // Asignar las modificaciones a los parámetros
        $params['sql_select'] = $sqlSelect;
        $params['sql_table'] = $sqlTable;
        $params['sql_group_by'] = $sqlGroupBy;
        // $params['sql_order'] = $sqlOrder;
        // $params['sql_where'] = $sqlWhere;
        var_dump($params);die;
    }   
    /*public function hookActionAdminProductsListingFieldsModifier($params)
    {
        // Modificar la consulta SQL para filtrar por ventas
        $params['sql_select']['total_sales'] = array(
            'table' => 'od',
            'field' => 'SUM(od.product_quantity) AS total_sales',
            # 'filtering' => 'SUM(od.product_quantity) > 0',
        );

        $params['sql_table']['od'] = array(
            'table' => 'order_detail',
            'join' => 'LEFT JOIN',
            'on' => 'p.id_product = od.product_id',
        );

        $params['sql_group_by'][] = 'p.id_product';
        $params['sql_order'] = 'total_sales DESC';
    }*/
}
