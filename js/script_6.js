
// *****************************Meta Tag*************************************************

var metaTag = document.createElement('meta');
metaTag.setAttribute('name', 'viewport');
metaTag.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');

$('head').append(metaTag);


var $titleTagText = $('head title').text();
var $titleTagText_parsed = $.parseHTML($titleTagText);
$('head title').html($titleTagText_parsed);


// *****************************Menu Bar*************************************************

if (window.matchMedia('(max-width: 1024px)').matches) {
    // Logo
    if($('body').hasClass('lang-FR')) {
        $('.logo > a > img').attr("src","/img/css/logo_wht_fr_short.png");
    } else {
        $('.logo > a > img').attr("src","/img/css/logo_wht_en_short.png");
    }
} else {
    // Logo
    if($('body').hasClass('lang-FR')) {
     $('.logo > a > img').attr("src","/img/css/logo_wht_fr.png");
    };

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
}

// Cart Account

var cartSpan = document.createElement('span');
var accountSpan = document.createElement('span');
var logoutSpan = document.createElement('span');
var langSpan = document.createElement('span');

if (window.matchMedia('(max-width: 1024px)').matches) {
    $('div.cart-account > a.cart').text('').append(cartSpan);
    $('div.cart-account > a.account').text('').append(accountSpan);
    $('div.cart-account > a.logout').text('').append(logoutSpan);
    $('div.cart-account > a.lang').text('').append(langSpan);
}


// Search Toggle

var searchToggle = document.createElement('a');

searchToggle.setAttribute('class', 'search');

searchToggle.setAttribute('href', '#');

var searchSpan = document.createElement('span');

