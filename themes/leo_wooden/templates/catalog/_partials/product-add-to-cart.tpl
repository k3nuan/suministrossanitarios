{**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
<div class="product-add-to-cart">
  {if !$configuration.is_catalog}
    <span class="control-label">{l s='Quantity' d='Shop.Theme.Catalog'}</span>

    {block name='product_quantity'}
      <div class="product-quantity clearfix">
        <div class="qty clearfix">

          <!-- k3n -->
          {if $product.sell_in_multiples > 0}
              <style>
              input[type="number"] {
                -webkit-appearance: textfield;-moz-appearance: textfield;appearance: textfield;
              }
              
              input[type=number]::-webkit-inner-spin-button,
              input[type=number]::-webkit-outer-spin-button {
                -webkit-appearance: none;
              }

              .quantity-container {
                border: 2px solid #ddd;
                display: inline-flex;
              }

              .quantity-container,
              .quantity-container * {
                box-sizing: border-box;
              }

              .quantity-container button {
                outline:none;
                -webkit-appearance: none;
                background-color: transparent;
                border: none;
                align-items: center;
                justify-content: center;
                width: 2rem;
                height: 2rem;
                cursor: pointer;
                margin: 0;
                position: relative;
              }

              .quantity-container button:before,
              .quantity-container button:after {
                display: inline-block;
                position: absolute;
                content: '';
                width: 1rem;
                height: 2px;
                background-color: #212121;
                transform: translate(-50%, -50%);
              }
              .quantity-container button.plus:after {
                transform: translate(-50%, -50%) rotate(90deg);
              }

              .quantity-container input[type=number] {
                font-family: sans-serif;
                max-width: 5rem;
                padding: .5rem;
                border: solid #ddd;
                border-width: 0 2px;
                font-size: 1.5rem;
                height: 2rem;
                font-weight: bold;
                text-align: center;
              }
              </style>
              <div class="quantity-container">
                <button id="decrementButton"></button>
                <input class="quantity k3n" name="qty" value="{$product.quantity_wanted}" min="{$product.minimal_quantity}" step="{$product.minimal_quantity}" type="number">
                <button id="incrementButton" class="plus"></button>
              </div>

              <script>
              document.addEventListener('DOMContentLoaded', function() {
                const decrementButton = document.getElementById('decrementButton');
                const incrementButton = document.getElementById('incrementButton');

                decrementButton.addEventListener('click', function(event) {
                event.preventDefault();
                event.target.parentNode.querySelector('.quantity.k3n').stepDown();
                });
                incrementButton.addEventListener('click', function(event) {
                event.preventDefault();
                event.target.parentNode.querySelector('.quantity.k3n').stepUp();
                });
              });
              </script> 
          {else}
                <input
                  type="text"
                  name="qty"
                  id="quantity_wanted"
                  value="{$product.quantity_wanted}"
                  class="input-group"
                  min="{$product.minimal_quantity}"
                  aria-label="{l s='Quantity' d='Shop.Theme.Actions'}"
                >
          {/if}
          <!-- /k3n -->

        </div>

        {block name='product_details'}
            {include file='catalog/_partials/product-details.tpl'}
        {/block}

        {block name='product_availability'}
          <span id="product-availability">
            {if $product.show_availability && $product.availability_message}
              {if $product.availability == 'available'}
                <i class="material-icons rtl-no-flip product-available">&#xE5CA;</i>
              {elseif $product.availability == 'last_remaining_items'}
                <i class="material-icons product-last-items">&#xE002;</i>
              {else}
                <i class="material-icons product-unavailable">&#xE14B;</i>
              {/if}
              {$product.availability_message}
            {/if}
          </span>
        {/block}
        
        {block name='product_minimal_quantity'}
          <p class="product-minimal-quantity">
            {if $product.minimal_quantity > 1}
              {l
              s='The minimum purchase order quantity for the product is %quantity%.'
              d='Shop.Theme.Checkout'
              sprintf=['%quantity%' => $product.minimal_quantity]
              }
            {/if}
          </p>

          <!-- k3n -->
          {if $product.sell_in_multiples > 0 }
            <p class="text-danger">Este producto se vende en múltiplos</p>
          {/if}

        {/block}

        <div class="add">
          <button
            class="btn btn-primary add-to-cart"
            data-button-action="add-to-cart"
            type="submit"
            {if !$product.add_to_cart_url}
              disabled
            {/if}
          >
            <i class="material-icons shopping-cart">&#xE547;</i>
            {l s='Add to cart' d='Shop.Theme.Actions'}
          </button>

          <div class="leo-compare-wishlist-button">
            {hook h='displayLeoWishlistButton' product=$product}
            {hook h='displayLeoCompareButton' product=$product}
          </div>

        </div>
      </div>
    {/block}

  {/if}
</div>
