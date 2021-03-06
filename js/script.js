
// *****************************Menu Bar*************************************************

// Logo Hover
 

if($('body').hasClass('lang-FR')) {
    $('.logo > a > img').hover(function() {
        $(this).attr( "src", "/img/css/logo_green_fr.png");
    }, function(){
        $(this).attr("src","/img/css/logo_wht_fr.png");
    });
} else {
    $('.logo > a > img').hover(function() {
        $(this).attr( "src", "/img/css/logo_green_en.png");
    }, function(){
        $(this).attr("src","/img/css/logo_wht_en.png");
    });
}

// Search Toggle

var searchToggle = document.createElement('a');

searchToggle.setAttribute('class', 'search');

searchToggle.setAttribute('href', '#');

var searchSpan = document.createElement('span');

$(searchToggle).append($(searchSpan));
if($('body').hasClass('lang-FR')) {
    $(searchToggle).append("Rechercher");
} else {
    $(searchToggle).append("Search");
}


$('.wrapper.header > div.container > div.cart-account').append(searchToggle);

$('a.search').click(function() {
    $('div.form-search').toggle(300);
});


// Float Menu Nav

var $headerLogo = $('.header .logo');
var $headerNav = $('.wrapper.nav')
$headerLogo.after($headerNav);




// Menu Down Arrow

var downArrow = document.createElement('i');
downArrow.setAttribute('class','angle-down');

var $menuTitle = $('.top-cat-menu > ul > li > h2');

$menuTitle.append(downArrow);



// Sub Menu

var $POSItem = $('div.top-cat-menu > ul > li:first-child > ul > li:first-child');

var POSArrow = document.createElement('i');
POSArrow.setAttribute('class', 'angle-down');

var POSSubMenu = document.createElement('ul');

POSSubMenu.setAttribute('id', 'pos-sub');

$('div.top-cat-menu > ul > li:first-child > ul > li:first-child a').append(POSArrow);

$POSItem.append(POSSubMenu);



var standsLi = document.createElement('li');
var standsAnch = document.createElement('a');

if($('body').hasClass('lang-FR')) {
    standsAnch.innerHTML = "Supports pour PDV";
    standsAnch.setAttribute('href','/catalog/3719C/POS%20Stands/');
} else {
    standsAnch.innerHTML = "POS Stands";
    standsAnch.setAttribute('href','/catalog/3719C/POS%20Stands/');
}
$(standsLi).append(standsAnch);

var printersLi = document.createElement('li');
var printersAnch = document.createElement('a');
printersAnch.setAttribute('href','/catalog/3720C/Printers/');
if($('body').hasClass('lang-FR')) {
    printersAnch.innerHTML = "Imprimantes";
} else {
    printersAnch.innerHTML = "Printers";
}
$(printersLi).append(printersAnch);

var ipadsLi = document.createElement('li');
var ipadsAnch = document.createElement('a');
ipadsAnch.setAttribute('href','/catalog/3721C/iPad%20Enclosures/');
if($('body').hasClass('lang-FR')) {
    ipadsAnch.innerHTML = "Chevalets pour iPad";
} else {
    ipadsAnch.innerHTML = "iPad Enclosures";
}
$(ipadsLi).append(ipadsAnch);

var cashLi = document.createElement('li');
var cashAnch = document.createElement('a');
cashAnch.setAttribute('href','/catalog/3722C/Cash%20Drawers/');
if($('body').hasClass('lang-FR')) {
    cashAnch.innerHTML = "Tiroirs-caisses";
} else {
    cashAnch.innerHTML = "Cash Drawers";
}
$(cashLi).append(cashAnch);

var privacyLi = document.createElement('li');
var privacyAnch = document.createElement('a');
privacyAnch.setAttribute('href','/catalog/3723C/Privacy%20&%20Security/');
if($('body').hasClass('lang-FR')) {
    privacyAnch.innerHTML = "Confidentialité et sécurité";
} else {
    privacyAnch.innerHTML = "Privacy & Security";
}
$(privacyLi).append(privacyAnch);


$('#pos-sub').append(standsLi).append(printersLi).append(ipadsLi).append(cashLi).append(privacyLi);


$POSItem.hover(function() {
    $('#pos-sub').show();
}, function() {
    $('#pos-sub').hide();
});















// *****************************Footer*************************************************

