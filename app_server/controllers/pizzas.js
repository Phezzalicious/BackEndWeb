const homeList = (req, res) => {
    res.render ('pizzas-list',
            {
                title: 'Loc8r - find a place to Eat some Pizza',
            pageHeader: {
                title: 'Loc8r',
                strapLine:'Pizza is the best food for you!'
            },
            sidebar: "Pizza is nutritious, the very best. Pizza is delicious, the treasure for your quest",
            pizzaPlaces: [
                {
                    name: 'Pizza Hut',
                    address: '125 High Street, Reading, RG6 1PS',
                    rating: 3,
                    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                    distance: '100m'
                },
                {
                    name: 'Dominoes',
                    address: '125 High Street, Reading, RG6 1PS',
                    rating: 3,
                    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                    distance: '100m'
                },
                {
                    name: 'Labellas',
                    address: '125 High Street, Reading, RG6 1PS',
                    rating: 3,
                    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                    distance: '100m'
                }

            ]
        }
    );
};
const locationInfo = (req, res) => {
    res.render('pizzas-info',
    {
        title: 'Labellas',
         pageHeader: {
          title: 'Loc8r',
        },
        sidebar: {
          context: 'is on Loc8r because it has ginormous pizzas and burgers and other fried foods.',
          callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        pizza: {
          name: 'Labellas',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 3,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          coords: {lat: 51.455041, lng: -0.9690884},
          openingTimes: [
            {
              days: 'Monday - Friday',
              opening: '7:00am',
              closing: '7:00pm',
              closed: false
            },
            {
              days: 'Saturday',
              opening: '8:00am',
              closing: '5:00pm',
              closed: false
            },
            {
              days: 'Sunday',
              closed: true
            }
          ],
          reviews: [
            {
              author: 'Simon Holmes',
              rating: 5,
              timestamp: '16 July 2013',
              reviewText: 'What a great place. I can\'t say enough good things about it.'
            },
            {
              author: 'Charlie Chaplin',
              rating: 3,
              timestamp: '16 June 2013',
              reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }
          ]
        }
      }
    );
  };
  const addReview = (req, res) => {
    res.render('location-pizza-review-form',
      {
        title: 'Review Labellas on Loc8r' ,
        pageHeader: { title: 'Review Labellas' }
      }
    );
  };

  module.exports = {
    homeList,
    locationInfo,
    addReview
  };
  