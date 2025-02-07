# CONSULTA
SELECT 
    p.`id_product`, p.`reference`, pl.`name`, p.`active`, p.`condition`, pl.`id_lang`, p.`id_supplier`,
    su.`id_supplier` AS "su_id_supplier", su.`name` AS "su_supplier",
    psu.`id_product_supplier`, psu.`id_supplier` AS "psu_id_supplier",
    sup.`name` AS "psu_supplier"
FROM `ps_product` p
LEFT JOIN `ps_product_lang` pl ON (pl.id_product = p.id_product)
LEFT JOIN `ps_supplier` su ON (su.id_supplier = p.id_supplier)
LEFT JOIN `ps_product_supplier` psu ON (psu.id_product = p.id_product)
LEFT JOIN `ps_supplier` sup ON (sup.id_supplier = psu.id_supplier)
WHERE pl.`id_lang` = 1 
    AND p.`active` = 1 
    AND su.`id_supplier` <> psu.`id_supplier`
GROUP BY psu.`id_supplier`;


# FIX
DELETE psu
FROM ps_product_supplier psu
JOIN ps_product p ON psu.id_product = p.id_product
WHERE psu.id_supplier <> p.id_supplier;