if($('body').hasClass('lang-FR')) {
    $('div.footer ul li.terms a').text('Conditions d?utilisation');
} else {
    $('div.footer ul li.terms a').text('Terms of Use');
};


if($('body').hasClass('lang-FR')) {
     $('div.footer ul li.returns a').text('Commandes, expéditions et retours');
} else {
     $('div.footer ul li.returns a').text('Orders, Shipping & Returns');
}

if($('body').hasClass('lang-FR')) {
     $('div.footer ul li.shipping a').text('À propos de');
} else {
     $('div.footer ul li.shipping a').text('About');
}

// *****************************Left*******

var footerLeft = document.createElement('div');
footerLeft.setAttribute('class', 'footer-left');

// *****************************Logo**

var footerLogo = document.createElement('div');
footerLogo.setAttribute('class', 'footer-logo');

var footerLogoAnchor = document.createElement('a');
if($('body').hasClass('lang-FR')) {
    footerLogoAnchor.setAttribute('href', 'https://www.moneris.com/fr');
} else {
    footerLogoAnchor.setAttribute('href', 'https://www.moneris.com');
}

footerLogoAnchor.setAttribute('target', '_blank');

var footerLogoImg = document.createElement('img');
footerLogoImg.setAttribute('src', '/img/css/logo_moneris_en.png');

$(footerLogoAnchor).append(footerLogoImg);
$(footerLogo).append(footerLogoAnchor);


// *****************************Socials**

var footerSocialIcons = document.createElement('div');
footerSocialIcons.setAttribute('class', 'footer-social-icons');

var twitterAnchor = document.createElement('a');
if($('body').hasClass('lang-FR')) {
    twitterAnchor.setAttribute('href', 'https://twitter.com/Moneris?lang=fr%2FMoneris');
} else {
    twitterAnchor.setAttribute('href', 'https://twitter.com/Moneris');
}

twitterAnchor.setAttribute('target', '_blank');

var twitterImg = document.createElement('img');
twitterImg.setAttribute('src', '/img/css/twitter.png');

$(twitterAnchor).append(twitterImg);


var facebookAnchor = document.createElement('a');
if($('body').hasClass('lang-FR')) {
    facebookAnchor.setAttribute('href', 'https://www.facebook.com/moneris?ref=ts&fref=ts');
} else {
    facebookAnchor.setAttribute('href', 'https://www.facebook.com/moneris');
}

facebookAnchor.setAttribute('target', '_blank');

var facebookImg = document.createElement('img');
facebookImg.setAttribute('src', '/img/css/facebook.png');

$(facebookAnchor).append(facebookImg);


var linkedAnchor = document.createElement('a');
if($('body').hasClass('lang-FR')) {
    linkedAnchor.setAttribute('href', 'https://www.linkedin.com/company/moneris-solutions');
} else {
    linkedAnchor.setAttribute('href', 'https://www.linkedin.com/company/moneris-solutions');
}

linkedAnchor.setAttribute('target', '_blank');

var linkedImg = document.createElement('img');
linkedImg.setAttribute('src', '/img/css/linked.png');

$(linkedAnchor).append(linkedImg);

$(footerSocialIcons).append(twitterAnchor).append(facebookAnchor).append(linkedAnchor);


$(footerLeft).append(footerLogo).append(footerSocialIcons);



// *****************************Right****

var footerRight = document.createElement('div');
footerRight.setAttribute('class', 'footer-right');

var footerContact = document.createElement('div');
footerContact.setAttribute('class', 'footer-contact');


//*****************************Questions

var footerQuestions = document.createElement('h6');
footerQuestions.setAttribute('class', 'footer-questions');
if($('body').hasClass('lang-FR')) {
    footerQuestions.innerHTML = 'Questions?';
} else {
    footerQuestions.innerHTML = 'Questions?';
}


//*****************************Call

var footerCall = document.createElement('div');
footerCall.setAttribute('class', 'footer-call');
if($('body').hasClass('lang-FR')) {
    footerCall.innerHTML = 'Composez le : ';
} else {
    footerCall.innerHTML = 'Call: ';
}

var footerCallNumber = document.createElement('span');
footerCallNumber.innerHTML = '1-866-421-1666';

$(footerCall).append(footerCallNumber);



//*****************************Email

