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

class DbSeoScore extends ObjectModel
{
    public $id;
    public $id_dbseo_score;
    public $type;
    public $id_item;
    public $id_lang;
    public $id_shop;
    public $keyword;
    public $rating;
    public $date_upd;

    public static $definition = array(
        'table' => 'dbseo_score',
        'primary' => 'id_dbseo_score',
        'multilang' => true,
        'multilang_shop' => true,
        'fields' => array(
            'type' => array('type' => self::TYPE_INT, 'validate' => 'isunsignedInt', 'required' => true),
            'id_item' => array('type' => self::TYPE_INT, 'validate' => 'isunsignedInt', 'required' => true),
            'date_upd' => array('type' => self::TYPE_DATE, 'required' => true),

            // Lang fields
            'keyword' => array('type' => self::TYPE_STRING, 'lang' => true, 'required' => false, 'validate' => 'isCleanHtml', 'size' => 255),
            'rating' => array('type' => self::TYPE_INT, 'lang' => true, 'required' => false, 'validate' => 'isunsignedInt'),
        ),
    );

    public function __construct($id = null, $idLang = null, $idShop = null)
    {
        parent::__construct($id, $idLang, $idShop);
    }

    public static function getKeywordByIdItem($type, $id_item, $id_lang, $id_shop)
    {
        $keyword = Db::getInstance()->getValue("SELECT dbsl.keyword 
            FROM " . _DB_PREFIX_ . "dbseo_score dbs
            INNER JOIN " . _DB_PREFIX_ . "dbseo_score_lang dbsl ON dbs.id_dbseo_score = dbsl.id_dbseo_score
            WHERE dbs.type = '$type' AND dbs.id_item = " . (int)$id_item . " AND dbsl.id_lang = " . (int)$id_lang . " AND dbsl.id_shop = " . (int)$id_shop);
        return $keyword;
    }

    public static function getKeywords($type, $id_item)
    {
        $keys = [];
        $sql = "SELECT *
            FROM "._DB_PREFIX_."dbseo_score dbs
            INNER JOIN "._DB_PREFIX_."dbseo_score_lang dbsl ON dbs.id_dbseo_score = dbsl.id_dbseo_score
            WHERE dbs.type = '$type' AND dbs.id_item = '$id_item'";
        $keywords = Db::getInstance()->executeS($sql);
        foreach($keywords as $keyword){
            $keys[$keyword['id_lang']] = $keyword['keyword'];
        }

        return $keys;
    }

    public static function getScoreByIdItem($type, $id_item, $id_lang, $id_shop)
    {
        $keys = [];
        $sql = "SELECT rating
            FROM "._DB_PREFIX_."dbseo_score dbs
            INNER JOIN "._DB_PREFIX_."dbseo_score_lang dbsl ON dbs.id_dbseo_score = dbsl.id_dbseo_score
            WHERE dbs.type = '$type' AND dbs.id_item = '$id_item' AND dbsl.id_lang = '$id_lang' AND dbsl.id_shop = '$id_shop'";
        $rating = Db::getInstance()->getValue($sql);

        return $rating;
    }

    public static function getWihtoutRating($type)
    {
        if($type == 1) {
            $sql = "SELECT id_product as id_item
                FROM " . _DB_PREFIX_ . "product p
                WHERE NOT EXISTS (SELECT * FROM " . _DB_PREFIX_ . "dbseo_score WHERE `type` = '$type' AND id_item = p.id_product)";
        } elseif($type == 2) {
            $sql = "SELECT id_category as id_item
                FROM " . _DB_PREFIX_ . "category c
                WHERE NOT EXISTS (SELECT * FROM " . _DB_PREFIX_ . "dbseo_score WHERE `type` = '$type' AND id_item = c.id_category)";
        } elseif($type == 3) {
            $sql = "SELECT id_manufacturer as id_item
                FROM " . _DB_PREFIX_ . "manufacturer m
                WHERE NOT EXISTS (SELECT * FROM " . _DB_PREFIX_ . "dbseo_score WHERE `type` = '$type' AND id_item = m.id_manufacturer)";
        } elseif($type == 4) {
            $sql = "SELECT id_cms as id_item
                FROM " . _DB_PREFIX_ . "cms c
                WHERE NOT EXISTS (SELECT * FROM " . _DB_PREFIX_ . "dbseo_score WHERE `type` = '$type' AND id_item = c.id_cms)";
        }
        $items = Db::getInstance()->executeS($sql);

        return $items;
    }

    public static function getTotalsItems($type)
    {
        if($type == 1) {
            $sql = "SELECT count(*)
                FROM "._DB_PREFIX_."product";
        } elseif($type == 2) {
            $sql = "SELECT count(*)
            FROM "._DB_PREFIX_."category";
        } elseif($type == 3) {
            $sql = "SELECT count(*)
            FROM "._DB_PREFIX_."manufacturer";
        } elseif($type == 4) {
            $sql = "SELECT count(*)
            FROM "._DB_PREFIX_."cms";
        }
        $totals = Db::getInstance()->getValue($sql);

        return $totals;
    }

    public static function getdbcategorydesc($id_category, $id_lang, $id_shop)
    {
        $keys = [];
        $sql = "SELECT large_desc
            FROM "._DB_PREFIX_."dbcategorydesc
            WHERE id_category = '$id_category' AND id_lang = '$id_lang' AND id_shop = '$id_shop'";
        $large_desc = Db::getInstance()->getvalue($sql);

        return $large_desc;
    }

    public static function getCountKeyword($keyword, $id_lang, $id_shop)
    {
        $sql = "SELECT COUNT(*)
            FROM "._DB_PREFIX_."dbseo_score dbs
            INNER JOIN "._DB_PREFIX_."dbseo_score_lang dbsl 
                ON dbs.id_dbseo_score = dbsl.id_dbseo_score AND dbsl.id_lang = '$id_lang' AND dbsl.id_shop = '$id_shop'
            WHERE dbsl.keyword = '$keyword'";
        $counts = Db::getInstance()->executeS($sql);

        return $counts;
    }

    public static function getTotalsRating($id_lang, $id_shop)
    {
        $sql = "SELECT COUNT(*)
            FROM "._DB_PREFIX_."dbseo_score dbs
            INNER JOIN "._DB_PREFIX_."dbseo_score_lang dbsl 
                ON dbs.id_dbseo_score = dbsl.id_dbseo_score AND dbsl.id_lang = '$id_lang' AND dbsl.id_shop = '$id_shop'";
        $total = Db::getInstance()->getValue($sql);

        $sql = "SELECT COUNT(*)
            FROM "._DB_PREFIX_."dbseo_score dbs
            INNER JOIN "._DB_PREFIX_."dbseo_score_lang dbsl 
                ON dbs.id_dbseo_score = dbsl.id_dbseo_score AND dbsl.id_lang = '$id_lang' AND dbsl.id_shop = '$id_shop'
            WHERE dbsl.rating > '85'";
        $good = Db::getInstance()->getValue($sql);

        $sql = "SELECT COUNT(*)
            FROM "._DB_PREFIX_."dbseo_score dbs
            INNER JOIN "._DB_PREFIX_."dbseo_score_lang dbsl 
                ON dbs.id_dbseo_score = dbsl.id_dbseo_score AND dbsl.id_lang = '$id_lang' AND dbsl.id_shop = '$id_shop'
            WHERE dbsl.rating > '50' AND dbsl.rating <= '85'";
        $medium = Db::getInstance()->getValue($sql);

        $sql = "SELECT COUNT(*)
            FROM "._DB_PREFIX_."dbseo_score dbs
            INNER JOIN "._DB_PREFIX_."dbseo_score_lang dbsl 
                ON dbs.id_dbseo_score = dbsl.id_dbseo_score AND dbsl.id_lang = '$id_lang' AND dbsl.id_shop = '$id_shop'
            WHERE dbsl.rating <= '50'";
        $bad = Db::getInstance()->getValue($sql);

        return array(
            'total' => $total,
            'good' => $good,
            'medium' => $medium,
            'bad' => $bad,
        );
    }

    public static function getdbcategoryfaqs($id_category, $id_lang, $id_shop)
    {
        $result = '';
        $sql = "SELECT fl.question, fl.answer
            FROM "._DB_PREFIX_."dbfaqs_category f
            INNER JOIN "._DB_PREFIX_."dbfaqs_category_lang fl
                ON f.id_dbfaqs_category = fl.id_dbfaqs_category
            WHERE f.id_category = '$id_category' 
                AND fl.id_lang = '$id_lang' 
                AND fl.id_shop = '$id_shop'";
        $faqs = Db::getInstance()->executeS($sql);
        foreach($faqs as $faq) {
            $result .= ' '.$faq['question'].' ';
            $result .= ' '.$faq['answer'].' ';
        }

        return $result;
    }
}
