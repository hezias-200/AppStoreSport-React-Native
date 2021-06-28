
import Category from "../models/Category";


export const CATEGORY = [
    new Category('a1', "T-Shirts", 'https://www.80scasualclassics.co.uk/images/fila-vintage-eagle-t-shirt-white-p13503-76323_medium.jpg'),
    new Category('a2', "Pants", 'https://www.hautelookcdn.com/products/BV4087/large/10945889.jpg'),
    new Category('a3', "Shoes", 'https://n1.sdlcdn.com/imgs/g/0/i/Nike-Multi-Color-Casual-Shoes-SDL051199315-1-a2a35.JPG'),
    new Category('a4', "Shorts", 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.static-nike.com%2Fa%2Fimages%2Ft_PDP_1280_v1%2Ff_auto%2Fo0xdpohxbxtnu6zwy4um%2Fflex-stride-running-shorts-3HnwZb.jpg&f=1&nofb=1'),
    new Category('a5', "Accessories", 'https://s7d2.scene7.com/is/image/academy/10610151?$pdp-gallery-ng$'),
    new Category('a6', "Equipment", 'https://s7d2.scene7.com/is/image/academy/20409682?$pdp-gallery-ng$'),
]

import Product from '../models/Product';

export const PRODUCT = [
    new Product(
        '1',
        ['a1'],
        "Adidas Man T-SHIRT",
        "Raglan sleeves printed trefoil logo on left chest 3 stripe taped branding along both sleeves slim fit crewneck Fashionable athletic typically adidas look. Lightweight and breathable cotton material. Suitable for different sports activities and for leisure",
        "https://images-na.ssl-images-amazon.com/images/I/51wMvTriJoL.jpg",
        ['S', 'M', 'L', 'XL'],
        25.00,
        ['Nice relaxed fit and quality for the price, great color.', 'Bought this item a month ago, and Im glad i did']
    ),
    new Product(
        '2',
        ['a1'],
        "Nike mini swoosh oversized boyfriend t-shirt in white",
        "Soft, breathable jersey Made from organic cotton Grown with less water and no pesticides It's a win-win, improving the environment for both wildlife and cotton farmers Main: 100% Cotton.",
        "https://images.asos-media.com/products/nike-mini-swoosh-oversized-boyfriend-t-shirt-in-white/23859301-1-whiteblack?$n_320w$&wid=317&fit=constrain",
        ['S', 'M', 'L', 'XL'],
        29.00,
        ['A GOOD BASIC TO HAVE Love the oversized fit. Will go perfectly with cycle shorts for the summer.']
    ),
    new Product(
        '3',
        ['a1'],
        "adidas Originals 'Tennis Luxe' logo t-shirt co ord in off white",
        "Breathable, stretchy jersey T-shirt fabric Body: 100% Cotton.",
        "https://images.asos-media.com/products/adidas-originals-tennis-luxe-logo-t-shirt-in-off-white/23222161-1-white?$n_320w$&wid=317&fit=constrain",
        ['S', 'M', 'L', 'XL'],
        33.00,
        ['GREAT -Very small, I size 34/32 and ordered 38 and sits well. I really liked']
    ),
    new Product(
        '4',
        ['a1'],
        "Nike Running Plus Icon Clash t-shirt in purple",
        "Lightweight, breathable mesh Uses Nike Dri-FIT technology Wicks sweat away from the skin, drawing it out of the fabric to help speed up evaporation ",
        "https://images.asos-media.com/products/nike-running-plus-icon-clash-t-shirt-in-purple/21248661-1-purple?$n_320w$&wid=317&fit=constrain",
        ['XL', 'XXL', '3XL'],
        42.00,
        ["NICE TOP Really great quality. It just didn't fit me how I'd like. I wanted it to be a bit longer/loose"]
    ),
    new Product(
        '5',
        ['a2'],
        "adidas Running 3in booty shorts in black",
        "Smooth, stretchy fabric Uses adidas AEROREADY technology Moisture-absorbing and quick-drying Main: 83% Polyester, 17% Elastane.",
        "https://images.asos-media.com/products/adidas-running-3in-booty-shorts-in-black/21918175-1-black?$n_320w$&wid=317&fit=constrain",
        ['S', 'M', 'L', 'XL'],
        45.00,
        ['BOOTY SHORTS In love with these. I’m a size 6-8 and bought a small. Fit perfectly with enough room. Perfect for lockdown workouts but they are very short so be warned.']
    ),
    new Product(
        '6',
        ['a2'],
        "Under Armour Training Heat Gear base layer booty shorts in grey",
        "Smooth lightweight fabric Uses Under Armour HeatGear technology Built-in Moisture Transport System helps keep you dry by moving sweat away from your skin Helps keep you cool in extremely warm weather Main: 100% Polyester.",
        "https://images.asos-media.com/products/under-armour-training-heat-gear-base-layer-booty-shorts-in-grey/21887549-4?$n_240w$&wid=40&fit=constrain",
        ['S', 'M', 'L', 'XL'],
        33.00,
        ['BOOTY SHORTS In love with these..']
    ),
    new Product(
        '7',
        ['a2'],
        "Under Armour Play Up Shorts 3.0 in blue and white",
        "Poly-tricot fabric Uses sweat - wicking technology to help keep you cool and dry Main: 100 % Polyester.",
        "https://images.asos-media.com/products/under-armour-play-up-shorts-30-in-blue-and-white/23062003-1-blueandwhite?$n_240w$&wid=168&fit=constrain",
        ['S', 'M', 'L', 'XL'],
        30.00,
        ['BOOTY SHORTS In love with these..']
    ),
    new Product(
        '8',
        ['a2'],
        "Puma Training Fav Blaster track pant in black",
        "Poly-tricot fabric Smooth and stretchy with a slight surface sheen Main: 100% Polyester.",
        "https://images.asos-media.com/products/puma-training-fav-blaster-track-pant-in-black/23236001-1-black?$n_320w$&wid=317&fit=constrain",
        ['S', 'M', 'L', 'XL'],
        56.00,
        ['']
    ),
    new Product(
        '9',
        ['a3'],
        "Nike Training Free Metcon 4 trainers in grey",
        "Breathable mesh upper Main: 100% Polyester.",
        "https://images.asos-media.com/products/nike-training-free-metcon-4-trainers-in-grey/22475670-1-grey?$n_320w$&wid=317&fit=constrain",
        ['39', '40', '41', '42', '43', '44', '45', '46'],
        128.00,
        ['A GOOD BASIC TO HAVE Love the oversized fit. Will go perfectly with cycle shorts for the summer.']
    ),
    new Product(
        '10',
        ['a3'],
        "Under Armour Training Charged Engage trainers in white",
        "Breathable mesh upper Keeps them fresher for longer Lining: 100% Textile, Sole: 100% Rubber, Upper: 100% Textile.",
        "https://images.asos-media.com/products/under-armour-training-charged-engage-trainers-in-white/21925295-1-white?$n_320w$&wid=317&fit=constrain",
        ['39', '40', '41', '42', '43', '44', '45', '46'],
        150.00,
        ['A GOOD BASIC TO HAVE Love the oversized fit. Will go perfectly with cycle shorts for the summer.']
    ),
    new Product(
        '11',
        ['a3'],
        "Nike Training SuperRep Go trainers in black",
        "Breathable mesh upper Keeps them fresher for longer Lining: 100% Textile, Sole: 100% Rubber, Upper: 100% Textile.",
        "https://images.asos-media.com/products/nike-training-superrep-go-trainers-in-black/20014196-1-black?$n_320w$&wid=317&fit=constrain",
        ['39', '40', '41', '42', '43', '44', '45', '46'],
        98.00,
        ['A GOOD BASIC TO HAVE Love the oversized fit. Will go perfectly with cycle shorts for the summer.']
    ),
    new Product(
        '12',
        ['a3'],
        "Nike Training Air Zoom SuperRep 2 trainers in off white",
        "Breathable mesh upper Keeps them fresher for longer Lining: 100% Textile, Sole: 100% Rubber, Upper: 100% Textile.",
        "https://images.asos-media.com/products/nike-training-air-zoom-superrep-2-trainers-in-off-white/22476740-1-offwhite?$n_320w$&wid=317&fit=constrain",
        ['39', '40', '41', '42', '43', '44', '45', '46'],
        172.00,
        ['A GOOD BASIC TO HAVE Love the oversized fit. Will go perfectly with cycle shorts for the summer.']
    ),
    new Product(
        '13',
        ['a4'],
        "adidas Originals logo shorts in black",
        "Lightweight woven fabric Made with recycled polyester Plastic bottles and textile waste are processed into plastic chips and melted into new fibres Saves water and energy and reduces greenhouse-gas emissions Body: 100% Polyamide, Lining: 100% Polyester.",
        "https://images.asos-media.com/products/adidas-originals-logo-shorts-in-black/21264854-1-blackwhite?$n_320w$&wid=317&fit=constrain",
        ['32', '34', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
        29.00,
        ['A GOOD BASIC TO HAVE Love the oversized fit. Will go perfectly with cycle shorts for the summer.']
    ),
    new Product(
        '14',
        ['a4'],
        "Nike Club cargo shorts in black",
        "Soft sweatshirt fabric Style and comfort – it's a lifestyle Main: 80% Cotton, 20% Polyester, Pocket: 100% Cotton.",
        "https://images.asos-media.com/products/nike-club-cargo-shorts-in-black/21380150-1-black?$n_320w$&wid=317&fit=constrain",
        ['XS', 'S', 'M', 'L', 'XL'],
        49.00,
        ['NICE FIT BUT BAD FABRIC Very nice but i dont like the fabric the fit is very nice']
    ),
    new Product(
        '15',
        ['a4'],
        "adidas Training Heatready shorts in black",
        "Sweatshirt fabric Soft hand feel",
        "https://images.asos-media.com/products/adidas-training-heatready-shorts-in-black/22847589-1-black?$n_320w$&wid=317&fit=constrain",
        ['XS', 'S', 'M', 'L', 'XL'],
        58.00,
        ['NICE FIT ']
    ),
    new Product(
        '16',
        ['a4'],
        "Mennace jersey shorts in black with placement print",
        "Soft, stretchy fabric Made with recycled polyester Uses adidas HEAT.RDY technologyNatural-fitting, sweat-wicking material encourages air flow to help keep you cool",
        "https://images.asos-media.com/products/mennace-jersey-shorts-in-black-with-placement-print/200350501-1-black?$n_320w$&wid=317&fit=constrain",
        ['XS', 'S', 'M', 'L', 'XL'],
        47.00,
        ['NICE FIT ']
    ),
    new Product(
        '17',
        ['a5'],
        "Nike Training sports bag in black",
        "Durable woven fabric The kind that doesn't stretch Main: 100% Polyester.",
        "https://images.asos-media.com/products/nike-training-sports-bag-in-black/14742336-1-black?$n_320w$&wid=317&fit=constrain",
        ["One Size"],
        44.00,
        ['EXCELLENT FEATURES & SIZE I bought over a week ago and I absolutely love it. So practical to carry. I take it to work and gym afterwards. Really comfortable on shoulders']
    ),
    new Product(
        '18',
        ['a5'],
        "FitHut gym ball and hand pump in pink",
        "Main: 100% Polyvinylchloride.",
        "https://images.asos-media.com/products/fithut-gym-ball-and-hand-pump-in-pink/23080147-1-pink?$n_320w$&wid=317&fit=constrain",
        ["One Size"],
        44.00,
        ['GOOD Not much you can say about a ball haha but seems like good quality!!']
    ),
    new Product(
        '19',
        ['a5'],
        "Nike lanyard in black",
        "Main: 100% Polyester.",
        "https://images.asos-media.com/products/nike-lanyard-in-black/23327298-1-black?$n_320w$&wid=317&fit=constrain",
        ["One Size"],
        10.00,
        ['ABSOLUTELY GREAT I am happy and it came the way I was expecting it to']
    ),
    new Product(
        '20',
        ['a5'],
        "Nike Training 625ml water bottle in black",
        "Main: 73% Polyethylene, 23% Polypropylene, 4% Silicone.",
        "https://images.asos-media.com/products/nike-training-625ml-water-bottle-in-black/12859643-1-black?$n_320w$&wid=317&fit=constrain",
        ["One Size"],
        13.00,
        ["GYM BOTTLE Good and practical, and more environmentally friendly. Fingers crossed it doesn't leak !'"]
    ),
    new Product(
        '21',
        ['a6'],
        "Suspension trainer dst 100 - blue/red",
        "Our team designed this suspension trainer for strength training anywhere, and working all the muscles in your body, no matter your fitness level.",
        "https://contents.mediadecathlon.com/p1752752/k$c46a1651c7f14eec74d2dfbe9ccd7816/suspension-trainer-dst-100-blueslashred.jpg?&f=800x800",
        ["No Size"],
        33.00,
        ["Perfect!!"]
    ),
    new Product(
        '22',
        ['a6'],
        "Dumbbells and bars weight training kit 93 kg",
        "This kit was developed by our weight training coaches and design team for dumbbell and bar weight training at home.",
        "https://contents.mediadecathlon.com/p101106/k$20bcb5f199bd7d65bb57782502244664/dumbbells-and-bars-weight-training-kit-93-kg.jpg?&f=800x800",
        ["No Size"],
        200.00,
        ["A++"]
    ),
    new Product(
        '23',
        ['a6'],
        "Fitness 190 x 70 x 20mm comfort mat - black",
        "We wanted this 20 mm thick mat to offer a maximum level of comfort for all your workouts done without shoes. Work out in the right conditions!",
        "https://contents.mediadecathlon.com/p1605022/k$a2e284b855f1fce49852bd39d2015a5d/fitness-190-x-70-x-02-cm-comfort-mat-black.jpg?&f=800x800",
        ["No Size"],
        78.00,
        ["Fun to practice on it"]
    ),
    new Product(
        '24',
        ['a6'],
        "Fitness 5-6-7 kg short elastic rubber bands tri-pack - turquoise/burgundy/black",
        "We created these resistance bands for all-over strength training with equipment that won't take over your home.",
        "https://contents.mediadecathlon.com/p1788545/k$a5528cda21757a089a766115ea9f3184/fitness-5-6-7-kg-short-elastic-rubber-bands-tri-pack-turquoiseslashburgundyslashblack.jpg?&f=800x800",
        ["No Size"],
        8.00,
        ["Cool Item!!!"]
    ),
]
/*id,
        categoryId,
        productName,
        description,
        imageUrl,
        size,
        price,
        review */