var footerEmail = document.createElement('div');
footerEmail.setAttribute('class', 'footer-email');
if($('body').hasClass('lang-FR')) {
    footerEmail.innerHTML = 'Écrivez à : ';
} else {
    footerEmail.innerHTML = 'Email: ';
}

var footerEmailAddress = document.createElement('a');
footerEmailAddress.setAttribute('href', 'mailto:shopmonerissupport@moneris.com');
footerEmailAddress.setAttribute('target', '_top');
footerEmailAddress.innerHTML = 'shopmonerissupport@moneris.com';

$(footerEmail).append(footerEmailAddress);


$(footerContact).append(footerQuestions).append(footerCall).append(footerEmail);
$(footerContact).append($('.wrapper.footer li.powered-by')).append($('.wrapper.footer li.copyright'));
$(footerRight).append(footerContact);

$('div.wrapper.footer div.container').append(footerLeft).append(footerRight);













// *****************************Home Page********************************************

var carouselText = document.createElement('div');
carouselText.setAttribute('id', 'carousel-text');

var beReady = document.createElement('p');
beReady.setAttribute("id", "be-ready");
if($('body').hasClass('lang-FR')) {
    beReady.innerHTML = 'Prêt pour les paiements';
} else {
    beReady.innerHTML = "Be Payment Ready";
}

var tm = document.createElement('sup');
tm.setAttribute('id', 'tm');
if($('body').hasClass('lang-FR')) {
    tm.innerHTML = 'MC'
} else {
    tm.innerHTML = "TM";
}

$(beReady).append(tm);

var buyToday = document.createElement('h1');

if($('body').hasClass('lang-FR')) {
    buyToday.innerHTML = "Achetez des fournitures pour terminaux et PDV dès aujourd'hui."
} else {
    buyToday.innerHTML = "Buy terminal and POS supplies today.";
}


$(carouselText).append(beReady);
$(carouselText).append(buyToday);

var $slide = $('div#slide1201');
$slide.append(carouselText);


// Chevron Arrows

var chevronArrow1 = document.createElement('div');
chevronArrow1.setAttribute('class', 'chevron-arrow');
var chevronImg1 = document.createElement('img');
chevronImg1.setAttribute('src', '/img/css/chevron-down.png');
$(chevronArrow1).append(chevronImg1);

if($('body').hasClass('home')) {
    $('#main_content > div.col.top').after(chevronArrow1);
}


var chevronArrow2 = document.createElement('div');
chevronArrow2.setAttribute('class', 'chevron-arrow');
var chevronImg2 = document.createElement('img');
chevronImg2.setAttribute('src', '/img/css/chevron-down.png');
$(chevronArrow2).append(chevronImg2);

if($('body').hasClass('home')) {
    $('#main_content > div.col.center.nosides div.widget.products').after(chevronArrow2);
}


// Buttom Action Buttons

var productImage = document.createElement('div');

productImage.setAttribute('class','product-image');

var $imageAnchor = $('li.item > .container > a.product-img');

$imageAnchor.wrap(productImage);


var quickView = document.createElement('a');
quickView.setAttribute('class','quick-view');

$('.product-image').append(quickView);

$('.quick-view').each(function() {
    var anchorValue = $(this).prev().attr('href');
    $(this).attr('href',anchorValue);
});

$('.quick-view').click(function() {
    $(this).colorbox({iframe:true, width:'1000px', height:'550px', maxHeight: '550px', fixed:true});
});


$('button.btn.sr-add-to-cart').click(function() {
    $(this).colorbox({html:"Hello"});
});

// $('button.btn.sr-add-to-cart').click(function() {
//     $(this).colorbox({html:"Hello"});
// });


// Regular Price and Discount Price

var $discountedPrice = $('.discounted-price');

$discountedPrice.next().css('color', '#999').css('float','left');



// Product Categories

var $firstElement = $('#main_content .col.center.nosides .widget.category .container ul li.even a');

if($('body').hasClass('lang-FR')) {
    $firstElement.text('Matériel et accessoires pour PDV');
    $firstElement.attr('href','/catalog/3718C/pos-hardware-accessories/');
} else {
    $firstElement.text('POS Hardware & Accessories');
    $firstElement.attr('href','/catalog/3718C/matriel-et-accessoires-pour-pdv/');
}


var $secondElement = $('#main_content .col.center.nosides .widget.category .container ul li.odd a');

