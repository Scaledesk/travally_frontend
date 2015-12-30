angular.module('Travally')
// inject the Activation service into our controller
    .controller('SearchHotelController', function($http, $scope, Hotel,$routeParams,$filter, $location) {
        var city = $routeParams.city;
        $scope.check_in = $routeParams.check_in;
        $scope.check_out = $routeParams.check_out;
        $scope.cityData = Hotel.getCity();
        $scope.city = {};
        $scope.refreshCity = function(query){
            if(query == null) return [];
            if(query.length < 3) return [];
            $scope.city = $filter('filter')($scope.cityData,{name:query})
        };
        angular.forEach($scope.cityData, function(c, key) {
            if(c.code == city){
                $scope.city.selected = c;
            }
        });
        console.log(city);
        console.log($scope.check_in);
        console.log($scope.check_out);
        $scope.starRating = {
        };

        var hotelRequest = '<MMTHotelSearchRequest><POS><Requestor type="B2C" idContext="AFF" id="AFF322603" channel="B2Cweb"/> <Source iSOCurrency="INR"/> </POS> <ResultTransformer> ' +
            '<GuestRecommendationEnabled maxRecommendations="1">true</GuestRecommendationEnabled> ' +
            '<PriceBreakupEnabled>true</PriceBreakupEnabled> <CancellationPolicyRulesReq text="yes"/> ' +
            '</ResultTransformer> <ResultPreferences> <ResultPreference> <Pagination paginate="false" page="1" limit="10"/> </ResultPreference> </ResultPreferences> ' +
            '<SearchCriteria> <Criterion> ' +
            '<Area> <CityCode>' + city + '</CityCode> <CountryCode>IN</CountryCode> </Area> ' +
            '<RoomStayCandidates> <RoomStayCandidate> <GuestCounts> <GuestCount count="1" ageQualifyingCode="10"/> </GuestCounts> </RoomStayCandidate> ' +
            '<RoomStayCandidate> <GuestCounts> <GuestCount count="1" ageQualifyingCode="10"/>' +
            ' <GuestCount count="1" ageQualifyingCode="8"> <Ages> <Age>4</Age> </Ages> </GuestCount> </GuestCounts> ' +
            '</RoomStayCandidate> </RoomStayCandidates> ' +
            '<StayDateRanges> <StayDateRange start="' + $scope.check_in + '" end="' + $scope.check_out + '"/> </StayDateRanges>' +
            ' <SupplierCodes> <SupplierCode>EPXX0001</SupplierCode> </SupplierCodes> </Criterion> </SearchCriteria>' +
            ' </MMTHotelSearchRequest>';

        $scope.hotelResult = [];
        // function for search hotels
            $scope.$emit('LOAD')
            Hotel.search(hotelRequest).then(
                function (data) {
                    //console.log(data);
                    $scope.hotels = data;
                    angular.forEach($scope.hotels.data.HotelSearchResults.Hotels, function (hotel, key) {
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
                    });
                    $scope.$emit('UNLOAD')
                },
                function (data) {
                    // $scope.hotels = data;
                    $scope.$emit('UNLOAD')
                });
            //$scope.$emit('UNLOAD')
            //$scope.loading = fals

        var getCountryRequest = '<MMTStaticCountrySearchRequest Offset="0" Rows="100">' +
            '<POS>' +
            '<Requestor type="AFF" idContext="AFF" id="AFF322603" channel="AFF"/>' +
            '<Source iSOCurrency="INR"/>' +
            '<Token>AFF322603</Token>' +
            '</POS>' +
            '<RequestCountryParams>' +
            '</RequestCountryParams>' +
            '</MMTStaticCountrySearchRequest>';

        var getCityRequest = '<MMTStaticCitySearchRequest Offset="0" Rows="100">' +
            '<POS>' +
            '<Requestor type="AFF" idContext="AFF" id="AFF322603" channel="AFF"/>' +
            '<Source iSOCurrency="INR"/>' +
            '<Token>AFF322603</Token>' +
            '</POS>' +
            '<RequestCityParams>' +
            '<Country>India</Country>' +
            '<CountryCode>IN</CountryCode>' +
            '<Name/>' +
            '</RequestCityParams>' +
            '<RequiredFields>' +
            'country, countryCode' +
            '</RequiredFields>' +
            '</MMTStaticCitySearchRequest>';



        // function for getting all countries
        $scope.getCountry = function () {
            Hotel.getCountry(getCountryRequest).then(
                function (data) {
                    $scope.countries = data;
                },
                function (data) {
                    // $scope.countries = data;
                });
        };

        // function for getting city
        $scope.getCity = function () {
            Hotel.getCity(getCityRequest).then(
                function (data) {
                    $scope.cities = data;
                },
                function (data) {
                    // $scope.cities = data;
                });
        };
    });