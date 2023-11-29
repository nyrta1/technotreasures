jQuery(document).ready(function ($) {
	var $L = 1200,
		$menu_navigation = $('#main-nav'),
		$cart_trigger = $('#cd-cart-trigger'),
		$hamburger_icon = $('#cd-hamburger-menu'),
		$lateral_cart = $('#cd-cart'),
		$shadow_layer = $('#cd-shadow-layer')

	$hamburger_icon.on('click', function (event) {
		event.preventDefault()
		$lateral_cart.removeClass('speed-in')
		toggle_panel_visibility($menu_navigation, $shadow_layer, $('body'))
	})

	$cart_trigger.on('click', function (event) {
		event.preventDefault()
		$menu_navigation.removeClass('speed-in')
		toggle_panel_visibility($lateral_cart, $shadow_layer, $('body'))
	})

	$shadow_layer.on('click', function () {
		$shadow_layer.removeClass('is-visible')
		if ($lateral_cart.hasClass('speed-in')) {
			$lateral_cart
				.removeClass('speed-in')
				.on(
					'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
					function () {
						$('body').removeClass('overflow-hidden')
					}
				)
			$menu_navigation.removeClass('speed-in')
		} else {
			$menu_navigation
				.removeClass('speed-in')
				.on(
					'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
					function () {
						$('body').removeClass('overflow-hidden')
					}
				)
			$lateral_cart.removeClass('speed-in')
		}
	})

	move_navigation($menu_navigation, $L)
	$(window).on('resize', function () {
		move_navigation($menu_navigation, $L)

		if ($(window).width() >= $L && $menu_navigation.hasClass('speed-in')) {
			$menu_navigation.removeClass('speed-in')
			$shadow_layer.removeClass('is-visible')
			$('body').removeClass('overflow-hidden')
		}
	})
})

function toggle_panel_visibility($lateral_panel, $background_layer, $body) {
	if ($lateral_panel.hasClass('speed-in')) {
		$lateral_panel
			.removeClass('speed-in')
			.one(
				'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
				function () {
					$body.removeClass('overflow-hidden')
				}
			)
		$background_layer.removeClass('is-visible')
	} else {
		$lateral_panel
			.addClass('speed-in')
			.one(
				'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
				function () {
					$body.addClass('overflow-hidden')
				}
			)
		$background_layer.addClass('is-visible')
	}
}

function move_navigation($navigation, $MQ) {
	if ($(window).width() >= $MQ) {
		$navigation.detach()
		$navigation.appendTo('header')
	} else {
		$navigation.detach()
		$navigation.insertAfter('header')
	}
}

$(document).ready(function () {
	function calculateTotalPrice() {
		var totalPrice = 0
		$('.cd-cart-items li').each(function () {
			var priceText = $(this).find('.cd-price').text().replace(' ₸', '')
			var price = parseInt(priceText, 10)
			totalPrice += price
		})
		return totalPrice
	}

	$('.cd-cart-items').on('click', '.cd-item-remove', function (event) {
		event.preventDefault()
		$(this).closest('li').remove()

		var totalPrice = calculateTotalPrice()
		$('#countOfPrice').text(totalPrice.toLocaleString('en-US') + ' ₸')

		var itemCount = $('.cd-cart-items li').length
		$('#countOfProducts').text(itemCount)
	})

	$('.add-to-the-shopping-cart').click(function (event) {
		event.preventDefault()

		var product = $(this).closest('.product-card')
		var productName = product.find('h4 a').text()
		var productPriceWithSale = product.find('.product-price').text()
		var productPrice = parseInt(productPriceWithSale.replace(/\D/g, ''), 10)

		var cartItem =
			'<li>' +
			'<span class="cd-qty">1x</span> ' +
			productName +
			'<div class="cd-price">' +
			productPrice +
			' ₸</div>' +
			'<a href="#0" class="cd-item-remove cd-img-replace">Remove</a>' +
			'</li>'

		$('.cd-cart-items').append(cartItem)

		var itemCount = $('.cd-cart-items li').length
		$('#countOfProducts').text(itemCount)

		var totalPrice = calculateTotalPrice()
		$('#countOfPrice').text(totalPrice.toLocaleString('en-US') + ' ₸')
	})
})