if($('body').hasClass('lang-FR')) {
    $secondElement.text('Papier et étiquettes');
    $secondElement.attr('href','/catalog/3724C/papier-et-tiquettes/');
} else {
    $secondElement.text('Paper & Labels');
    $secondElement.attr('href','/catalog/3724C/paper-labels/');
}

var thirdElement = document.createElement('li');
var thirdAnchor = document.createElement('a');

if($('body').hasClass('lang-FR')) {
    thirdAnchor.innerHTML = "Autocollants et matériel à afficher";
    thirdAnchor.setAttribute('href','/catalog/3725C/autocollants-et-matriel-afficher/');
} else {
    thirdAnchor.innerHTML = "Stickers & Signage";
    thirdAnchor.setAttribute('href','/catalog/3725C/stickers-signage/');
}


var fourthElement = document.createElement('li');
var fourthAnchor = document.createElement('a');

if($('body').hasClass('lang-FR')) {
    fourthAnchor.innerHTML = "Cartes-cadeaux et cartes de fidélité";
    fourthAnchor.setAttribute('href','/catalog/3726C/cartes-cadeaux-et-cartes-de-fidlit/');
} else {
    fourthAnchor.innerHTML = "Gift & Loyalty";
    fourthAnchor.setAttribute('href','/catalog/3726C/gift-loyalty/');
}

$(thirdElement).append(thirdAnchor);
$(fourthElement).append(fourthAnchor);

var $cateUl = $('#main_content .col.center.nosides .widget.category .container ul');

$cateUl.append(thirdElement).append(fourthElement);


// Service Block

var serviceWrapper = document.createElement('div');
serviceWrapper.setAttribute('class','col bottom');

var serviceBlock = document.createElement('div');
serviceBlock.setAttribute('class', 'service-block');



var serviceItem1 = document.createElement('div');
serviceItem1.setAttribute('class', 'service-item');

var serviceIcon1 = document.createElement('div');
serviceIcon1.setAttribute('class', 'service-icon');

var iconImage1 = document.createElement('img');
iconImage1.setAttribute('src', '/img/css/ProductTracking.svg');

$(serviceIcon1).append(iconImage1);

var serviceContent1 = document.createElement('div');
serviceContent1.setAttribute('class','service-content');

var serviceTitle1 = document.createElement('div');
serviceTitle1.setAttribute('class', 'service-title');

var titleAnchor1 = document.createElement('a');

if($('body').hasClass('lang-FR')) {
    titleAnchor1.innerHTML = "Expédition rapide";
    titleAnchor1.setAttribute('href', '#');
} else {
    titleAnchor1.innerHTML = "Fast Shipping";
    titleAnchor1.setAttribute('href', '/service/returns/#shipping');
}

$(serviceTitle1).append(titleAnchor1);

var serviceDesc1 = document.createElement('div');
serviceDesc1.setAttribute('class','service-desc');

if($('body').hasClass('lang-FR')) {
    serviceDesc1.innerHTML = "La plupart des commandes sont livrées en 3 à 5 jours ouvrables.";
} else {
    serviceDesc1.innerHTML = "Most orders arrive within 3-5 business days.";
}

$(serviceContent1).append(serviceTitle1).append(serviceDesc1);


$(serviceItem1).append(serviceIcon1).append(serviceContent1);



var serviceItem2 = document.createElement('div');
serviceItem2.setAttribute('class', 'service-item');

var serviceIcon2 = document.createElement('div');
serviceIcon2.setAttribute('class', 'service-icon');

var iconImage2 = document.createElement('img');
iconImage2.setAttribute('src', '/img/css/Secure.svg');

$(serviceIcon2).append(iconImage2);

var serviceContent2 = document.createElement('div');
serviceContent2.setAttribute('class','service-content');

var serviceTitle2 = document.createElement('div');
serviceTitle2.setAttribute('class', 'service-title');

var titleAnchor2 = document.createElement('a');

if($('body').hasClass('lang-FR')) {
    titleAnchor2.innerHTML = "Achats sûrs";
    titleAnchor2.setAttribute('href', '/service/returns/#secure');
} else {
    titleAnchor2.innerHTML = "Secure Shopping";
    titleAnchor2.setAttribute('href', '/service/returns/#secure');
}

$(serviceTitle2).append(titleAnchor2);

