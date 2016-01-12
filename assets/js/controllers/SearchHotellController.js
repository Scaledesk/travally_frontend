angular.module('Travally')
// inject the Activation service into our controller
    .controller('SearchHotelController', function($http, $scope, Hotel,$routeParams,$filter, $location) {
        var city_id = $routeParams.city_id;
        var city_name = $routeParams.city_name;
        var country_code = $routeParams.country_id;
        $scope.check_in = $routeParams.check_in;
        $scope.check_out = $routeParams.check_out;



        $scope.hotelCityData = Hotel.getHotelCity();
        $scope.hotelCity = {};
        $scope.refreshHotelCity = function(query){
            if(query == null) return [];
            if(query.length < 3) return [];
            $scope.hotelCity = $filter('filter')($scope.hotelCityData,{city_name:query})
        };
        angular.forEach($scope.hotelCityData, function(c, key) {
            if(c.city_id == city_id){
                $scope.hotelCity.selected = c;
            }
        });




        console.log(city_id);
        console.log(city_name);
        console.log(country_code);
        console.log($scope.check_in);
        console.log($scope.check_out);

        var hotelRequest = {
            "CheckInDate":$scope.check_in,
            "CheckOutDate":$scope.check_out,
            "CountryName":country_code,
            "IsDomestic":true,
            "CityReference":city_name,
            "CityId":city_id,
            "NoOfRooms":1,
            "RoomGuest":[
                {
                    "NoOfAdults":1,
                    "NoOfChild":0,
                    "ChildAge":[]

                }
            ],
            "HotelName":"",
            "Rating":"",
            "MemberMobileNo":"9983772777",
            "MemberMobilePin":"6366"
        };

        $scope.hotelResult = [];

            $scope.$emit('LOAD')
            Hotel.search(hotelRequest).then(function (data) {
                    console.log(data);
                    $scope.hotels = data;
                    /*angular.forEach($scope.hotels.data.HotelSearchResults.Hotels, function (hotel, key) {
                        var mVal = '';
                        var room_service = 'No';
                        var travel = 'No';
                        var restaurant = 'No';
                        var parking = 'No';
                        var laundry = 'No';
                        var internet_wifi ='No';
                        var business_facilities = 'No';
                        var spa_massage = 'No';
                        var family = 'No';
                        var sport = 'No';
                        var gym = 'No';
                        var swimming_pool = 'No';
                            angular.forEach(hotel.PropertyInfo.Facets, function (star, key) {
                                if(star.group =='STAR_RATING'){
                                        s = star.FacetValue.value;
                                }
                                if(star.group == 'AMENITIES'){
                                    angular.forEach(star.FacetValues, function (a, key) {
                                            if(a.value == 'Room Service'){
                                                room_service = "Yes";
                                            }
                                        if(a.value == 'Travel & Transfers'){
                                                    travel = 'Yes';
                                        }
                                        if(a.value == 'Restaurant/Bar'){
                                                    restaurant = 'Yes';
                                        }
                                        if(a.value == 'Parking'){
                                                parking = 'Yes';
                                        }
                                        if(a.value == 'Laundry Services'){
                                                       laundry = 'Yes';
                                        }
                                        if(a.value == 'Internet/Wi-Fi'){
                                                internet_wifi = 'Yes';
                                        }
                                        if(a.value == 'Business Facilities'){
                                                    business_facilities = 'Yes';
                                        }
                                        if(a.value == 'Spa/Massage/Wellness'){
                                            spa_massage = 'Yes';
                                        }
                                        if(a.value == 'Family/Child Friendly'){
                                            family = 'Yes';
                                        }
                                        if(a.value == 'Sport'){
                                            sport = 'Yes';
                                        }
                                        if(a.value == 'Gym'){
                                            gym = 'Yes';
                                        }
                                        if(a.value == 'Swimming Pool'){
                                            swimming_pool = 'Yes';
                                        }

                                    });
                                }
                            });
                            angular.forEach(hotel.PropertyInfo.RoomStays, function (rates, key) {

                            var start_date = rates.startDate;
                            var end_date = rates.endDate;
                            angular.forEach(rates.RoomRates, function (rate, key) {
                                angular.forEach(rate.Rate.RoomTariffs, function (r, key) {
                                    t = {
                                        "room_number" : r.roomNumber,
                                        "amount" : r.Tariffs[0].amount,
                                        "group" : r.Tariffs[0].group,
                                        "startDate" : start_date,
                                        "endDate" : end_date
                                    };
                                });
                            });
                        });
                        angular.forEach(hotel.PropertyInfo.MediaList, function (m, key) {
                            mVal = {
                                "type": m.type,
                                "src": m.src
                            };
                        });
                        var temp = {
                            "hotel_name": hotel.Name,
                            "hotel_id" : hotel.id,
                            "star_rating" : s,
                            "media": mVal,
                            "lowest_rate": hotel.LowestRate.LowestRate.value,
                            "total_recommendation": hotel.PropertyInfo.GuestRecommendations.totalRecommendations,
                            "total_rating_value": hotel.PropertyInfo.GuestRecommendations.OverallRecommendation.Rating.value,
                            "rate" : t,
                            "room_service" : room_service,
                            "travel": travel,
                            "restaurant" : restaurant,
                            "parking" : parking,
                            "laundry": laundry,
                            "wi_fi" : internet_wifi,
                            "business_facilities" : business_facilities,
                            "family" : family,
                            "spa_massage": spa_massage,
                            "sport": sport,
                            "gym" : gym,
                            "swimming_pool": swimming_pool
                        };
                        $scope.hotelResult.push(temp);
                        $scope.$emit('UNLOAD')
                    });*/

                    $scope.$emit('UNLOAD')
                }).catch(function (data) {
                    console.log(data);
                    $scope.$emit('UNLOAD')
                });
    });