$(searchToggle).append($(searchSpan));
if (window.matchMedia('(min-width: 1024px)').matches) {
    if($('body').hasClass('lang-FR')) {
        $(searchToggle).append("Rechercher");
    } else {
        $(searchToggle).append("Search");
    }
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







// ********************************Footer*************************************************

if($('body').hasClass('lang-FR')) {
    $('div.footer ul li.terms a').text("Conditions d'utilisation");
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


function homePageDOM () {

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


    // Products Slider

    var sliderWrapper = document.createElement('ul');
    sliderWrapper.setAttribute('id', 'products-slider');

    var $featuredProductsContainer = $('body.home #main_content div.col.center.nosides .widget.products .container .content.grid');
    $featuredProductsContainer.addClass('jcarousel');
    $featuredProductsContainer.prepend(sliderWrapper);

    var $featuredProducts = $('body.home #main_content div.col.center.nosides .widget.products .container .content.grid li');
    $(sliderWrapper).append($featuredProducts);
    
    $('#products-slider > li.item div.product-name a').each(function() {
        var $productName = $(this).text();
        var $productName_parsed = $.parseHTML($productName);
        $(this).html($productName_parsed);
    })

    var prevProductArrow = document.createElement('a');
    prevProductArrow.setAttribute('href', '#');
    prevProductArrow.setAttribute('class', 'jcarousel-control-prev');

    var nextProductArrow = document.createElement('a');
    nextProductArrow.setAttribute('href', '#');
    nextProductArrow.setAttribute('class', 'jcarousel-control-next');

    $featuredProductsContainer.append(prevProductArrow);
    $featuredProductsContainer.append(nextProductArrow);

    // Buttom Action Buttons

    // var productImage = document.createElement('div');

    // productImage.setAttribute('class','product-image');

    // var $imageAnchor = $('li.item > .container > a.product-img');

    // $imageAnchor.wrap(productImage);


    // var quickView = document.createElement('a');
    // quickView.setAttribute('class','quick-view');

    // $('.product-image').append(quickView);

    // $('.quick-view').each(function() {
    //     var anchorValue = $(this).prev().attr('href');
    //     $(this).attr('href',anchorValue);
    // });

    // $('.quick-view').click(function() {
    //     $(this).colorbox({iframe:true, width:'1000px', height:'550px', maxHeight: '550px', fixed:true});
    // });


    // $('button.btn.sr-add-to-cart').click(function() {
    //     $(this).colorbox({html:"Hello"});
    // });

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
        titleAnchor1.setAttribute('href', '/service/returns/#expedition');
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
        titleAnchor2.setAttribute('href', '/service/returns/#securitaires');
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
        titleAnchor3.setAttribute('href', '/service/returns/#retours');
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

}


if($('body').hasClass('home')) {
    homePageDOM();
}


















// *****************************Product Page********************************************

function productPageDOM () {
    var $productDetailsWrapper = $('body.product-details .wrapper.body > .container');
  
    var productDetailsCarousal = document.createElement('div');     
    productDetailsCarousal.setAttribute('class', 'carousal-container');

    var productDetailsImageWrapper = document.createElement('div');
    productDetailsImageWrapper.setAttribute('class', 'carousal-image-wrapper');

    var productDetailsImage = document.createElement('img');
    productDetailsImage.setAttribute('src','/img/css/misc-privacy.jpg');

    var productDetailsTitle = document.createElement('div');
    productDetailsTitle.setAttribute('class', 'carousal-text');

    var $productName = $('#product_details > .col.two > h1.title.product').text();
    
    var $newProductName = $.parseHTML($productName);
    
    $('#product_details > .col.two > h1.title.product').html($newProductName);

    productDetailsTitle.innerHTML = $productName;

    $(productDetailsImageWrapper).append(productDetailsImage);

    $(productDetailsCarousal).append(productDetailsImageWrapper).append(productDetailsTitle);

    $productDetailsWrapper.prepend(productDetailsCarousal);


    //Remove Lightbox Effect

    $('#product_details #product-image .product-media-thumbnails a').attr('rel', '');

    //Make the Product Image Unclickable
    
    $('#main_image_a').removeAttr('href');
    $('#main_image_a').removeAttr('rel');
    
    //Product ID
    
    $('div.col.two > h1.title.product').after($('div.col.two > div#upc'));
    
    $('div.col.two > div#upc > span:first-child').replaceWith('SKU: ');
    

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

    // Remove br tag in the Title
    
    $('h1.title.product br').replaceWith(' ');

    // Add Description on the top

    var productDesc = document.createElement('div');
    productDesc.setAttribute('class',"product-desc");

    var productDescContent = $('#tab_desc > div.ldesc').html();

    productDesc.innerHTML = productDescContent;

    $('#stock').after(productDesc);
    
    // var $productdescription = $('#product_details > .col.two > div.product-desc').text();
    
    // var $newProductdescription = $.parseHTML($productdescription);
    
    // $('#product_details > .col.two > .product-desc').html($newProductdescription);   



    // Change "Qty" to "Quantity"
    if($('body').hasClass('lang-FR')) {
        $('#product_details > .col.two > .product.actions li.field.qty label').text('Quantité: ');
    } else {
        $('#product_details > .col.two > .product.actions li.field.qty label').text('Quantity: ');
    }
    
    
     // Product Thumbnail Carousel
     
    var productThumbnailContainer = document.createElement('div');
    productThumbnailContainer.setAttribute('class', 'jcarousel thumbnails');

    var productThumbnailWrapper = document.createElement('ul');
    productThumbnailWrapper.setAttribute('id', 'thumbnail-slider');

    var $productThumbnails = $('body.product-details #main_content #product-image .product-media-thumbnails div.product-thumb-wrapper');
    $productThumbnails.each(function() {
        var liWrapper = document.createElement('li');
        liWrapper.setAttribute('class', 'thumbnail-li');
        $(this).wrap(liWrapper);
    });
    
    var $productThumbnailsLi = $('body.product-details #main_content #product-image .product-media-thumbnails li.thumbnail-li');
    

    $(productThumbnailWrapper).append($productThumbnailsLi);
    
    $(productThumbnailContainer).prepend(productThumbnailWrapper);

    var prevThumbnailArrow = document.createElement('a');
    prevThumbnailArrow.setAttribute('href', '#');
    prevThumbnailArrow.setAttribute('class', 'jcarousel-control-prev thumb-prev');

    var nextThumbnailArrow = document.createElement('a');
    nextThumbnailArrow.setAttribute('href', '#');
    nextThumbnailArrow.setAttribute('class', 'jcarousel-control-next thumb-next');

    $(productThumbnailContainer).append(prevThumbnailArrow);
    $(productThumbnailContainer).append(nextThumbnailArrow);
    
    var $productThumbnailsDiv = $('body.product-details #main_content div.col.center.nosides > .container #product-image > div.product-media-thumbnails');
    $productThumbnailsDiv.append(productThumbnailContainer);
    
    $('#thumbnail-slider li:first-child').addClass('selected');

    $productThumbnailsLi.click(function() {
        $productThumbnailsLi.removeClass('selected');
        $(this).addClass('selected');
    });
    
    // Related Products

    if($('body').hasClass('lang-FR')) {
        $('#main_content div.related-products.results > h2.title').text('Vous pourriez également être intéressé par le(s) produit(s) suivant(s)');
    } else {
        $('#main_content div.related-products.results > h2.title').text('You may also be interested in the following product(s)');
    }
    
    
     // Related Products Slider
     
    var relatedProductsContainer = document.createElement('div');
    relatedProductsContainer.setAttribute('class', 'jcarousel');

    var sliderWrapper = document.createElement('ul');
    sliderWrapper.setAttribute('id', 'related-slider');

    var $relatedProducts = $('body.product-details #main_content div.col.center.nosides > .container .grid.related-products.results > ul li');
    $(sliderWrapper).append($relatedProducts);
    
    $(relatedProductsContainer).prepend(sliderWrapper);

    var prevProductArrow = document.createElement('a');
    prevProductArrow.setAttribute('href', '#');
    prevProductArrow.setAttribute('class', 'jcarousel-control-prev');

    var nextProductArrow = document.createElement('a');
    nextProductArrow.setAttribute('href', '#');
    nextProductArrow.setAttribute('class', 'jcarousel-control-next');

    $(relatedProductsContainer).append(prevProductArrow);
    $(relatedProductsContainer).append(nextProductArrow);
    
    var $relatedTitle = $('body.product-details #main_content div.col.center.nosides > .container .grid.related-products.results > h2');
    $relatedTitle.after(relatedProductsContainer);
    
    // $('#related-slider li div.product-name a').each(function() {
    //     var $relatedProductsName_parsed = $.parseHTML($(this).text());
    //     $(this).html($relatedProductsName_parsed);
    // });
}


if($('body').hasClass('product-details')) {
    productPageDOM();
}

















// ****************************Search Page*******************************************

function searchPageDOM () {
    var $searchResultsWrapper = $('body.search-results .wrapper.body > .container');
  
    var searchResultsCarousal = document.createElement('div');     
    searchResultsCarousal.setAttribute('class', 'carousal-container');

    var searchResultsImageWrapper = document.createElement('div');
    searchResultsImageWrapper.setAttribute('class', 'carousal-image-wrapper');

    var searchResultsImage = document.createElement('img');
    searchResultsImage.setAttribute('src','/img/css/restaurant.png');

    var searchResultsTitle = document.createElement('div');
    searchResultsTitle.setAttribute('class', 'carousal-text');

    var $productCategory = $('#cat_results > .container > h3.title').text();
    var categoryTrim = '';
    if($('body').hasClass('lang-FR')) {
        categoryTrim = $productCategory.replace('Catégories de ','');
    } else {
        categoryTrim = $productCategory.replace('Categories in ','');
    }

    searchResultsTitle.innerHTML = categoryTrim;

    $(searchResultsImageWrapper).append(searchResultsImage);

    $(searchResultsCarousal).append(searchResultsImageWrapper).append(searchResultsTitle);

    $searchResultsWrapper.prepend(searchResultsCarousal);



    // AJAX Content Script

    $(document).ajaxComplete(function() {
        
        //Parse Product Name
        
        // $('div.product-name a').each(function() {
        //     var $productName = $(this).text();
        //     var $productName_parsed = $.parseHTML($productName);
        //     $(this).html($productName_parsed);
        // });
        
        
        
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



    // Add "Category"

    var categTitle = document.createElement('h1');

    if($('body').hasClass('lang-FR')) {
        categTitle.innerHTML = "Catégorie";
    } else {
        categTitle.innerHTML = "Category";
    }


    var $leftCol = $('#main_search_result .col.left > .container');

    $leftCol.prepend(categTitle);

    //Search Button
    
     if($('body').hasClass('lang-FR')) {
        $('#search_frm button').text('Rechercher');
    } else {
        $('#search_frm button').text('Search');
    }
    

    // Pager

    $(document).ajaxComplete(function() { 
        //$('a.forward').parent().css('display', 'none');
        $('a.forward').text('');
        
        //$('a.last').parent().css('display', 'none');
        $('a.last').text('');
        
        //$('a.first').parent().css('display', 'none');
        $('a.first').text('');
        
        //$('a.back').parent().css('display', 'none');
        $('a.back').text('');
        
        $('a.forward-five').text('');
        
        $('a.back-five').text('');
        
        if (window.matchMedia('(max-width: 500px)').matches) {
            $('a.forward').parent().css('display', 'none');
            $('a.last').parent().css('display', 'none');
            $('a.first').parent().css('display', 'none');
            $('a.back').parent().css('display', 'none');
            $('a.forward-five').parent().css('display', 'none');
            $('a.back-five').parent().css('display', 'none');
        }
    });
}



if($('body').hasClass('search-results')) {
    searchPageDOM();
}







// ****************************Shopping Cart Page**************************************

// var $cartWrapper = $('#main_content #cart');

// var cartCarousal = document.createElement('div');
// cartCarousal.setAttribute('class', 'carousal-container');

// var cartImageWrapper = document.createElement('div');
// cartImageWrapper.setAttribute('class', 'carousal-image-wrapper');

// var cartImage = document.createElement('img');
// cartImage.setAttribute('src','/img/css/misc-privacy.jpg');

// var cartTitle = document.createElement('div');
// cartTitle.setAttribute('class', 'carousal-text');
// cartTitle.innerHTML = 'Shopping Cart';

// $(cartImageWrapper).append(cartImage);

// $(cartCarousal).append(cartImageWrapper).append(cartTitle);

// $cartWrapper.prepend(cartCarousal);


// $(document).ajaxComplete(function() {
//     var $cartWrapper = $('#main_content #cart');

//     var cartCarousal = document.createElement('div');
//     cartCarousal.setAttribute('class', 'carousal-container');

//     var cartImageWrapper = document.createElement('div');
//     cartImageWrapper.setAttribute('class', 'carousal-image-wrapper');

//     var cartImage = document.createElement('img');
//     cartImage.setAttribute('src','/img/css/misc-privacy.jpg');

//     var cartTitle = document.createElement('div');
//     cartTitle.setAttribute('class', 'carousal-text');
//     cartTitle.innerHTML = 'Shopping Cart';

//     $(cartImageWrapper).append(cartImage);

//     $(cartCarousal).append(cartImageWrapper).append(cartTitle);

//     $cartWrapper.prepend(cartCarousal);
// });



function shoppingcartPageDOM () {

    var $cartWrapper = $('body.cart .wrapper.body > div.container');

    var cartCarousal = document.createElement('div');
    cartCarousal.setAttribute('class', 'carousal-container');

    var cartImageWrapper = document.createElement('div');
    cartImageWrapper.setAttribute('class', 'carousal-image-wrapper');

    var cartImage = document.createElement('img');
    cartImage.setAttribute('src','/img/css/misc-privacy.jpg');

    var cartTitle = document.createElement('div');
    cartTitle.setAttribute('class', 'carousal-text');
    if($('body').hasClass('lang-FR')) {
        cartTitle.innerHTML = 'Panier';
    } else {
        cartTitle.innerHTML = 'Shopping Cart';
    }
    

    $(cartImageWrapper).append(cartImage);

    $(cartCarousal).append(cartImageWrapper).append(cartTitle);

    $cartWrapper.prepend(cartCarousal);
    
    var $shoppingCartName_parsed = $.parseHTML($('#shopping-cart-table div.product-name a').text());
    $('#shopping-cart-table div.product-name a').html($shoppingCartName_parsed);
    
    if($('body').hasClass('lang-FR')) {
        $('.promo-code > .container > .content > label').text('Saisissez votre code de réduction');
    } else {
        $('.promo-code > .container > .content > label').text('Enter your coupon code if you have one.');
    }
    
}

    
if($('body').hasClass('cart')) {
    shoppingcartPageDOM();
}









// ****************************Policy Page************************************

function policyPageDOM () {
    var $policyWrapper = $('#main_content > .policy > .container');

    var policyCarousal = document.createElement('div');
    policyCarousal.setAttribute('class', 'carousal-container');

    var policyImageWrapper = document.createElement('div');
    policyImageWrapper.setAttribute('class', 'carousal-image-wrapper');

    var policyImage = document.createElement('img');
    policyImage.setAttribute('src','/img/css/misc-privacy.jpg');

    var $policyTitleText = $('h1.policy-carousel-title').text();
    var policyTitle = document.createElement('div');
    policyTitle.setAttribute('class', 'carousal-text')
    policyTitle.innerHTML = $policyTitleText;

    $(policyImageWrapper).append(policyImage);

    $(policyCarousal).append(policyImageWrapper).append(policyTitle);

    $policyWrapper.prepend(policyCarousal);
}


if($('body').hasClass('policies')) {
    policyPageDOM();
}






// ****************************Login Page********************************

function loginPageDOM () {

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

}


if($('body').hasClass('login')) {
    loginPageDOM();
}









// ****************************Account Page********************************

function registerPageDOM () {

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

}



if($('body').hasClass('create_account')) {
    registerPageDOM();
}










// ****************************Logged-in Page********************************


function controlPanelPageDOM () {

    var $loggedinWrapper = $('body.control-panel.logged-in .wrapper.body > .container #main_content');
  
    var loggedinCarousal = document.createElement('div');     
    loggedinCarousal.setAttribute('class', 'carousal-container');

    var loggedinImageWrapper = document.createElement('div');
    loggedinImageWrapper.setAttribute('class', 'carousal-image-wrapper');

    var loggedinImage = document.createElement('img');
    loggedinImage.setAttribute('src','/img/css/misc-privacy.jpg');

    var loggedinTitle = document.createElement('div');
    loggedinTitle.setAttribute('class', 'carousal-text');
    if($('body').hasClass('lang-FR')) {
        loggedinTitle.innerHTML = 'Mon compte';
    } else {
        loggedinTitle.innerHTML = 'My Account';
    }


    $(loggedinImageWrapper).append(loggedinImage);

    $(loggedinCarousal).append(loggedinImageWrapper).append(loggedinTitle);

    $loggedinWrapper.prepend(loggedinCarousal);


    var myAccountTitle = document.createElement('div');
    myAccountTitle.setAttribute('class', 'block-title');
    if($('body').hasClass('lang-FR')) {
        myAccountTitle.innerHTML = 'Mon compte';
    } else {
        myAccountTitle.innerHTML = 'My Account';
    }

    var $myAccountLeft = $('body.control-panel.logged-in .wrapper.body > .container > #main_content .col.left .container');

    $myAccountLeft.prepend(myAccountTitle);


    var accountInfo = document.createElement('div');
    accountInfo.setAttribute('class', 'account-information-title');
    if($('body').hasClass('lang-FR')) {
        accountInfo.innerHTML = 'Informations sur le compte';
    } else {
        accountInfo.innerHTML = 'Account Information';
    }
    $('div.info-box.contact-information').before(accountInfo);

    var addressBook = document.createElement('div');
    addressBook.setAttribute('class','address-book-title');
    if($('body').hasClass('lang-FR')) {
        addressBook.innerHTML = "Carnet d'adresses";
    } else {
        addressBook.innerHTML = 'Address Book';
    }
    $('div.info-box.billing-address').before(addressBook);


    var myAccountWrapper = document.createElement('div');
    myAccountWrapper.setAttribute('class', 'myaccount-wrapper');
    $('body.control-panel.logged-in #main_content > div.carousal-container').after(myAccountWrapper);
    $(myAccountWrapper).append($(myAccountWrapper).next()).append($(myAccountWrapper).next());


    var $orderStatus = $('div.my-account#main_column div.orders >  table.orders > tbody tr td.status');

    $orderStatus.each(function() {
        if($(this).text().indexOf('Cancelled') !== -1 || $(this).text().indexOf('Annulée') !== -1) {
            $(this).css('color', '#ED4337');
        } else {
            $(this).css('color', '#1DA897');
        }
    });
}




if($('body').hasClass('control-panel logged-in')) {
    controlPanelPageDOM();
}








// ****************************Checkout Page********************************

function checkoutPageDOM () {
    var $checkoutWrapper = $('body.checkout .wrapper.body > .container');
  
    var checkoutCarousal = document.createElement('div');     
    checkoutCarousal.setAttribute('class', 'carousal-container');

    var checkoutImageWrapper = document.createElement('div');
    checkoutImageWrapper.setAttribute('class', 'carousal-image-wrapper');

    var checkoutImage = document.createElement('img');
    checkoutImage.setAttribute('src','/img/css/misc-privacy.jpg');

    var checkoutTitle = document.createElement('div');
    checkoutTitle.setAttribute('class', 'carousal-text');
    if($('body').hasClass('lang-FR')) {
        checkoutTitle.innerHTML = 'Régler mes achats';
    } else {
        checkoutTitle.innerHTML = 'Checkout';
    }


    $(checkoutImageWrapper).append(checkoutImage);

    $(checkoutCarousal).append(checkoutImageWrapper).append(checkoutTitle);

    $checkoutWrapper.prepend(checkoutCarousal);


    // var checkoutProgressWrapper = document.createElement('div');
    // checkoutProgressWrapper.setAttribute('class', 'checkout-progress-wrapper');
    // $('body.checkout #main_content').prepend(checkoutProgressWrapper);
    // $(checkoutProgressWrapper).append($(checkoutProgressWrapper).next()).append($(checkoutProgressWrapper).next());


    // $(document).ajaxComplete(function() {
    //     var checkoutProgressWrapper = document.createElement('div');
    //     checkoutProgressWrapper.setAttribute('class', 'checkout-progress-wrapper');
    //     $('body.checkout #main_content').prepend(checkoutProgressWrapper);
    //     $(checkoutProgressWrapper).append($(checkoutProgressWrapper).next()).append($(checkoutProgressWrapper).next());
    // });

    $('body.checkout #main_content').css('width', '90%').css('max-width', '1200px').css('margin-left','auto').css('margin-right','auto').css('min-height','500px');

    $(document).ajaxComplete(function() { 
        $('body.checkout #main_content').css('width', '90%').css('max-width', '1200px').css('margin-left','auto').css('margin-right','auto').css('min-height','500px');
    });

}




if($('body').hasClass('checkout')) {
    checkoutPageDOM();
}










// ****************************Order Review Page********************************

function orderReviewPageDOM () {
    var $orderReviewWrapper = $('body.order-review .wrapper.body > .container');
  
    var orderReviewCarousal = document.createElement('div');     
    orderReviewCarousal.setAttribute('class', 'carousal-container');

    var orderReviewImageWrapper = document.createElement('div');
    orderReviewImageWrapper.setAttribute('class', 'carousal-image-wrapper');

    var orderReviewImage = document.createElement('img');
    orderReviewImage.setAttribute('src','/img/css/misc-privacy.jpg');

    var orderReviewTitle = document.createElement('div');
    orderReviewTitle.setAttribute('class', 'carousal-text');
    if($('body').hasClass('lang-FR')) {
        orderReviewTitle.innerHTML = 'Vérification de commande';
    } else {
        orderReviewTitle.innerHTML = 'Order Review';
    }


    $(orderReviewImageWrapper).append(orderReviewImage);

    $(orderReviewCarousal).append(orderReviewImageWrapper).append(orderReviewTitle);

    $orderReviewWrapper.prepend(orderReviewCarousal);

    $('body.order-review #main_content').css('width', '90%').css('max-width', '1200px').css('margin-left','auto').css('margin-right','auto').css('min-height','500px');

    $(document).ajaxComplete(function() { 
        $('body.order-review #main_content').css('width', '90%').css('max-width', '1200px').css('margin-left','auto').css('margin-right','auto').css('min-height','500px');
    });

}



if($('body').hasClass('order-review')) {
    orderReviewPageDOM();
}









// ****************************Order Details Page********************************

function orderDetailsPageDOM () {

    var $orderDetailsWrapper = $('body.order-details .wrapper.body > .container');
  
    var orderDetailsCarousal = document.createElement('div');     
    orderDetailsCarousal.setAttribute('class', 'carousal-container');

    var orderDetailsImageWrapper = document.createElement('div');
    orderDetailsImageWrapper.setAttribute('class', 'carousal-image-wrapper');

    var orderDetailsImage = document.createElement('img');
    orderDetailsImage.setAttribute('src','/img/css/misc-privacy.jpg');

    var orderDetailsTitle = document.createElement('div');
    orderDetailsTitle.setAttribute('class', 'carousal-text');
    if($('body').hasClass('lang-FR')) {
        orderDetailsTitle.innerHTML = 'Mes commandes';
    } else {
        orderDetailsTitle.innerHTML = 'My Orders';
    }


    $(orderDetailsImageWrapper).append(orderDetailsImage);

    $(orderDetailsCarousal).append(orderDetailsImageWrapper).append(orderDetailsTitle);

    $orderDetailsWrapper.prepend(orderDetailsCarousal);

    $('body.order-details #main_content').css('width', '90%').css('max-width', '1200px').css('margin-left','auto').css('margin-right','auto').css('min-height','700px');

    // $(document).ajaxComplete(function() { 
    //     $('body.order-details #main_content').css('width', '90%').css('max-width', '1200px').css('margin-left','auto').css('margin-right','auto').css('min-height','500px');
    // });


    var myAccountTitle2 = document.createElement('div');
    myAccountTitle2.setAttribute('class', 'block-title');
    if($('body').hasClass('lang-FR')) {
        myAccountTitle2.innerHTML = 'Mon compte';
    } else {
        myAccountTitle2.innerHTML = 'My Account';
    }

    var $myAccountLeft2 = $('body.order-details.logged-in .wrapper.body > .container > #main_content .col.left .container');

    $myAccountLeft2.prepend(myAccountTitle2);

}


if($('body').hasClass('order-details')) {
    orderDetailsPageDOM();
}
















// ****************************Reset Password Page********************************

function resetPasswordPageDOM () {

    var $resetPasswordWrapper = $('body.reset-password .wrapper.body > .container');
  
    var resetPasswordCarousal = document.createElement('div');     
    resetPasswordCarousal.setAttribute('class', 'carousal-container');

    var resetPasswordImageWrapper = document.createElement('div');
    resetPasswordImageWrapper.setAttribute('class', 'carousal-image-wrapper');

    var resetPasswordImage = document.createElement('img');
    resetPasswordImage.setAttribute('src','/img/css/misc-privacy.jpg');

    var resetPasswordTitle = document.createElement('div');
    resetPasswordTitle.setAttribute('class', 'carousal-text');
    if($('body').hasClass('lang-FR')) {
        resetPasswordTitle.innerHTML = 'Réinitialiser votre mot de passe';
    } else {
        resetPasswordTitle.innerHTML = 'Forgot Your Password';
    }
    
    $(resetPasswordImageWrapper).append(resetPasswordImage);

    $(resetPasswordCarousal).append(resetPasswordImageWrapper).append(resetPasswordTitle);

    $resetPasswordWrapper.prepend(resetPasswordCarousal);
    
    var resetPasswordText = document.createElement('p');
    if($('body').hasClass('lang-FR')) {
        resetPasswordText.innerHTML = 'SVP Entrez votre adresse courriel ci-dessous. Vous recevrez un lien pour renouveler votre mot de passe.';
    } else {
        resetPasswordText.innerHTML = 'Please enter your email address below. You will receive a link to reset your password.';
    }
    
    $('body.reset-password #main_content h1').after(resetPasswordText);

}


if($('body').hasClass('reset-password')) {
    resetPasswordPageDOM();
}







// ****************************Mobile Drop-down Menu********************************

var dropDown = document.createElement('ul');
dropDown.setAttribute('id', 'drop-down');

var productsParent = document.createElement('li');
productsParent.setAttribute('class', 'drop-down-parent');
if($('body').hasClass('lang-FR')) {
    productsParent.innerHTML = 'Produits';
} else {
    productsParent.innerHTML = 'Products';
}


var productsParentWrapper = document.createElement('ul');


var posParent = document.createElement('li');
posParent.setAttribute('class', 'drop-down-children');
posParent.innerHTML = 'POS Hardware & Accessories';

var posParentWrapper = document.createElement('ul');

var posStandItem = document.createElement('li');
var posStandAnchor = document.createElement('a');
posStandAnchor.setAttribute('href', '/catalog/3719C/POS%20Stands/');
if($('body').hasClass('lang-FR')) {
    posStandAnchor.innerHTML = "Supports pour PDV";
} else {
    posStandAnchor.innerHTML = 'POS Stands';
}
$(posStandItem).append(posStandAnchor);


var printersItem = document.createElement('li');
var printersAnchor = document.createElement('a');
printersAnchor.setAttribute('href', '/catalog/3720C/Printers/');
if($('body').hasClass('lang-FR')) {
    printersAnchor.innerHTML = "Imprimantes";
} else {
    printersAnchor.innerHTML = "Printers";
}
$(printersItem).append(printersAnchor);


var ipadItem = document.createElement('li');
var ipadAnchor = document.createElement('a');
ipadAnchor.setAttribute('href', '/catalog/3721C/iPad%20Enclosures/');
if($('body').hasClass('lang-FR')) {
    ipadAnchor.innerHTML = "Chevalets pour iPad";
} else {
    ipadAnchor.innerHTML = "iPad Enclosures";
}
$(ipadItem).append(ipadAnchor);


var cashDrawersItem = document.createElement('li');
var cashDrawersAnchor = document.createElement('a');
cashDrawersAnchor.setAttribute('href', '/catalog/3722C/Cash%20Drawers/');
if($('body').hasClass('lang-FR')) {
    cashDrawersAnchor.innerHTML = "Tiroirs-caisses";
} else {
    cashDrawersAnchor.innerHTML = 'Cash Drawers';
}
$(cashDrawersItem).append(cashDrawersAnchor);


var privacyItem = document.createElement('li');
var privacyAnchor = document.createElement('a');
privacyAnchor.setAttribute('href', '/catalog/3723C/Privacy%20&%20Security/');
if($('body').hasClass('lang-FR')) {
    privacyAnchor.innerHTML = "Confidentialité et sécurité";
} else {
    privacyAnchor.innerHTML = 'Privacy & Security';
}
$(privacyItem).append(privacyAnchor);


$(posParentWrapper).append(posStandItem);
$(posParentWrapper).append(printersItem);
$(posParentWrapper).append(ipadItem);
$(posParentWrapper).append(cashDrawersItem);
$(posParentWrapper).append(privacyItem);


$(posParent).append(posParentWrapper);


var paperItem = document.createElement('li');
paperItem.setAttribute('class', 'drop-down-children');
var paperAnchor = document.createElement('a');
if($('body').hasClass('lang-FR')) {
    paperAnchor.innerHTML = 'Papier et étiquettes';
    paperAnchor.setAttribute('href','/catalog/3724C/papier-et-tiquettes/');
} else {
    paperAnchor.innerHTML = 'Paper & Labels';
    paperAnchor.setAttribute('href','/catalog/3724C/paper-labels/');
}
$(paperItem).append(paperAnchor);


var stickersItem = document.createElement('li');
stickersItem.setAttribute('class', 'drop-down-children');
var stickersAnchor = document.createElement('a');
if($('body').hasClass('lang-FR')) {
    stickersAnchor.setAttribute('href', '/catalog/3725C/autocollants-et-matriel-afficher/');
    stickersAnchor.innerHTML = "Autocollants et matériel à afficher";
} else {
    stickersAnchor.setAttribute('href', '/catalog/3725C/stickers-signage/');
    stickersAnchor.innerHTML = "Stickers & Signage";
}
$(stickersItem).append(stickersAnchor);


var giftItem = document.createElement('li');
giftItem.setAttribute('class', 'drop-down-children');
var giftAnchor = document.createElement('a');
if($('body').hasClass('lang-FR')) {
    giftAnchor.setAttribute('href', '/catalog/3726C/cartes-cadeaux-et-cartes-de-fidlit/');
    giftAnchor.innerHTML = "Cartes-cadeaux et cartes de fidélité";
} else {
    giftAnchor.setAttribute('href', '/catalog/3726C/gift-loyalty/');
    giftAnchor.innerHTML = 'Gift & Loyalty';
}

$(giftItem).append(giftAnchor);


$(productsParentWrapper).append(posParent);
$(productsParentWrapper).append(paperItem);
$(productsParentWrapper).append(stickersItem);
$(productsParentWrapper).append(giftItem);

$(productsParent).append(productsParentWrapper);



var businessParent = document.createElement('li');
businessParent.setAttribute('class', 'drop-down-parent');
if($('body').hasClass('lang-FR')) {
    businessParent.innerHTML = 'Types de commerces';
} else {
    businessParent.innerHTML = 'Business Types';
}

var businessParentWrapper = document.createElement('ul');


var retailItem = document.createElement('li');
retailItem.setAttribute('class', 'drop-down-children');
var retailAnchor = document.createElement('a');
if($('body').hasClass('lang-FR')) {
    retailAnchor.setAttribute('href', '/catalog/3729C/dtail/');
    retailAnchor.innerHTML = "Détail";
} else {
    retailAnchor.setAttribute('href', '/catalog/3729C/retail/');
    retailAnchor.innerHTML = 'Retail';
}
$(retailItem).append(retailAnchor);

var restaurantItem = document.createElement('li');
restaurantItem.setAttribute('class', 'drop-down-children');
var restaurantAnchor = document.createElement('a');
if($('body').hasClass('lang-FR')) {
    restaurantAnchor.setAttribute('href', '/catalog/3730C/restaurants-et-bars/');
    restaurantAnchor.innerHTML = "Restaurants et bars";
} else {
    restaurantAnchor.setAttribute('href', '/catalog/3730C/restaurant-bar/');
    restaurantAnchor.innerHTML = 'Restaurant & Bar';
}
$(restaurantItem).append(restaurantAnchor);

var quickServiceItem = document.createElement('li');
quickServiceItem.setAttribute('class', 'drop-down-children');
var quickServiceAnchor = document.createElement('a');
if($('body').hasClass('lang-FR')) {
    quickServiceAnchor.setAttribute('href', '/catalog/3731C/service-rapide/');
    quickServiceAnchor.innerHTML = "Service rapide";
} else {
    quickServiceAnchor.setAttribute('href', '/catalog/3731C/quick-service/');
    quickServiceAnchor.innerHTML = 'Quick Service';
}
$(quickServiceItem).append(quickServiceAnchor);

var eventItem = document.createElement('li');
eventItem.setAttribute('class', 'drop-down-children');
var eventAnchor = document.createElement('a');
if($('body').hasClass('lang-FR')) {
    eventAnchor.setAttribute('href', '/catalog/3732C/vnements-et-salons-professionnels/');
    eventAnchor.innerHTML = "Événements et salons professionnels";
} else {
    eventAnchor.setAttribute('href', '/catalog/3732C/event-trade-show/');
    eventAnchor.innerHTML = 'Event & Trade Show';
}
$(eventItem).append(eventAnchor);

$(businessParentWrapper).append(retailItem);
$(businessParentWrapper).append(restaurantItem);
$(businessParentWrapper).append(quickServiceItem);
$(businessParentWrapper).append(eventItem);

$(businessParent).append(businessParentWrapper);



$(dropDown).append(productsParent);
$(dropDown).append(businessParent);


$('body').prepend(dropDown);
$('#drop-down').css('display', 'none');

$('div.wrapper.header > div.container').addClass('nav-container');

$('#drop-down').slicknav({
    label: '',
    duration: 300,
    easingOpen: "swing", //available with jQuery UI
    appendTo: '.nav-container'
});










// ****************************Color Box********************************

$(document).bind('cbox_complete', function() {
    $('iframe').css('margin-top','-30%').css('height', '159%');
    $('#lightboxOverlay').css('width','100%').css('height','100%').css('display','block');
});

$(document).bind('cbox_closed', function() {
    $('#lightboxOverlay').css('display','none');
});









// ****************************JCarousel********************************

(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 1000) {
                    width = width / 4;
                } else if (width >= 804) {
                    width = width / 3;
                } else if (width >= 468) {
                    width = width / 2;
                } else if (width >= 10) {
                    width = width / 1;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });
            
            var jcarouselThumb = $('.jcarousel.thumbnails');

        jcarouselThumb
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 8;
                } else if (width >= 500) {
                    width = width / 7;
                } else if (width >= 400) {
                    width = width / 5;
                } else {
                    width = width / 4;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'last'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '' + page + '';
                }
            });
    });
})(jQuery);