var serviceDesc2 = document.createElement('div');
serviceDesc2.setAttribute('class','service-desc');

if($('body').hasClass('lang-FR')) {
    serviceDesc2.innerHTML = "Protégés par les normes de sécurité les plus strictes de l?industrie.";
} else {
    serviceDesc2.innerHTML = "Protected by industry-leading security standards.";
}

$(serviceContent2).append(serviceTitle2).append(serviceDesc2);


$(serviceItem2).append(serviceIcon2).append(serviceContent2);



var serviceItem3 = document.createElement('div');
serviceItem3.setAttribute('class', 'service-item');

var serviceIcon3 = document.createElement('div');
serviceIcon3.setAttribute('class', 'service-icon');

var iconImage3 = document.createElement('img');
iconImage3.setAttribute('src', '/img/css/Sync.svg');

$(serviceIcon3).append(iconImage3);

var serviceContent3 = document.createElement('div');
serviceContent3.setAttribute('class','service-content');

var serviceTitle3 = document.createElement('div');
serviceTitle3.setAttribute('class', 'service-title');

var titleAnchor3 = document.createElement('a');
if($('body').hasClass('lang-FR')) {
    titleAnchor3.innerHTML = "Retours et échanges possibles";
    titleAnchor3.setAttribute('href', '#');
} else {
    titleAnchor3.innerHTML = "Returns & Exchanges Available";
    titleAnchor3.setAttribute('href', '/service/returns/#returns');
}

$(serviceTitle3).append(titleAnchor3);

var serviceDesc3 = document.createElement('div');
serviceDesc3.setAttribute('class','service-desc');

if($('body').hasClass('lang-FR')) {
    serviceDesc3.innerHTML = "Si vous n?êtes pas entièrement satisfait de votre achat.";
} else {
    serviceDesc3.innerHTML = "If you aren't fully satisfied with your purchase.";
}

$(serviceContent3).append(serviceTitle3).append(serviceDesc3);


$(serviceItem3).append(serviceIcon3).append(serviceContent3);


$(serviceBlock).append(serviceItem1).append(serviceItem2).append(serviceItem3);

$(serviceWrapper).append(serviceBlock);

$('body.home #main_content .col.center.nosides').after(serviceWrapper);

















// *****************************Product Page********************************************


// Adding Product Page Breadcrumbs

var $breadcrumbs = $('#breadcrumbs > div.container');

var $productName = $('#product_details > .col.two > h1.title.product').text();

var productLabel = document.createElement('div');

productLabel.setAttribute("id", "product_name");

productLabel.innerHTML = $productName;

$breadcrumbs.append(productLabel);



//Remove Lightbox Effect

$('#product_details #product-image .product-media-thumbnails a').attr('rel', '');



// Adding Product Page Qty Arrows


    // Left Arrow

var $qtyLabel = $('#product_details > .col.two > .product.actions li.field.qty > label');

var leftArr = document.createElement('span');

leftArr.setAttribute("id", "left_arrow");

$qtyLabel.after(leftArr);


    // Right Arrow
    
var $qtyInput = $('#product_details > .col.two > .product.actions li.field.qty > input');

var rightArr = document.createElement('span');

rightArr.setAttribute("id", "right_arrow");

$qtyInput.after(rightArr);



// Arrow Click Event
var qtyVal = document.getElementById("qty");

$('span#left_arrow').click(function() {
    if(parseInt(qtyVal.value) > 1) {
        qtyVal.value = parseInt(qtyVal.value) - 1;
    }
});

$('span#right_arrow').click(function() {
    qtyVal.value = parseInt(qtyVal.value) + 1;
});


// Availability

var availability = document.createElement('div');
availability.setAttribute('class', 'stock-availability');
if($('body').hasClass('lang-FR')) {
    availability.innerHTML = 'Disponibilité: ';
} else {
    availability.innerHTML = 'Availability: ';
};

$('#product_details #stock').prepend(availability);

var $stockIndicator = $('#product_details #stock span.stock-qty > div:first-child');

if($stockIndicator.hasClass('in-stock')) {
   if($('body').hasClass('lang-FR')) {
        $stockIndicator.text('En stock');
        $stockIndicator.css('color', '#3cc696');
    } else {
        $stockIndicator.text('In Stock');
        $stockIndicator.css('color', '#3cc696');
    }
} else {
    if($('body').hasClass('lang-FR')) {
        $stockIndicator.text('En rupture de stock');
        $stockIndicator.css('color', '#ed4337');
    } else {
        $stockIndicator.text('Out of stock');
        $stockIndicator.css('color', '#ed4337');
    }
};


// Add Description on the top

var productDesc = document.createElement('div');
productDesc.setAttribute('class',"product-desc");

var productDescContent = $('#tab_desc > div.ldesc').text();

productDesc.innerHTML = productDescContent;

$('#stock').after(productDesc);


// Change "Qty" to "Quantity"
if($('body').hasClass('lang-FR')) {
    $('#product_details > .col.two > .product.actions li.field.qty label').text('Quantité: ');
} else {
    $('#product_details > .col.two > .product.actions li.field.qty label').text('Quantity: ');
}


// Related Products

if($('body').hasClass('lang-FR')) {
    $('#main_content div.related-products.results > h2.title').text('Vous pourriez également être intéressé par le(s) produit(s) suivant(s)');
} else {
    $('#main_content div.related-products.results > h2.title').text('You may also be interested in the following product(s)');
}

















// ****************************Search Page*******************************************


// Add Search Page Breadcrumbs


var $searchBreadcrumbs = $('#search-breadcrumbs > div.container');

var $productCategory = $('#cat_results > .container > h3.title').text();

var categoryTrim = '';

if($('body').hasClass('lang-FR')) {
    categoryTrim = $productCategory.replace('Catégories de ','');
} else {
    categoryTrim = $productCategory.replace('Categories in ','');
}


var categoryLabel = document.createElement('div');

categoryLabel.setAttribute("id", "category-name");

categoryLabel.innerHTML = categoryTrim;

$searchBreadcrumbs.append(categoryLabel);




// AJAX Content Script

$(document).ajaxComplete(function() {
    
    var $searchLeft = $('#main_search_result > .col.left');
    var $searchRight = $('#main_search_result > .col.center.search-results');

    var searchWrapper = document.createElement('div');
    searchWrapper.setAttribute('class', 'search-wrapper');

    var $searchBreadcrumbs = $('#main_search_result > .breadcrumbs');
    
    $searchBreadcrumbs.after(searchWrapper);

    $(searchWrapper).append($searchLeft).append($searchRight);
    
    var $discountedPrice = $('.discounted-price');

    $discountedPrice.next().css('color', '#999').css('float','left');
});


// window.setTimeout(function() {
//     // Wrap two cols


//     var $searchLeft = $('#main_search_result > .col.left');
//     var $searchRight = $('#main_search_result > .col.center.search-results');

//     var searchWrapper = document.createElement('div');
//     searchWrapper.setAttribute('class', 'search-wrapper');

//     var $searchBreadcrumbs = $('#main_search_result > .breadcrumbs');
    
//     $searchBreadcrumbs.after(searchWrapper);

//     $(searchWrapper).append($searchLeft).append($searchRight);
    
//     var $discountedPrice = $('.discounted-price');

//     $discountedPrice.next().css('color', '#999').css('float','left');

// }, 1000);


// Add "Category"

var categTitle = document.createElement('h1');

if($('body').hasClass('lang-FR')) {
    categTitle.innerHTML = "Catégorie";
} else {
    categTitle.innerHTML = "Category";
}


var $leftCol = $('#main_search_result .col.left > .container');

$leftCol.prepend(categTitle);
















// ****************************Shopping Cart Page**************************************

var $cartWrapper = $('#main_content #cart');

var cartCarousal = document.createElement('div');
cartCarousal.setAttribute('class', 'carousal-container');

var cartImageWrapper = document.createElement('div');
cartImageWrapper.setAttribute('class', 'carousal-image-wrapper');

var cartImage = document.createElement('img');
cartImage.setAttribute('src','/img/css/misc-privacy.jpg');

var cartTitle = document.createElement('div');
cartTitle.setAttribute('class', 'carousal-text');
cartTitle.innerHTML = 'Shopping Cart';

$(cartImageWrapper).append(cartImage);

$(cartCarousal).append(cartImageWrapper).append(cartTitle);

$cartWrapper.prepend(cartCarousal);


$(document).ajaxComplete(function() {
    var $cartWrapper = $('#main_content #cart');

var cartCarousal = document.createElement('div');
cartCarousal.setAttribute('class', 'carousal-container');

var cartImageWrapper = document.createElement('div');
cartImageWrapper.setAttribute('class', 'carousal-image-wrapper');

var cartImage = document.createElement('img');
cartImage.setAttribute('src','/img/css/misc-privacy.jpg');

var cartTitle = document.createElement('div');
cartTitle.setAttribute('class', 'carousal-text');
cartTitle.innerHTML = 'Shopping Cart';

$(cartImageWrapper).append(cartImage);

$(cartCarousal).append(cartImageWrapper).append(cartTitle);

$cartWrapper.prepend(cartCarousal);
});
















// ****************************Policy Page************************************


var $policyWrapper = $('#main_content > .policy > .container');

var policyCarousal = document.createElement('div');
policyCarousal.setAttribute('class', 'carousal-container');

var policyImageWrapper = document.createElement('div');
policyImageWrapper.setAttribute('class', 'carousal-image-wrapper');

var policyImage = document.createElement('img');
policyImage.setAttribute('src','/img/css/misc-privacy.jpg');

var policyTitle = document.createElement('div');
policyTitle.setAttribute('class', 'carousal-text')
policyTitle.innerHTML = 'Policies';

$(policyImageWrapper).append(policyImage);

$(policyCarousal).append(policyImageWrapper).append(policyTitle);

$policyWrapper.prepend(policyCarousal);

















// ****************************Login Page********************************


var $loginWrapper = $('body.login .wrapper.body > .container');

var loginCarousal = document.createElement('div');
loginCarousal.setAttribute('class', 'carousal-container');

var loginImageWrapper = document.createElement('div');
loginImageWrapper.setAttribute('class', 'carousal-image-wrapper');

var loginImage = document.createElement('img');
loginImage.setAttribute('src','/img/css/misc-privacy.jpg');

var loginTitle = document.createElement('div');
loginTitle.setAttribute('class', 'carousal-text');
if($('body').hasClass('lang-FR')) {
    loginTitle.innerHTML = 'Se Connecter';
} else {
    loginTitle.innerHTML = 'Login';
}


$(loginImageWrapper).append(loginImage);

$(loginCarousal).append(loginImageWrapper).append(loginTitle);

$loginWrapper.prepend(loginCarousal);
















// ****************************Account Page********************************


var $accountWrapper = $('body.create_account .wrapper.body > .container');

var accountCarousal = document.createElement('div');
accountCarousal.setAttribute('class', 'carousal-container');

var accountImageWrapper = document.createElement('div');
accountImageWrapper.setAttribute('class', 'carousal-image-wrapper');

var accountImage = document.createElement('img');
accountImage.setAttribute('src','/img/css/misc-privacy.jpg');

var accountTitle = document.createElement('div');
accountTitle.setAttribute('class', 'carousal-text');
if($('body').hasClass('lang-FR')) {
    accountTitle.innerHTML = 'Créer un nouveau compte client';
} else {
    accountTitle.innerHTML = 'Create New Customer Account';
}


$(accountImageWrapper).append(accountImage);

$(accountCarousal).append(accountImageWrapper).append(accountTitle);

$accountWrapper.prepend(accountCarousal);


var accountPersonal = document.createElement('h2');
accountPersonal.setAttribute('class', 'legend');
if($('body').hasClass('lang-FR')) {
    accountPersonal.innerHTML = 'Informations personnelles';
} else {
    accountPersonal.innerHTML = 'Personal Information';
}

$('body.create_account #form-validate > fieldset > div:nth-child(2)').prepend(accountPersonal);

var accountLogin = document.createElement('h2');
accountLogin.setAttribute('class', 'legend');
if($('body').hasClass('lang-FR')) {
    accountLogin.innerHTML = 'Informations de connexion';
} else {
    accountLogin.innerHTML = 'Login Information';
}

$('body.create_account #form-validate > fieldset > div:nth-child(3)').prepend(accountLogin);


















// ****************************Color Box********************************

$(document).bind('cbox_complete', function() {
    $('iframe').css('margin-top','-30%').css('height', '159%');
    $('#lightboxOverlay').css('width','100%').css('height','100%').css('display','block');
});

$(document).bind('cbox_closed', function() {
    $('#lightboxOverlay').css('display','none');
});


