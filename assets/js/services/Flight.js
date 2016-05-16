angular.module('Travally').factory('Flight', function($http, serverConfig) {
    var flightBookData = {};
    var flightData = {};
    return {
        /*searchFlight: function (dt) {
            return $http({
                method: 'POST',
                url: 'http://api.jbspl.com/Staging/api/AirlineBooking/Search',
                headers: {
                    'x-UserName':serverConfig.user_name,
                    'x-Password':serverConfig.password,
                    'Content-Type': 'application/json'
                },s
                data: dt
            });
        },*/

        authentication: function (dt) {
            return $http({
                method: 'POST',
                url: 'http://52.77.238.174/redirect_request',
                headers: {
                    'Content-Type': 'application/json'
                },
                data:{
                    method: 'POST',
                    url: 'UpdatedHotel/Authenticate',
                    payload:dt
                }
            });
        },




        searchFlight: function (dt) {
            return $http({
                method: 'POST',
                url: 'http://52.77.238.174/redirect_request',
                headers: {
                    'Content-Type': 'application/json'
                },
                data:{
                    method: 'POST',
                    url: 'AirlineBooking/Search',
                    payload:dt
                }
            });
        },
        getAirportDetails: function(){
            return [
                {
                    "AirportCode": "AAA",
                    "AirportName": "Anaa",
                    "CityCode": "AAA"
                },
                {
                    "AirportCode": "AAE",
                    "AirportName": "Les Salines",
                    "CityCode": "AAE"
                },
                {
                    "AirportCode": "AAL",
                    "AirportName": "Aalborg",
                    "CityCode": "AAL"
                },
                {
                    "AirportCode": "AAN",
                    "AirportName": "Al Ain",
                    "CityCode": "AAN"
                },
                {
                    "AirportCode": "AAO",
                    "AirportName": "Anaco",
                    "CityCode": "AAO"
                },
                {
                    "AirportCode": "AAP",
                    "AirportName": "ANDRAU AIRPARK",
                    "CityCode": "AAP"
                },
                {
                    "AirportCode": "AAQ",
                    "AirportName": "Anapa",
                    "CityCode": "AAQ"
                },
                {
                    "AirportCode": "AAR",
                    "AirportName": "Tirstrup",
                    "CityCode": "AAR"
                },
                {
                    "AirportCode": "AAY",
                    "AirportName": "Al Ghaydah",
                    "CityCode": "AAY"
                },
                {
                    "AirportCode": "ABA",
                    "AirportName": "Abakan",
                    "CityCode": "ABA"
                },
                {
                    "AirportCode": "ABE",
                    "AirportName": "Allentown",
                    "CityCode": "ABE"
                },
                {
                    "AirportCode": "ABF",
                    "AirportName": "Abaiang",
                    "CityCode": "ABF"
                },
                {
                    "AirportCode": "ABI",
                    "AirportName": "Abilene Municipal",
                    "CityCode": "ABI"
                },
                {
                    "AirportCode": "ABJ",
                    "AirportName": "F Houphouet Boig",
                    "CityCode": "ABJ"
                },
                {
                    "AirportCode": "ABK",
                    "AirportName": "Kabri Dar",
                    "CityCode": "ABK"
                },
                {
                    "AirportCode": "ABL",
                    "AirportName": "Ambler",
                    "CityCode": "ABL"
                },
                {
                    "AirportCode": "ABM",
                    "AirportName": "Bamaga",
                    "CityCode": "ABM"
                },
                {
                    "AirportCode": "ABQ",
                    "AirportName": "Albuquerque Int'l",
                    "CityCode": "ABQ"
                },
                {
                    "AirportCode": "ABR",
                    "AirportName": "Aberdeen Municipal",
                    "CityCode": "ABR"
                },
                {
                    "AirportCode": "ABS",
                    "AirportName": "Abu Simbel",
                    "CityCode": "ABS"
                },
                {
                    "AirportCode": "ABU",
                    "AirportName": "Atambua",
                    "CityCode": "ABU"
                },
                {
                    "AirportCode": "ABX",
                    "AirportName": "Albury",
                    "CityCode": "ABX"
                },
                {
                    "AirportCode": "ABY",
                    "AirportName": "Dougherty Coun",
                    "CityCode": "ABY"
                },
                {
                    "AirportCode": "ABZ",
                    "AirportName": "Dyce",
                    "CityCode": "ABZ"
                },
                {
                    "AirportCode": "ACA",
                    "AirportName": "Alvarez Int'l",
                    "CityCode": "ACA"
                },
                {
                    "AirportCode": "ACC",
                    "AirportName": "Kotoka",
                    "CityCode": "ACC"
                },
                {
                    "AirportCode": "ACD",
                    "AirportName": "Acandi",
                    "CityCode": "ACD"
                },
                {
                    "AirportCode": "ACE",
                    "AirportName": "Lanzarote",
                    "CityCode": "ACE"
                },
                {
                    "AirportCode": "ACH",
                    "AirportName": "Altenrhein",
                    "CityCode": "ACH"
                },
                {
                    "AirportCode": "ACI",
                    "AirportName": "The Blaye",
                    "CityCode": "ACI"
                },
                {
                    "AirportCode": "ACK",
                    "AirportName": "Memorial",
                    "CityCode": "ACK"
                },
                {
                    "AirportCode": "ACR",
                    "AirportName": "Araracuara",
                    "CityCode": "ACR"
                },
                {
                    "AirportCode": "ACT",
                    "AirportName": "Waco Municipal",
                    "CityCode": "ACT"
                },
                {
                    "AirportCode": "ACV",
                    "AirportName": "Arcata Eureka",
                    "CityCode": "ACV"
                },
                {
                    "AirportCode": "ACY",
                    "AirportName": "Atlantic city International",
                    "CityCode": "AIY"
                },
                {
                    "AirportCode": "ADA",
                    "AirportName": "Adana",
                    "CityCode": "ADA"
                },
                {
                    "AirportCode": "ADB",
                    "AirportName": "Iadnan Menderes",
                    "CityCode": "IZM"
                },
                {
                    "AirportCode": "ADD",
                    "AirportName": "Bole",
                    "CityCode": "ADD"
                },
                {
                    "AirportCode": "ADE",
                    "AirportName": "Aden Int'l",
                    "CityCode": "ADE"
                },
                {
                    "AirportCode": "ADI",
                    "AirportName": "Arandis",
                    "CityCode": "ADI"
                },
                {
                    "AirportCode": "ADJ",
                    "AirportName": "Marka",
                    "CityCode": "AMM"
                },
                {
                    "AirportCode": "ADK",
                    "AirportName": "Adak Island",
                    "CityCode": "ADK"
                },
                {
                    "AirportCode": "ADL",
                    "AirportName": "Adelaide",
                    "CityCode": "ADL"
                },
                {
                    "AirportCode": "ADQ",
                    "AirportName": "Kodiak",
                    "CityCode": "ADQ"
                },
                {
                    "AirportCode": "ADZ",
                    "AirportName": "San Andres Island",
                    "CityCode": "ADZ"
                },
                {
                    "AirportCode": "AEA",
                    "AirportName": "Abemama Atoll",
                    "CityCode": "AEA"
                },
                {
                    "AirportCode": "AEG",
                    "AirportName": "Aek Godang",
                    "CityCode": "AEG"
                },
                {
                    "AirportCode": "AEH",
                    "AirportName": "Abecher",
                    "CityCode": "AEH"
                },
                {
                    "AirportCode": "AEO",
                    "AirportName": "Aioun El Atrouss",
                    "CityCode": "AEO"
                },
                {
                    "AirportCode": "AEP",
                    "AirportName": "Jorge Newbery",
                    "CityCode": "BUE"
                },
                {
                    "AirportCode": "AER",
                    "AirportName": "Adler Sochi",
                    "CityCode": "AER"
                },
                {
                    "AirportCode": "AES",
                    "AirportName": "Vigra",
                    "CityCode": "AES"
                },
                {
                    "AirportCode": "AEY",
                    "AirportName": "Akureyri",
                    "CityCode": "AEY"
                },
                {
                    "AirportCode": "AFA",
                    "AirportName": "San Rafael",
                    "CityCode": "AFA"
                },
                {
                    "AirportCode": "AGA",
                    "AirportName": "Agadir Almassira",
                    "CityCode": "AGA"
                },
                {
                    "AirportCode": "AGB",
                    "AirportName": "Augsburg Muehlhausen",
                    "CityCode": "MUC"
                },
                {
                    "AirportCode": "AGC",
                    "AirportName": "Allegheny",
                    "CityCode": "PIT"
                },
                {
                    "AirportCode": "AGE",
                    "AirportName": "Wangerooge Flugplatz",
                    "CityCode": "AGE"
                },
                {
                    "AirportCode": "AGF",
                    "AirportName": "La Garenne",
                    "CityCode": "AGF"
                },
                {
                    "AirportCode": "AGH",
                    "AirportName": "Angelholm",
                    "CityCode": "AGH"
                },
                {
                    "AirportCode": "AGJ",
                    "AirportName": "Aguni",
                    "CityCode": "AGJ"
                },
                {
                    "AirportCode": "AGP",
                    "AirportName": "Malaga",
                    "CityCode": "AGP"
                },
                {
                    "AirportCode": "AGR",
                    "AirportName": "Kheria",
                    "CityCode": "AGR"
                },
                {
                    "AirportCode": "AGS",
                    "AirportName": "Augusta Bush Field",
                    "CityCode": "AGS"
                },
                {
                    "AirportCode": "AGU",
                    "AirportName": "Aguascalientes",
                    "CityCode": "AGU"
                },
                {
                    "AirportCode": "AGV",
                    "AirportName": "Acarigua",
                    "CityCode": "AGV"
                },
                {
                    "AirportCode": "AGX",
                    "AirportName": "Agatti Island",
                    "CityCode": "AGX"
                },
                {
                    "AirportCode": "AGZ",
                    "AirportName": "Aggeneys",
                    "CityCode": "AGZ"
                },
                {
                    "AirportCode": "AHO",
                    "AirportName": "Fertilia",
                    "CityCode": "AHO"
                },
                {
                    "AirportCode": "AHU",
                    "AirportName": "Charif Al Idrissi",
                    "CityCode": "AHU"
                },
                {
                    "AirportCode": "AIA",
                    "AirportName": "Alliance",
                    "CityCode": "AIA"
                },
                {
                    "AirportCode": "AIC",
                    "AirportName": "Airok",
                    "CityCode": "AIC"
                },
                {
                    "AirportCode": "AIG",
                    "AirportName": "Yalinga",
                    "CityCode": "AIG"
                },
                {
                    "AirportCode": "AIM",
                    "AirportName": "Ailuk Island",
                    "CityCode": "AIM"
                },
                {
                    "AirportCode": "AIN",
                    "AirportName": "Wainwright",
                    "CityCode": "AIN"
                },
                {
                    "AirportCode": "AIS",
                    "AirportName": "Arorae Island",
                    "CityCode": "AIS"
                },
                {
                    "AirportCode": "AIT",
                    "AirportName": "Aitutaki",
                    "CityCode": "AIT"
                },
                {
                    "AirportCode": "AIU",
                    "AirportName": "Atiu Island",
                    "CityCode": "AIU"
                },
                {
                    "AirportCode": "AIY",
                    "AirportName": "Bader Field",
                    "CityCode": "AIY"
                },
                {
                    "AirportCode": "AJA",
                    "AirportName": "Campo Dell Oro",
                    "CityCode": "AJA"
                },
                {
                    "AirportCode": "AJF",
                    "AirportName": "JOUF",
                    "CityCode": "AJF"
                },
                {
                    "AirportCode": "AJJ",
                    "AirportName": "Akjoujt",
                    "CityCode": "AJJ"
                },
                {
                    "AirportCode": "AJL",
                    "AirportName": "Aizawl",
                    "CityCode": "AJL"
                },
                {
                    "AirportCode": "AJN",
                    "AirportName": "Ouani",
                    "CityCode": "AJN"
                },
                {
                    "AirportCode": "AJR",
                    "AirportName": "Arvidsjaur",
                    "CityCode": "AJR"
                },
                {
                    "AirportCode": "AJU",
                    "AirportName": "Aracaju",
                    "CityCode": "AJU"
                },
                {
                    "AirportCode": "AJY",
                    "AirportName": "Agades",
                    "CityCode": "AJY"
                },
                {
                    "AirportCode": "AKD",
                    "AirportName": "Akola",
                    "CityCode": "AKD"
                },
                {
                    "AirportCode": "AKF",
                    "AirportName": "Kufrah",
                    "CityCode": "AKF"
                },
                {
                    "AirportCode": "AKJ",
                    "AirportName": "Asahikawa",
                    "CityCode": "AKJ"
                },
                {
                    "AirportCode": "AKL",
                    "AirportName": "Auckland Int'l",
                    "CityCode": "AKL"
                },
                {
                    "AirportCode": "AKM",
                    "AirportName": "Zakouma",
                    "CityCode": "AKM"
                },
                {
                    "AirportCode": "AKN",
                    "AirportName": "King Salmon",
                    "CityCode": "AKN"
                },
                {
                    "AirportCode": "AKR",
                    "AirportName": "Akure",
                    "CityCode": "AKR"
                },
                {
                    "AirportCode": "AKX",
                    "AirportName": "Aktyubinsk",
                    "CityCode": "AKX"
                },
                {
                    "AirportCode": "AKY",
                    "AirportName": "Sittwe Civil",
                    "CityCode": "AKY"
                },
                {
                    "AirportCode": "ALA",
                    "AirportName": "Almaty",
                    "CityCode": "ALA"
                },
                {
                    "AirportCode": "ALB",
                    "AirportName": "Albany",
                    "CityCode": "ALB"
                },
                {
                    "AirportCode": "ALC",
                    "AirportName": "Alicante",
                    "CityCode": "ALC"
                },
                {
                    "AirportCode": "ALF",
                    "AirportName": "Alta",
                    "CityCode": "ALF"
                },
                {
                    "AirportCode": "ALG",
                    "AirportName": "Houari Boumediene",
                    "CityCode": "ALG"
                },
                {
                    "AirportCode": "ALL",
                    "AirportName": "ALBENGA",
                    "CityCode": "ALL"
                },
                {
                    "AirportCode": "ALM",
                    "AirportName": "Alamogordo Municipal",
                    "CityCode": "ALM"
                },
                {
                    "AirportCode": "ALO",
                    "AirportName": "Waterloo",
                    "CityCode": "ALO"
                },
                {
                    "AirportCode": "ALP",
                    "AirportName": "Nejrab",
                    "CityCode": "ALP"
                },
                {
                    "AirportCode": "ALR",
                    "AirportName": "Alexandra",
                    "CityCode": "ALR"
                },
                {
                    "AirportCode": "ALS",
                    "AirportName": "Alamosa Municipal",
                    "CityCode": "ALS"
                },
                {
                    "AirportCode": "ALU",
                    "AirportName": "Alula",
                    "CityCode": "ALU"
                },
                {
                    "AirportCode": "ALW",
                    "AirportName": "Walla Walla",
                    "CityCode": "ALW"
                },
                {
                    "AirportCode": "ALY",
                    "AirportName": "Alexandria",
                    "CityCode": "ALY"
                },
                {
                    "AirportCode": "AMA",
                    "AirportName": "Amarillo Internationa",
                    "CityCode": "AMA"
                },
                {
                    "AirportCode": "AMB",
                    "AirportName": "Ambilobe",
                    "CityCode": "AMB"
                },
                {
                    "AirportCode": "AMC",
                    "AirportName": "Am Timan",
                    "CityCode": "AMC"
                },
                {
                    "AirportCode": "AMD",
                    "AirportName": "Ahmedabad",
                    "CityCode": "AMD"
                },
                {
                    "AirportCode": "AMH",
                    "AirportName": "Arba Mintch",
                    "CityCode": "AMH"
                },
                {
                    "AirportCode": "AMI",
                    "AirportName": "Selaparang",
                    "CityCode": "AMI"
                },
                {
                    "AirportCode": "AMM",
                    "AirportName": "Queen Alia Int'l",
                    "CityCode": "AMM"
                },
                {
                    "AirportCode": "AMO",
                    "AirportName": "Mao",
                    "CityCode": "AMO"
                },
                {
                    "AirportCode": "AMP",
                    "AirportName": "Ampanihy",
                    "CityCode": "AMP"
                },
                {
                    "AirportCode": "AMQ",
                    "AirportName": "Pattimura",
                    "CityCode": "AMQ"
                },
                {
                    "AirportCode": "AMS",
                    "AirportName": "Schiphol",
                    "CityCode": "AMS"
                },
                {
                    "AirportCode": "AMU",
                    "AirportName": "Amanab",
                    "CityCode": "AMU"
                },
                {
                    "AirportCode": "AMY",
                    "AirportName": "Ambatomainty",
                    "CityCode": "AMY"
                },
                {
                    "AirportCode": "ANB",
                    "AirportName": "Anniston County",
                    "CityCode": "ANB"
                },
                {
                    "AirportCode": "ANC",
                    "AirportName": "Anchorage Int'l",
                    "CityCode": "ANC"
                },
                {
                    "AirportCode": "ANF",
                    "AirportName": "Cerro Moreno",
                    "CityCode": "ANF"
                },
                {
                    "AirportCode": "ANG",
                    "AirportName": "Brie-Champnier",
                    "CityCode": "ANG"
                },
                {
                    "AirportCode": "ANI",
                    "AirportName": "Aniak",
                    "CityCode": "ANI"
                },
                {
                    "AirportCode": "ANM",
                    "AirportName": "Antsirabato",
                    "CityCode": "ANM"
                },
                {
                    "AirportCode": "ANO",
                    "AirportName": "Angoche",
                    "CityCode": "ANO"
                },
                {
                    "AirportCode": "ANR",
                    "AirportName": "Deurne",
                    "CityCode": "ANR"
                },
                {
                    "AirportCode": "ANS",
                    "AirportName": "Andahuaylas",
                    "CityCode": "ANS"
                },
                {
                    "AirportCode": "ANU",
                    "AirportName": "Vc Bird Int'l",
                    "CityCode": "ANU"
                },
                {
                    "AirportCode": "ANV",
                    "AirportName": "Anvik",
                    "CityCode": "ANV"
                },
                {
                    "AirportCode": "ANX",
                    "AirportName": "Andenes",
                    "CityCode": "ANX"
                },
                {
                    "AirportCode": "AOD",
                    "AirportName": "Abou Deia",
                    "CityCode": "AOD"
                },
                {
                    "AirportCode": "AOI",
                    "AirportName": "Falconara",
                    "CityCode": "AOI"
                },
                {
                    "AirportCode": "AOJ",
                    "AirportName": "Aomori",
                    "CityCode": "AOJ"
                },
                {
                    "AirportCode": "AOK",
                    "AirportName": "Karpathos",
                    "CityCode": "AOK"
                },
                {
                    "AirportCode": "AOL",
                    "AirportName": "Paso De Los Libres",
                    "CityCode": "AOL"
                },
                {
                    "AirportCode": "AOO",
                    "AirportName": "Altoona",
                    "CityCode": "AOO"
                },
                {
                    "AirportCode": "AOR",
                    "AirportName": "Alor Setar",
                    "CityCode": "AOR"
                },
                {
                    "AirportCode": "AOS",
                    "AirportName": "Amook",
                    "CityCode": "AOS"
                },
                {
                    "AirportCode": "APC",
                    "AirportName": "Napa County",
                    "CityCode": "APC"
                },
                {
                    "AirportCode": "APF",
                    "AirportName": "Naples",
                    "CityCode": "APF"
                },
                {
                    "AirportCode": "APK",
                    "AirportName": "Apataki",
                    "CityCode": "APK"
                },
                {
                    "AirportCode": "APL",
                    "AirportName": "Nampula",
                    "CityCode": "APL"
                },
                {
                    "AirportCode": "APN",
                    "AirportName": "Alpena County Regional",
                    "CityCode": "APN"
                },
                {
                    "AirportCode": "APO",
                    "AirportName": "Apartado",
                    "CityCode": "APO"
                },
                {
                    "AirportCode": "APP",
                    "AirportName": "Asapa",
                    "CityCode": "APP"
                },
                {
                    "AirportCode": "APQ",
                    "AirportName": "Arapiraca",
                    "CityCode": "APQ"
                },
                {
                    "AirportCode": "APW",
                    "AirportName": "Faleolo",
                    "CityCode": "APW"
                },
                {
                    "AirportCode": "APZ",
                    "AirportName": "Zapala",
                    "CityCode": "APZ"
                },
                {
                    "AirportCode": "AQI",
                    "AirportName": "HAFAR AL BATIN",
                    "CityCode": "AQI"
                },
                {
                    "AirportCode": "AQP",
                    "AirportName": "Rodriguez Ballon",
                    "CityCode": "AQP"
                },
                {
                    "AirportCode": "ARC",
                    "AirportName": "Arctic Village",
                    "CityCode": "ARC"
                },
                {
                    "AirportCode": "ARD",
                    "AirportName": "Alor Island",
                    "CityCode": "ARD"
                },
                {
                    "AirportCode": "ARH",
                    "AirportName": "Arkhangelsk",
                    "CityCode": "ARH"
                },
                {
                    "AirportCode": "ARI",
                    "AirportName": "Chacalluta",
                    "CityCode": "ARI"
                },
                {
                    "AirportCode": "ARM",
                    "AirportName": "Armidale",
                    "CityCode": "ARM"
                },
                {
                    "AirportCode": "ARN",
                    "AirportName": "Arlanda",
                    "CityCode": "STO"
                },
                {
                    "AirportCode": "ARP",
                    "AirportName": "Aragip",
                    "CityCode": "ARP"
                },
                {
                    "AirportCode": "ARR",
                    "AirportName": "Alto Rio Senguerr",
                    "CityCode": "ARR"
                },
                {
                    "AirportCode": "ART",
                    "AirportName": "Watertown",
                    "CityCode": "ART"
                },
                {
                    "AirportCode": "ARU",
                    "AirportName": "Aractuba",
                    "CityCode": "ARU"
                },
                {
                    "AirportCode": "ARV",
                    "AirportName": "Noble F Lee",
                    "CityCode": "ARV"
                },
                {
                    "AirportCode": "ARW",
                    "AirportName": "Arad",
                    "CityCode": "ARW"
                },
                {
                    "AirportCode": "ARZ",
                    "AirportName": "N'Zeto",
                    "CityCode": "ARZ"
                },
                {
                    "AirportCode": "ASA",
                    "AirportName": "Assab",
                    "CityCode": "ASA"
                },
                {
                    "AirportCode": "ASB",
                    "AirportName": "Ashgabad",
                    "CityCode": "ASB"
                },
                {
                    "AirportCode": "ASD",
                    "AirportName": "Andros Town",
                    "CityCode": "ASD"
                },
                {
                    "AirportCode": "ASE",
                    "AirportName": "Aspen",
                    "CityCode": "ASE"
                },
                {
                    "AirportCode": "ASF",
                    "AirportName": "Astrakhan",
                    "CityCode": "ASF"
                },
                {
                    "AirportCode": "ASJ",
                    "AirportName": "Amami O Shima",
                    "CityCode": "ASJ"
                },
                {
                    "AirportCode": "ASK",
                    "AirportName": "Yamoussoukro",
                    "CityCode": "ASK"
                },
                {
                    "AirportCode": "ASM",
                    "AirportName": "Asmara Int'l",
                    "CityCode": "ASM"
                },
                {
                    "AirportCode": "ASO",
                    "AirportName": "Asosa",
                    "CityCode": "ASO"
                },
                {
                    "AirportCode": "ASP",
                    "AirportName": "Alice Springs",
                    "CityCode": "ASP"
                },
                {
                    "AirportCode": "ASR",
                    "AirportName": "Kayseri",
                    "CityCode": "ASR"
                },
                {
                    "AirportCode": "ASU",
                    "AirportName": "Silvio Pettirossi",
                    "CityCode": "ASU"
                },
                {
                    "AirportCode": "ASV",
                    "AirportName": "Amboseli",
                    "CityCode": "ASV"
                },
                {
                    "AirportCode": "ASW",
                    "AirportName": "Aswan",
                    "CityCode": "ASW"
                },
                {
                    "AirportCode": "ATB",
                    "AirportName": "Atbara",
                    "CityCode": "ATB"
                },
                {
                    "AirportCode": "ATC",
                    "AirportName": "Arthur's Town",
                    "CityCode": "ATC"
                },
                {
                    "AirportCode": "ATH",
                    "AirportName": "Athinai",
                    "CityCode": "ATH"
                },
                {
                    "AirportCode": "ATI",
                    "AirportName": "Artigas",
                    "CityCode": "ATI"
                },
                {
                    "AirportCode": "ATJ",
                    "AirportName": "Antsirabe",
                    "CityCode": "ATJ"
                },
                {
                    "AirportCode": "ATK",
                    "AirportName": "Atqasuk",
                    "CityCode": "ATK"
                },
                {
                    "AirportCode": "ATL",
                    "AirportName": "William B Hartsfield",
                    "CityCode": "ATL"
                },
                {
                    "AirportCode": "ATM",
                    "AirportName": "Altamira",
                    "CityCode": "ATM"
                },
                {
                    "AirportCode": "ATP",
                    "AirportName": "Aitape Airstrip",
                    "CityCode": "ATP"
                },
                {
                    "AirportCode": "ATQ",
                    "AirportName": "Amritsar",
                    "CityCode": "ATQ"
                },
                {
                    "AirportCode": "ATR",
                    "AirportName": "Mouakchott",
                    "CityCode": "ATR"
                },
                {
                    "AirportCode": "ATT",
                    "AirportName": "Atmautluak",
                    "CityCode": "ATT"
                },
                {
                    "AirportCode": "ATV",
                    "AirportName": "Ati",
                    "CityCode": "ATV"
                },
                {
                    "AirportCode": "ATW",
                    "AirportName": "Outagamie County",
                    "CityCode": "ATW"
                },
                {
                    "AirportCode": "ATY",
                    "AirportName": "Watertown",
                    "CityCode": "ATY"
                },
                {
                    "AirportCode": "ATZ",
                    "AirportName": "Assiut",
                    "CityCode": "ATZ"
                },
                {
                    "AirportCode": "AUA",
                    "AirportName": "Reina Beatrix",
                    "CityCode": "AUA"
                },
                {
                    "AirportCode": "AUC",
                    "AirportName": "Arauca",
                    "CityCode": "AUC"
                },
                {
                    "AirportCode": "AUG",
                    "AirportName": "Augusta",
                    "CityCode": "AUG"
                },
                {
                    "AirportCode": "AUH",
                    "AirportName": "Abu Dhabi Int'l",
                    "CityCode": "AUH"
                },
                {
                    "AirportCode": "AUJ",
                    "AirportName": "Ambunti",
                    "CityCode": "AUJ"
                },
                {
                    "AirportCode": "AUK",
                    "AirportName": "Alakanuk",
                    "CityCode": "AUK"
                },
                {
                    "AirportCode": "AUP",
                    "AirportName": "Agaun",
                    "CityCode": "AUP"
                },
                {
                    "AirportCode": "AUQ",
                    "AirportName": "Atuona",
                    "CityCode": "AUQ"
                },
                {
                    "AirportCode": "AUR",
                    "AirportName": "Aurillac",
                    "CityCode": "AUR"
                },
                {
                    "AirportCode": "AUS",
                    "AirportName": "Robert Mueller Municipal",
                    "CityCode": "AUS"
                },
                {
                    "AirportCode": "AUU",
                    "AirportName": "Aurukun Mission",
                    "CityCode": "AUU"
                },
                {
                    "AirportCode": "AUX",
                    "AirportName": "Araguaina",
                    "CityCode": "AUX"
                },
                {
                    "AirportCode": "AUY",
                    "AirportName": "Aneityum",
                    "CityCode": "AUY"
                },
                {
                    "AirportCode": "AVI",
                    "AirportName": "Ciego De Avila",
                    "CityCode": "AVI"
                },
                {
                    "AirportCode": "AVL",
                    "AirportName": "Asheville Municipal",
                    "CityCode": "AVL"
                },
                {
                    "AirportCode": "AVN",
                    "AirportName": "Avignon",
                    "CityCode": "AVN"
                },
                {
                    "AirportCode": "AVP",
                    "AirportName": "Scranton Int'l",
                    "CityCode": "AVP"
                },
                {
                    "AirportCode": "AVU",
                    "AirportName": "Avu Avu",
                    "CityCode": "AVU"
                },
                {
                    "AirportCode": "AVW",
                    "AirportName": "Avra Valley",
                    "CityCode": "TUS"
                },
                {
                    "AirportCode": "AVX",
                    "AirportName": "Avalon Bay",
                    "CityCode": "AVX"
                },
                {
                    "AirportCode": "AWA",
                    "AirportName": "Awassa",
                    "CityCode": "AWA"
                },
                {
                    "AirportCode": "AWB",
                    "AirportName": "AWABA",
                    "CityCode": "AWB"
                },
                {
                    "AirportCode": "AWD",
                    "AirportName": "Aniwa",
                    "CityCode": "AWD"
                },
                {
                    "AirportCode": "AWH",
                    "AirportName": "Awareh",
                    "CityCode": "AWH"
                },
                {
                    "AirportCode": "AWZ",
                    "AirportName": "Ahwaz",
                    "CityCode": "AWZ"
                },
                {
                    "AirportCode": "AXA",
                    "AirportName": "Wallblake",
                    "CityCode": "AXA"
                },
                {
                    "AirportCode": "AXD",
                    "AirportName": "Demokritos",
                    "CityCode": "AXD"
                },
                {
                    "AirportCode": "AXK",
                    "AirportName": "Ataq",
                    "CityCode": "AXK"
                },
                {
                    "AirportCode": "AXM",
                    "AirportName": "El Eden",
                    "CityCode": "AXM"
                },
                {
                    "AirportCode": "AXP",
                    "AirportName": "Spring Point",
                    "CityCode": "AXP"
                },
                {
                    "AirportCode": "AXR",
                    "AirportName": "Arutua",
                    "CityCode": "AXR"
                },
                {
                    "AirportCode": "AXT",
                    "AirportName": "Akita",
                    "CityCode": "AXT"
                },
                {
                    "AirportCode": "AXU",
                    "AirportName": "Axum",
                    "CityCode": "AXU"
                },
                {
                    "AirportCode": "AYG",
                    "AirportName": "Yaguara",
                    "CityCode": "AYG"
                },
                {
                    "AirportCode": "AYP",
                    "AirportName": "Yanamilla",
                    "CityCode": "AYP"
                },
                {
                    "AirportCode": "AYQ",
                    "AirportName": "Connellan",
                    "CityCode": "AYQ"
                },
                {
                    "AirportCode": "AYT",
                    "AirportName": "Antalya",
                    "CityCode": "AYT"
                },
                {
                    "AirportCode": "AYW",
                    "AirportName": "Ayawasi",
                    "CityCode": "AYW"
                },
                {
                    "AirportCode": "AZA",
                    "AirportName": "Phoenix-Mesa Gateway",
                    "CityCode": "PHX"
                },
                {
                    "AirportCode": "AZB",
                    "AirportName": "Amazon Bay",
                    "CityCode": "AZB"
                },
                {
                    "AirportCode": "AZD",
                    "AirportName": "Yazd",
                    "CityCode": "AZD"
                },
                {
                    "AirportCode": "AZO",
                    "AirportName": "Battle Creek Int'l",
                    "CityCode": "AZO"
                },
                {
                    "AirportCode": "AZP",
                    "AirportName": "Atizapan",
                    "CityCode": "MEX"
                },
                {
                    "AirportCode": "AZR",
                    "AirportName": "Adrar",
                    "CityCode": "AZR"
                },
                {
                    "AirportCode": "AZZ",
                    "AirportName": "Ambriz",
                    "CityCode": "AZZ"
                },
                {
                    "AirportCode": "BAA",
                    "AirportName": "Bialla",
                    "CityCode": "BAA"
                },
                {
                    "AirportCode": "BAG",
                    "AirportName": "Loakan",
                    "CityCode": "BAG"
                },
                {
                    "AirportCode": "BAH",
                    "AirportName": "Bahrain Int'l",
                    "CityCode": "BAH"
                },
                {
                    "AirportCode": "BAI",
                    "AirportName": "BUENOS AIRES",
                    "CityCode": "BAI"
                },
                {
                    "AirportCode": "BAQ",
                    "AirportName": "E Cortissoz",
                    "CityCode": "BAQ"
                },
                {
                    "AirportCode": "BAS",
                    "AirportName": "Balalae",
                    "CityCode": "BAS"
                },
                {
                    "AirportCode": "BAU",
                    "AirportName": "Bauru",
                    "CityCode": "BAU"
                },
                {
                    "AirportCode": "BAV",
                    "AirportName": "Baotou",
                    "CityCode": "BAV"
                },
                {
                    "AirportCode": "BAX",
                    "AirportName": "Barnaul",
                    "CityCode": "BAX"
                },
                {
                    "AirportCode": "BAY",
                    "AirportName": "Baia Mare",
                    "CityCode": "BAY"
                },
                {
                    "AirportCode": "BBF",
                    "AirportName": "Burlington",
                    "CityCode": "BBF"
                },
                {
                    "AirportCode": "BBG",
                    "AirportName": "Butaritari",
                    "CityCode": "BBG"
                },
                {
                    "AirportCode": "BBI",
                    "AirportName": "Bhubaneshwar",
                    "CityCode": "BBI"
                },
                {
                    "AirportCode": "BBK",
                    "AirportName": "Kasane",
                    "CityCode": "BBK"
                },
                {
                    "AirportCode": "BBN",
                    "AirportName": "Bario",
                    "CityCode": "BBN"
                },
                {
                    "AirportCode": "BBO",
                    "AirportName": "Berbera",
                    "CityCode": "BBO"
                },
                {
                    "AirportCode": "BBQ",
                    "AirportName": "Barbuda",
                    "CityCode": "BBQ"
                },
                {
                    "AirportCode": "BBS",
                    "AirportName": "Blackbush",
                    "CityCode": "BBS"
                },
                {
                    "AirportCode": "BBT",
                    "AirportName": "Berberati",
                    "CityCode": "BBT"
                },
                {
                    "AirportCode": "BBU",
                    "AirportName": "Baneasa",
                    "CityCode": "BUH"
                },
                {
                    "AirportCode": "BBV",
                    "AirportName": "Bereby",
                    "CityCode": "BBV"
                },
                {
                    "AirportCode": "BBX",
                    "AirportName": "Wings Field",
                    "CityCode": "PHL"
                },
                {
                    "AirportCode": "BBY",
                    "AirportName": "Bambari",
                    "CityCode": "BBY"
                },
                {
                    "AirportCode": "BCA",
                    "AirportName": "Baracoa",
                    "CityCode": "BCA"
                },
                {
                    "AirportCode": "BCD",
                    "AirportName": "Bacolod",
                    "CityCode": "BCD"
                },
                {
                    "AirportCode": "BCE",
                    "AirportName": "Bryce",
                    "CityCode": "BCE"
                },
                {
                    "AirportCode": "BCF",
                    "AirportName": "Bouca",
                    "CityCode": "BCF"
                },
                {
                    "AirportCode": "BCN",
                    "AirportName": "Barcelona",
                    "CityCode": "BCN"
                },
                {
                    "AirportCode": "BCO",
                    "AirportName": "Jinka",
                    "CityCode": "BCO"
                },
                {
                    "AirportCode": "BCT",
                    "AirportName": "Public Non Commercial",
                    "CityCode": "BCT"
                },
                {
                    "AirportCode": "BCU",
                    "AirportName": "Bauchi",
                    "CityCode": "BCU"
                },
                {
                    "AirportCode": "BCY",
                    "AirportName": "Bulchi",
                    "CityCode": "BCY"
                },
                {
                    "AirportCode": "BCZ",
                    "AirportName": "Bickerton Island",
                    "CityCode": "BCZ"
                },
                {
                    "AirportCode": "BDA",
                    "AirportName": "Bermuda Int'l",
                    "CityCode": "BDA"
                },
                {
                    "AirportCode": "BDB",
                    "AirportName": "Bundaberg",
                    "CityCode": "BDB"
                },
                {
                    "AirportCode": "BDD",
                    "AirportName": "Badu Island",
                    "CityCode": "BDD"
                },
                {
                    "AirportCode": "BDH",
                    "AirportName": "Bandar Lengeh",
                    "CityCode": "BDH"
                },
                {
                    "AirportCode": "BDI",
                    "AirportName": "Bird Island",
                    "CityCode": "BDI"
                },
                {
                    "AirportCode": "BDJ",
                    "AirportName": "Sjamsudin Noor",
                    "CityCode": "BDJ"
                },
                {
                    "AirportCode": "BDK",
                    "AirportName": "Bondoukou",
                    "CityCode": "BDK"
                },
                {
                    "AirportCode": "BDL",
                    "AirportName": "Bradley Int'l",
                    "CityCode": "HFD"
                },
                {
                    "AirportCode": "BDO",
                    "AirportName": "Husein Sastranegara",
                    "CityCode": "BDO"
                },
                {
                    "AirportCode": "BDQ",
                    "AirportName": "Vadodara",
                    "CityCode": "BDQ"
                },
                {
                    "AirportCode": "BDR",
                    "AirportName": "Igor I. Sikorsky Memorial",
                    "CityCode": "BDR"
                },
                {
                    "AirportCode": "BDS",
                    "AirportName": "Papola Casale",
                    "CityCode": "BDS"
                },
                {
                    "AirportCode": "BDT",
                    "AirportName": "Gbadolite",
                    "CityCode": "BDT"
                },
                {
                    "AirportCode": "BDU",
                    "AirportName": "Bardufoss",
                    "CityCode": "BDU"
                },
                {
                    "AirportCode": "BEB",
                    "AirportName": "Benbecula",
                    "CityCode": "BEB"
                },
                {
                    "AirportCode": "BEC",
                    "AirportName": "Wichita Beech",
                    "CityCode": "ICT"
                },
                {
                    "AirportCode": "BEF",
                    "AirportName": "Bluefields",
                    "CityCode": "BEF"
                },
                {
                    "AirportCode": "BEG",
                    "AirportName": "Beograd",
                    "CityCode": "BEG"
                },
                {
                    "AirportCode": "BEI",
                    "AirportName": "Beica",
                    "CityCode": "BEI"
                },
                {
                    "AirportCode": "BEJ",
                    "AirportName": "Berau",
                    "CityCode": "BEJ"
                },
                {
                    "AirportCode": "BEL",
                    "AirportName": "Val De Cans",
                    "CityCode": "BEL"
                },
                {
                    "AirportCode": "BEM",
                    "AirportName": "Bossembele",
                    "CityCode": "BEM"
                },
                {
                    "AirportCode": "BEN",
                    "AirportName": "Benina Int'l",
                    "CityCode": "BEN"
                },
                {
                    "AirportCode": "BEO",
                    "AirportName": "Belmont",
                    "CityCode": "NTL"
                },
                {
                    "AirportCode": "BEP",
                    "AirportName": "Bellary",
                    "CityCode": "BEP"
                },
                {
                    "AirportCode": "BER",
                    "AirportName": "Berlin Metropolitan Area",
                    "CityCode": "BER"
                },
                {
                    "AirportCode": "BES",
                    "AirportName": "Guipavas",
                    "CityCode": "BES"
                },
                {
                    "AirportCode": "BET",
                    "AirportName": "Bethel",
                    "CityCode": "BET"
                },
                {
                    "AirportCode": "BEW",
                    "AirportName": "Beira",
                    "CityCode": "BEW"
                },
                {
                    "AirportCode": "BEY",
                    "AirportName": "Beirut Int'l",
                    "CityCode": "BEY"
                },
                {
                    "AirportCode": "BEZ",
                    "AirportName": "Beru",
                    "CityCode": "BEZ"
                },
                {
                    "AirportCode": "BFD",
                    "AirportName": "Bradford",
                    "CityCode": "BFD"
                },
                {
                    "AirportCode": "BFF",
                    "AirportName": "Scotts Bluff County",
                    "CityCode": "BFF"
                },
                {
                    "AirportCode": "BFL",
                    "AirportName": "Meadows Field",
                    "CityCode": "BFL"
                },
                {
                    "AirportCode": "BFN",
                    "AirportName": "Bloemfontein",
                    "CityCode": "BFN"
                },
                {
                    "AirportCode": "BFO",
                    "AirportName": "Buffalo Range",
                    "CityCode": "BFO"
                },
                {
                    "AirportCode": "BFS",
                    "AirportName": "Belfast Int'l",
                    "CityCode": "BFS"
                },
                {
                    "AirportCode": "BFX",
                    "AirportName": "Bafoussam",
                    "CityCode": "BFX"
                },
                {
                    "AirportCode": "BGA",
                    "AirportName": "Bucaramanga",
                    "CityCode": "BGA"
                },
                {
                    "AirportCode": "BGB",
                    "AirportName": "Booue",
                    "CityCode": "BGB"
                },
                {
                    "AirportCode": "BGC",
                    "AirportName": "Braganca",
                    "CityCode": "BGC"
                },
                {
                    "AirportCode": "BGF",
                    "AirportName": "Bangui",
                    "CityCode": "BGF"
                },
                {
                    "AirportCode": "BGH",
                    "AirportName": "Abbaye",
                    "CityCode": "BGH"
                },
                {
                    "AirportCode": "BGI",
                    "AirportName": "Grantley Adams Int'l",
                    "CityCode": "BGI"
                },
                {
                    "AirportCode": "BGJ",
                    "AirportName": "Borgarfjordur Eystri",
                    "CityCode": "BGJ"
                },
                {
                    "AirportCode": "BGK",
                    "AirportName": "Big Creek",
                    "CityCode": "BGK"
                },
                {
                    "AirportCode": "BGM",
                    "AirportName": "Binghamton",
                    "CityCode": "BGM"
                },
                {
                    "AirportCode": "BGO",
                    "AirportName": "Flesland",
                    "CityCode": "BGO"
                },
                {
                    "AirportCode": "BGR",
                    "AirportName": "Bangor Internationa",
                    "CityCode": "BGR"
                },
                {
                    "AirportCode": "BGU",
                    "AirportName": "Bangassou",
                    "CityCode": "BGU"
                },
                {
                    "AirportCode": "BGY",
                    "AirportName": "Orio Al Serio",
                    "CityCode": "MIL"
                },
                {
                    "AirportCode": "BHA",
                    "AirportName": "Bahia De Caraquez",
                    "CityCode": "BHA"
                },
                {
                    "AirportCode": "BHB",
                    "AirportName": "Bar Harbour",
                    "CityCode": "BHB"
                },
                {
                    "AirportCode": "BHC",
                    "AirportName": "Bhurban Heliport",
                    "CityCode": "BHC"
                },
                {
                    "AirportCode": "BHD",
                    "AirportName": "Belfast City",
                    "CityCode": "BFS"
                },
                {
                    "AirportCode": "BHE",
                    "AirportName": "Blenheim",
                    "CityCode": "BHE"
                },
                {
                    "AirportCode": "BHG",
                    "AirportName": "Brus Laguna",
                    "CityCode": "BHG"
                },
                {
                    "AirportCode": "BHH",
                    "AirportName": "Bisha",
                    "CityCode": "BHH"
                },
                {
                    "AirportCode": "BHI",
                    "AirportName": "Comandante",
                    "CityCode": "BHI"
                },
                {
                    "AirportCode": "BHJ",
                    "AirportName": "Rudra Mata",
                    "CityCode": "BHJ"
                },
                {
                    "AirportCode": "BHK",
                    "AirportName": "Bukhara",
                    "CityCode": "BHK"
                },
                {
                    "AirportCode": "BHM",
                    "AirportName": "Birmingham",
                    "CityCode": "BHM"
                },
                {
                    "AirportCode": "BHN",
                    "AirportName": "Beihan",
                    "CityCode": "BHN"
                },
                {
                    "AirportCode": "BHO",
                    "AirportName": "Bhopal",
                    "CityCode": "BHO"
                },
                {
                    "AirportCode": "BHP",
                    "AirportName": "BHOJPUR",
                    "CityCode": "BHP"
                },
                {
                    "AirportCode": "BHQ",
                    "AirportName": "Broken Hill",
                    "CityCode": "BHQ"
                },
                {
                    "AirportCode": "BHS",
                    "AirportName": "Raglan",
                    "CityCode": "BHS"
                },
                {
                    "AirportCode": "BHU",
                    "AirportName": "Bhavnagar",
                    "CityCode": "BHU"
                },
                {
                    "AirportCode": "BHX",
                    "AirportName": "Birmingham Int'l",
                    "CityCode": "BHX"
                },
                {
                    "AirportCode": "BHY",
                    "AirportName": "Beihai",
                    "CityCode": "BHY"
                },
                {
                    "AirportCode": "BIA",
                    "AirportName": "Poretta",
                    "CityCode": "BIA"
                },
                {
                    "AirportCode": "BID",
                    "AirportName": "Block Island",
                    "CityCode": "BID"
                },
                {
                    "AirportCode": "BIH",
                    "AirportName": "Bishop",
                    "CityCode": "BIH"
                },
                {
                    "AirportCode": "BII",
                    "AirportName": "Enyu Airfield",
                    "CityCode": "BII"
                },
                {
                    "AirportCode": "BIK",
                    "AirportName": "Mokmer",
                    "CityCode": "BIK"
                },
                {
                    "AirportCode": "BIL",
                    "AirportName": "Billings",
                    "CityCode": "BIL"
                },
                {
                    "AirportCode": "BIM",
                    "AirportName": "Bimini Int'l",
                    "CityCode": "BIM"
                },
                {
                    "AirportCode": "BIO",
                    "AirportName": "Bilbao",
                    "CityCode": "BIO"
                },
                {
                    "AirportCode": "BIQ",
                    "AirportName": "Bayonne Anglet",
                    "CityCode": "BIQ"
                },
                {
                    "AirportCode": "BIR",
                    "AirportName": "Biratnagar",
                    "CityCode": "BIR"
                },
                {
                    "AirportCode": "BIS",
                    "AirportName": "Bismarck",
                    "CityCode": "BIS"
                },
                {
                    "AirportCode": "BIV",
                    "AirportName": "Bria",
                    "CityCode": "BIV"
                },
                {
                    "AirportCode": "BIY",
                    "AirportName": "Bisho",
                    "CityCode": "BIY"
                },
                {
                    "AirportCode": "BJA",
                    "AirportName": "Bejaia",
                    "CityCode": "BJA"
                },
                {
                    "AirportCode": "BJD",
                    "AirportName": "Bakkafjordur",
                    "CityCode": "BJD"
                },
                {
                    "AirportCode": "BJF",
                    "AirportName": "Batsfjord",
                    "CityCode": "BJF"
                },
                {
                    "AirportCode": "BJI",
                    "AirportName": "Bemidji",
                    "CityCode": "BJI"
                },
                {
                    "AirportCode": "BJL",
                    "AirportName": "Yundum Int'l",
                    "CityCode": "BJL"
                },
                {
                    "AirportCode": "BJM",
                    "AirportName": "Bujumbura Int'l",
                    "CityCode": "BJM"
                },
                {
                    "AirportCode": "BJO",
                    "AirportName": "Bermejo",
                    "CityCode": "BJO"
                },
                {
                    "AirportCode": "BJR",
                    "AirportName": "Bahar Dar",
                    "CityCode": "BJR"
                },
                {
                    "AirportCode": "BJV",
                    "AirportName": "Milas",
                    "CityCode": "BXN"
                },
                {
                    "AirportCode": "BJW",
                    "AirportName": "Bajawa",
                    "CityCode": "BJW"
                },
                {
                    "AirportCode": "BJX",
                    "AirportName": "Guanajuato del Bajio",
                    "CityCode": "BJX"
                },
                {
                    "AirportCode": "BKA",
                    "AirportName": "Bykovo",
                    "CityCode": "MOW"
                },
                {
                    "AirportCode": "BKC",
                    "AirportName": "Buckland",
                    "CityCode": "BKC"
                },
                {
                    "AirportCode": "BKI",
                    "AirportName": "Kota Kinabalu",
                    "CityCode": "BKI"
                },
                {
                    "AirportCode": "BKJ",
                    "AirportName": "Boke",
                    "CityCode": "BKJ"
                },
                {
                    "AirportCode": "BKK",
                    "AirportName": "Bangkok Int'l",
                    "CityCode": "BKK"
                },
                {
                    "AirportCode": "BKL",
                    "AirportName": "Burke Lakefront",
                    "CityCode": "CLE"
                },
                {
                    "AirportCode": "BKM",
                    "AirportName": "Bakalalan",
                    "CityCode": "BKM"
                },
                {
                    "AirportCode": "BKO",
                    "AirportName": "Bamako",
                    "CityCode": "BKO"
                },
                {
                    "AirportCode": "BKQ",
                    "AirportName": "Blackall",
                    "CityCode": "BKQ"
                },
                {
                    "AirportCode": "BKR",
                    "AirportName": "Bokoro",
                    "CityCode": "BKR"
                },
                {
                    "AirportCode": "BKS",
                    "AirportName": "Padangkemiling",
                    "CityCode": "BKS"
                },
                {
                    "AirportCode": "BKU",
                    "AirportName": "Betioky",
                    "CityCode": "BKU"
                },
                {
                    "AirportCode": "BKW",
                    "AirportName": "Beckley",
                    "CityCode": "BKW"
                },
                {
                    "AirportCode": "BKX",
                    "AirportName": "Brookings",
                    "CityCode": "BKX"
                },
                {
                    "AirportCode": "BKY",
                    "AirportName": "Kamenbe",
                    "CityCode": "BKY"
                },
                {
                    "AirportCode": "BKZ",
                    "AirportName": "Bukoba",
                    "CityCode": "BKZ"
                },
                {
                    "AirportCode": "BLA",
                    "AirportName": "Barcelonagen Ja A Anzoategui",
                    "CityCode": "BLA"
                },
                {
                    "AirportCode": "BLC",
                    "AirportName": "Bali",
                    "CityCode": "BLC"
                },
                {
                    "AirportCode": "BLE",
                    "AirportName": "Dala",
                    "CityCode": "BLE"
                },
                {
                    "AirportCode": "BLF",
                    "AirportName": "Mercer County",
                    "CityCode": "BLF"
                },
                {
                    "AirportCode": "BLG",
                    "AirportName": "Belaga",
                    "CityCode": "BLG"
                },
                {
                    "AirportCode": "BLI",
                    "AirportName": "Bellingham",
                    "CityCode": "BLI"
                },
                {
                    "AirportCode": "BLK",
                    "AirportName": "Blackpool",
                    "CityCode": "BLK"
                },
                {
                    "AirportCode": "BLL",
                    "AirportName": "Billund",
                    "CityCode": "BLL"
                },
                {
                    "AirportCode": "BLQ",
                    "AirportName": "Guglielmo Marconi",
                    "CityCode": "BLQ"
                },
                {
                    "AirportCode": "BLR",
                    "AirportName": "Bengaluru Intl",
                    "CityCode": "BLR"
                },
                {
                    "AirportCode": "BLT",
                    "AirportName": "Blackwater",
                    "CityCode": "BLT"
                },
                {
                    "AirportCode": "BLZ",
                    "AirportName": "Chileka",
                    "CityCode": "BLZ"
                },
                {
                    "AirportCode": "BMA",
                    "AirportName": "Bromma",
                    "CityCode": "STO"
                },
                {
                    "AirportCode": "BMB",
                    "AirportName": "Bumba",
                    "CityCode": "BMB"
                },
                {
                    "AirportCode": "BMD",
                    "AirportName": "Belo",
                    "CityCode": "BMD"
                },
                {
                    "AirportCode": "BME",
                    "AirportName": "Broome",
                    "CityCode": "BME"
                },
                {
                    "AirportCode": "BMF",
                    "AirportName": "Bakouma",
                    "CityCode": "BMF"
                },
                {
                    "AirportCode": "BMG",
                    "AirportName": "Bloomington",
                    "CityCode": "BMG"
                },
                {
                    "AirportCode": "BMI",
                    "AirportName": "Bloomington",
                    "CityCode": "BMI"
                },
                {
                    "AirportCode": "BMK",
                    "AirportName": "Borkum",
                    "CityCode": "BMK"
                },
                {
                    "AirportCode": "BMM",
                    "AirportName": "Bitam",
                    "CityCode": "BMM"
                },
                {
                    "AirportCode": "BMO",
                    "AirportName": "Bhamo",
                    "CityCode": "BMO"
                },
                {
                    "AirportCode": "BMP",
                    "AirportName": "Brampton Island",
                    "CityCode": "BMP"
                },
                {
                    "AirportCode": "BMQ",
                    "AirportName": "Bamburi",
                    "CityCode": "BMQ"
                },
                {
                    "AirportCode": "BMU",
                    "AirportName": "Bima",
                    "CityCode": "BMU"
                },
                {
                    "AirportCode": "BMW",
                    "AirportName": "Bordj Badji Mokht",
                    "CityCode": "BMW"
                },
                {
                    "AirportCode": "BMY",
                    "AirportName": "Belep Island",
                    "CityCode": "BMY"
                },
                {
                    "AirportCode": "BNA",
                    "AirportName": "Nashville",
                    "CityCode": "BNA"
                },
                {
                    "AirportCode": "BNB",
                    "AirportName": "Boende",
                    "CityCode": "BNB"
                },
                {
                    "AirportCode": "BNC",
                    "AirportName": "Beni",
                    "CityCode": "BNC"
                },
                {
                    "AirportCode": "BND",
                    "AirportName": "Bandar Abbas",
                    "CityCode": "BND"
                },
                {
                    "AirportCode": "BNE",
                    "AirportName": "Brisbane Airport",
                    "CityCode": "BNE"
                },
                {
                    "AirportCode": "BNI",
                    "AirportName": "Benin City",
                    "CityCode": "BNI"
                },
                {
                    "AirportCode": "BNK",
                    "AirportName": "Ballina",
                    "CityCode": "BNK"
                },
                {
                    "AirportCode": "BNN",
                    "AirportName": "Bronnoy",
                    "CityCode": "BNN"
                },
                {
                    "AirportCode": "BNR",
                    "AirportName": "Banfora",
                    "CityCode": "BNR"
                },
                {
                    "AirportCode": "BNS",
                    "AirportName": "Barinas",
                    "CityCode": "BNS"
                },
                {
                    "AirportCode": "BNY",
                    "AirportName": "Bellona",
                    "CityCode": "BNY"
                },
                {
                    "AirportCode": "BOA",
                    "AirportName": "BOMA",
                    "CityCode": "BOA"
                },
                {
                    "AirportCode": "BOB",
                    "AirportName": "Motu-Mute",
                    "CityCode": "BOB"
                },
                {
                    "AirportCode": "BOC",
                    "AirportName": "Bocas Del Toro",
                    "CityCode": "BOC"
                },
                {
                    "AirportCode": "BOD",
                    "AirportName": "Merignac",
                    "CityCode": "BOD"
                },
                {
                    "AirportCode": "BOE",
                    "AirportName": "Boundji",
                    "CityCode": "BOE"
                },
                {
                    "AirportCode": "BOG",
                    "AirportName": "Eldorado",
                    "CityCode": "BOG"
                },
                {
                    "AirportCode": "BOH",
                    "AirportName": "Bournemouth Int'l",
                    "CityCode": "BOH"
                },
                {
                    "AirportCode": "BOI",
                    "AirportName": "Boise Air Term. (Gowen Field)",
                    "CityCode": "BOI"
                },
                {
                    "AirportCode": "BOJ",
                    "AirportName": "Bourgas",
                    "CityCode": "BOJ"
                },
                {
                    "AirportCode": "BOM",
                    "AirportName": "Mumbai",
                    "CityCode": "BOM"
                },
                {
                    "AirportCode": "BON",
                    "AirportName": "Flamingo Int'l",
                    "CityCode": "BON"
                },
                {
                    "AirportCode": "BOO",
                    "AirportName": "Bodo",
                    "CityCode": "BOO"
                },
                {
                    "AirportCode": "BOP",
                    "AirportName": "Bouar",
                    "CityCode": "BOP"
                },
                {
                    "AirportCode": "BOR",
                    "AirportName": "Fontaine",
                    "CityCode": "BOR"
                },
                {
                    "AirportCode": "BOS",
                    "AirportName": "Logan Int'l",
                    "CityCode": "BOS"
                },
                {
                    "AirportCode": "BOX",
                    "AirportName": "Borroloola",
                    "CityCode": "BOX"
                },
                {
                    "AirportCode": "BOY",
                    "AirportName": "Borgo",
                    "CityCode": "BOY"
                },
                {
                    "AirportCode": "BOZ",
                    "AirportName": "Bozoum",
                    "CityCode": "BOZ"
                },
                {
                    "AirportCode": "BPC",
                    "AirportName": "Bamenda",
                    "CityCode": "BPC"
                },
                {
                    "AirportCode": "BPG",
                    "AirportName": "Barra Do Garcas",
                    "CityCode": "BPG"
                },
                {
                    "AirportCode": "BPN",
                    "AirportName": "Sepingan",
                    "CityCode": "BPN"
                },
                {
                    "AirportCode": "BPS",
                    "AirportName": "Porto Seguro",
                    "CityCode": "BPS"
                },
                {
                    "AirportCode": "BPT",
                    "AirportName": "Jefferson County",
                    "CityCode": "BPT"
                },
                {
                    "AirportCode": "BPY",
                    "AirportName": "Besalampy",
                    "CityCode": "BPY"
                },
                {
                    "AirportCode": "BQK",
                    "AirportName": "Glynco Jetport",
                    "CityCode": "SSI"
                },
                {
                    "AirportCode": "BQN",
                    "AirportName": "Borinquen",
                    "CityCode": "BQN"
                },
                {
                    "AirportCode": "BQO",
                    "AirportName": "Bouna",
                    "CityCode": "BQO"
                },
                {
                    "AirportCode": "BQT",
                    "AirportName": "Brest",
                    "CityCode": "BQT"
                },
                {
                    "AirportCode": "BRA",
                    "AirportName": "Barreiras",
                    "CityCode": "BRA"
                },
                {
                    "AirportCode": "BRC",
                    "AirportName": "Bariloche Int'l",
                    "CityCode": "BRC"
                },
                {
                    "AirportCode": "BRD",
                    "AirportName": "Crow Wing County",
                    "CityCode": "BRD"
                },
                {
                    "AirportCode": "BRE",
                    "AirportName": "Bremen",
                    "CityCode": "BRE"
                },
                {
                    "AirportCode": "BRI",
                    "AirportName": "Palese",
                    "CityCode": "BRI"
                },
                {
                    "AirportCode": "BRL",
                    "AirportName": "Burlington",
                    "CityCode": "BRL"
                },
                {
                    "AirportCode": "BRM",
                    "AirportName": "Barquisimeto",
                    "CityCode": "BRM"
                },
                {
                    "AirportCode": "BRN",
                    "AirportName": "Belp",
                    "CityCode": "BRN"
                },
                {
                    "AirportCode": "BRO",
                    "AirportName": "Bouth Padre Is. Int'l",
                    "CityCode": "BRO"
                },
                {
                    "AirportCode": "BRQ",
                    "AirportName": "Turany",
                    "CityCode": "BRQ"
                },
                {
                    "AirportCode": "BRR",
                    "AirportName": "North Bay",
                    "CityCode": "BRR"
                },
                {
                    "AirportCode": "BRS",
                    "AirportName": "Bristol",
                    "CityCode": "BRS"
                },
                {
                    "AirportCode": "BRT",
                    "AirportName": "Bathurst Island",
                    "CityCode": "BRT"
                },
                {
                    "AirportCode": "BRU",
                    "AirportName": "Brussels National",
                    "CityCode": "BRU"
                },
                {
                    "AirportCode": "BRV",
                    "AirportName": "Bremerhaven",
                    "CityCode": "BRV"
                },
                {
                    "AirportCode": "BRW",
                    "AirportName": "Will Rogers Memorial",
                    "CityCode": "BRW"
                },
                {
                    "AirportCode": "BSA",
                    "AirportName": "Bossaso",
                    "CityCode": "BSA"
                },
                {
                    "AirportCode": "BSB",
                    "AirportName": "Brasilia Int'l",
                    "CityCode": "BSB"
                },
                {
                    "AirportCode": "BSC",
                    "AirportName": "Bahia Solano",
                    "CityCode": "BSC"
                },
                {
                    "AirportCode": "BSG",
                    "AirportName": "Bata",
                    "CityCode": "BSG"
                },
                {
                    "AirportCode": "BSJ",
                    "AirportName": "Bairnsdale",
                    "CityCode": "BSJ"
                },
                {
                    "AirportCode": "BSK",
                    "AirportName": "Biskra",
                    "CityCode": "BSK"
                },
                {
                    "AirportCode": "BSL",
                    "AirportName": "Basel Euroairport",
                    "CityCode": "EAP"
                },
                {
                    "AirportCode": "BSN",
                    "AirportName": "Bossangoa",
                    "CityCode": "BSN"
                },
                {
                    "AirportCode": "BSP",
                    "AirportName": "Bensbach",
                    "CityCode": "BSP"
                },
                {
                    "AirportCode": "BSR",
                    "AirportName": "BASRAH INTERNATIONAL",
                    "CityCode": "BSR"
                },
                {
                    "AirportCode": "BST",
                    "AirportName": "Bost",
                    "CityCode": "BST"
                },
                {
                    "AirportCode": "BSU",
                    "AirportName": "Basankusu",
                    "CityCode": "BSU"
                },
                {
                    "AirportCode": "BSV",
                    "AirportName": "Besakoa",
                    "CityCode": "BSV"
                },
                {
                    "AirportCode": "BTA",
                    "AirportName": "Bertoua",
                    "CityCode": "BTA"
                },
                {
                    "AirportCode": "BTB",
                    "AirportName": "Betou",
                    "CityCode": "BTB"
                },
                {
                    "AirportCode": "BTE",
                    "AirportName": "Bonthe",
                    "CityCode": "BTE"
                },
                {
                    "AirportCode": "BTG",
                    "AirportName": "Batangafo",
                    "CityCode": "BTG"
                },
                {
                    "AirportCode": "BTH",
                    "AirportName": "Hang Nadim",
                    "CityCode": "BTH"
                },
                {
                    "AirportCode": "BTI",
                    "AirportName": "Barter Island",
                    "CityCode": "BTI"
                },
                {
                    "AirportCode": "BTJ",
                    "AirportName": "Blang Bintang",
                    "CityCode": "BTJ"
                },
                {
                    "AirportCode": "BTK",
                    "AirportName": "Bratsk",
                    "CityCode": "BTK"
                },
                {
                    "AirportCode": "BTL",
                    "AirportName": "Wk Kellogg Regional",
                    "CityCode": "BTL"
                },
                {
                    "AirportCode": "BTM",
                    "AirportName": "Butte",
                    "CityCode": "BTM"
                },
                {
                    "AirportCode": "BTR",
                    "AirportName": "Ryan",
                    "CityCode": "BTR"
                },
                {
                    "AirportCode": "BTS",
                    "AirportName": "Ivanka",
                    "CityCode": "BTS"
                },
                {
                    "AirportCode": "BTT",
                    "AirportName": "Bettles",
                    "CityCode": "BTT"
                },
                {
                    "AirportCode": "BTU",
                    "AirportName": "Bintulu",
                    "CityCode": "BTU"
                },
                {
                    "AirportCode": "BTV",
                    "AirportName": "Burlington Int'l",
                    "CityCode": "BTV"
                },
                {
                    "AirportCode": "BTZ",
                    "AirportName": "BURSA",
                    "CityCode": "BTZ"
                },
                {
                    "AirportCode": "BUA",
                    "AirportName": "Buka",
                    "CityCode": "BUA"
                },
                {
                    "AirportCode": "BUC",
                    "AirportName": "Burketown",
                    "CityCode": "BUC"
                },
                {
                    "AirportCode": "BUD",
                    "AirportName": "Ferihegy",
                    "CityCode": "BUD"
                },
                {
                    "AirportCode": "BUF",
                    "AirportName": "Greater Buffalo Int'l",
                    "CityCode": "BUF"
                },
                {
                    "AirportCode": "BUG",
                    "AirportName": "Gen V Deslande",
                    "CityCode": "BUG"
                },
                {
                    "AirportCode": "BUI",
                    "AirportName": "Bokondini",
                    "CityCode": "BUI"
                },
                {
                    "AirportCode": "BUK",
                    "AirportName": "Albuq",
                    "CityCode": "BUK"
                },
                {
                    "AirportCode": "BUL",
                    "AirportName": "Bulolo",
                    "CityCode": "BUL"
                },
                {
                    "AirportCode": "BUN",
                    "AirportName": "Buenaventura",
                    "CityCode": "BUN"
                },
                {
                    "AirportCode": "BUO",
                    "AirportName": "Burao",
                    "CityCode": "BUO"
                },
                {
                    "AirportCode": "BUQ",
                    "AirportName": "Bulawayo",
                    "CityCode": "BUQ"
                },
                {
                    "AirportCode": "BUR",
                    "AirportName": "Burbank",
                    "CityCode": "BUR"
                },
                {
                    "AirportCode": "BUS",
                    "AirportName": "Batumi",
                    "CityCode": "BUS"
                },
                {
                    "AirportCode": "BUW",
                    "AirportName": "Baubau",
                    "CityCode": "BUW"
                },
                {
                    "AirportCode": "BUX",
                    "AirportName": "Bunia",
                    "CityCode": "BUX"
                },
                {
                    "AirportCode": "BUZ",
                    "AirportName": "Bushehr",
                    "CityCode": "BUZ"
                },
                {
                    "AirportCode": "BVA",
                    "AirportName": "Beauvais-Tille",
                    "CityCode": "PAR"
                },
                {
                    "AirportCode": "BVB",
                    "AirportName": "Boa Vista",
                    "CityCode": "BVB"
                },
                {
                    "AirportCode": "BVC",
                    "AirportName": "Rabil",
                    "CityCode": "BVC"
                },
                {
                    "AirportCode": "BVE",
                    "AirportName": "Laroche",
                    "CityCode": "BVE"
                },
                {
                    "AirportCode": "BVG",
                    "AirportName": "Berlevag",
                    "CityCode": "BVG"
                },
                {
                    "AirportCode": "BVH",
                    "AirportName": "Vilhena",
                    "CityCode": "BVH"
                },
                {
                    "AirportCode": "BVI",
                    "AirportName": "Birdsville",
                    "CityCode": "BVI"
                },
                {
                    "AirportCode": "BVM",
                    "AirportName": "Belmonte",
                    "CityCode": "BVM"
                },
                {
                    "AirportCode": "BWD",
                    "AirportName": "Brownwood",
                    "CityCode": "BWD"
                },
                {
                    "AirportCode": "BWE",
                    "AirportName": "Braunschweig",
                    "CityCode": "BWE"
                },
                {
                    "AirportCode": "BWI",
                    "AirportName": "Baltimore",
                    "CityCode": "WAS"
                },
                {
                    "AirportCode": "BWN",
                    "AirportName": "Brunei Int'l",
                    "CityCode": "BWN"
                },
                {
                    "AirportCode": "BWT",
                    "AirportName": "Burnie Wynyard",
                    "CityCode": "BWT"
                },
                {
                    "AirportCode": "BXB",
                    "AirportName": "Babo",
                    "CityCode": "BXB"
                },
                {
                    "AirportCode": "BXC",
                    "AirportName": "Boxborough",
                    "CityCode": "BXC"
                },
                {
                    "AirportCode": "BXD",
                    "AirportName": "Bade",
                    "CityCode": "BXD"
                },
                {
                    "AirportCode": "BXE",
                    "AirportName": "Bakel",
                    "CityCode": "BXE"
                },
                {
                    "AirportCode": "BXI",
                    "AirportName": "Boundiali",
                    "CityCode": "BXI"
                },
                {
                    "AirportCode": "BXM",
                    "AirportName": "Batom",
                    "CityCode": "BXM"
                },
                {
                    "AirportCode": "BXU",
                    "AirportName": "Butuan",
                    "CityCode": "BXU"
                },
                {
                    "AirportCode": "BXV",
                    "AirportName": "Breiddalsvik",
                    "CityCode": "BXV"
                },
                {
                    "AirportCode": "BYB",
                    "AirportName": "Dibaa",
                    "CityCode": "BYB"
                },
                {
                    "AirportCode": "BYC",
                    "AirportName": "Yacuiba",
                    "CityCode": "BYC"
                },
                {
                    "AirportCode": "BYK",
                    "AirportName": "Bouake",
                    "CityCode": "BYK"
                },
                {
                    "AirportCode": "BYM",
                    "AirportName": "C.M. De Cespedes",
                    "CityCode": "BYM"
                },
                {
                    "AirportCode": "BYU",
                    "AirportName": "Bindlacher-Berg",
                    "CityCode": "BYU"
                },
                {
                    "AirportCode": "BYX",
                    "AirportName": "Baniyala",
                    "CityCode": "BYX"
                },
                {
                    "AirportCode": "BZE",
                    "AirportName": "Philip S.W. Goldson Int'l",
                    "CityCode": "BZE"
                },
                {
                    "AirportCode": "BZG",
                    "AirportName": "Bydgoszcz I. J. Paderewski Airport",
                    "CityCode": "BZG"
                },
                {
                    "AirportCode": "BZM",
                    "AirportName": "Woensdrecht",
                    "CityCode": "BZM"
                },
                {
                    "AirportCode": "BZN",
                    "AirportName": "Galltin Field",
                    "CityCode": "BZN"
                },
                {
                    "AirportCode": "BZR",
                    "AirportName": "Beziers Vias",
                    "CityCode": "BZR"
                },
                {
                    "AirportCode": "BZV",
                    "AirportName": "Maya Maya",
                    "CityCode": "BZV"
                },
                {
                    "AirportCode": "CAB",
                    "AirportName": "Cabinda",
                    "CityCode": "CAB"
                },
                {
                    "AirportCode": "CAC",
                    "AirportName": "Cascavel",
                    "CityCode": "CAC"
                },
                {
                    "AirportCode": "CAE",
                    "AirportName": "Columbia Metropolitan",
                    "CityCode": "CAE"
                },
                {
                    "AirportCode": "CAG",
                    "AirportName": "Elmas",
                    "CityCode": "CAG"
                },
                {
                    "AirportCode": "CAI",
                    "AirportName": "Cairo Int'l",
                    "CityCode": "CAI"
                },
                {
                    "AirportCode": "CAJ",
                    "AirportName": "Canaima",
                    "CityCode": "CAJ"
                },
                {
                    "AirportCode": "CAK",
                    "AirportName": "Akron",
                    "CityCode": "CAK"
                },
                {
                    "AirportCode": "CAL",
                    "AirportName": "Machrihanish",
                    "CityCode": "CAL"
                },
                {
                    "AirportCode": "CAM",
                    "AirportName": "Camiri",
                    "CityCode": "CAM"
                },
                {
                    "AirportCode": "CAN",
                    "AirportName": "Baiyun",
                    "CityCode": "CAN"
                },
                {
                    "AirportCode": "CAP",
                    "AirportName": "Cap Haitien",
                    "CityCode": "CAP"
                },
                {
                    "AirportCode": "CAQ",
                    "AirportName": "Caucasia",
                    "CityCode": "CAQ"
                },
                {
                    "AirportCode": "CAV",
                    "AirportName": "Cazombo",
                    "CityCode": "CAV"
                },
                {
                    "AirportCode": "CAW",
                    "AirportName": "Bartolomeu Lisandro",
                    "CityCode": "CAW"
                },
                {
                    "AirportCode": "CAX",
                    "AirportName": "Carlisle",
                    "CityCode": "CAX"
                },
                {
                    "AirportCode": "CAY",
                    "AirportName": "Rochambeau",
                    "CityCode": "CAY"
                },
                {
                    "AirportCode": "CBB",
                    "AirportName": "J Wilsterman",
                    "CityCode": "CBB"
                },
                {
                    "AirportCode": "CBD",
                    "AirportName": "Car Nicobar",
                    "CityCode": "CBD"
                },
                {
                    "AirportCode": "CBE",
                    "AirportName": "WILEY FORD",
                    "CityCode": "CBE"
                },
                {
                    "AirportCode": "CBG",
                    "AirportName": "Cambridge",
                    "CityCode": "CBG"
                },
                {
                    "AirportCode": "CBH",
                    "AirportName": "Leger",
                    "CityCode": "CBH"
                },
                {
                    "AirportCode": "CBL",
                    "AirportName": "Ciudad Bolivar",
                    "CityCode": "CBL"
                },
                {
                    "AirportCode": "CBN",
                    "AirportName": "Penggung",
                    "CityCode": "CBN"
                },
                {
                    "AirportCode": "CBO",
                    "AirportName": "Awang",
                    "CityCode": "CBO"
                },
                {
                    "AirportCode": "CBQ",
                    "AirportName": "Calabar",
                    "CityCode": "CBQ"
                },
                {
                    "AirportCode": "CBR",
                    "AirportName": "Canberra",
                    "CityCode": "CBR"
                },
                {
                    "AirportCode": "CBT",
                    "AirportName": "Catumbela",
                    "CityCode": "CBT"
                },
                {
                    "AirportCode": "CBX",
                    "AirportName": "Condobolin",
                    "CityCode": "CBX"
                },
                {
                    "AirportCode": "CCF",
                    "AirportName": "Salvaza",
                    "CityCode": "CCF"
                },
                {
                    "AirportCode": "CCJ",
                    "AirportName": "Calicut",
                    "CityCode": "CCJ"
                },
                {
                    "AirportCode": "CCM",
                    "AirportName": "Crisciuma",
                    "CityCode": "CCM"
                },
                {
                    "AirportCode": "CCN",
                    "AirportName": "Chakcharan",
                    "CityCode": "CCN"
                },
                {
                    "AirportCode": "CCO",
                    "AirportName": "Carimagua",
                    "CityCode": "CCO"
                },
                {
                    "AirportCode": "CCP",
                    "AirportName": "Carriel Sur",
                    "CityCode": "CCP"
                },
                {
                    "AirportCode": "CCR",
                    "AirportName": "Buchanan Field",
                    "CityCode": "CCR"
                },
                {
                    "AirportCode": "CCS",
                    "AirportName": "Simon Bolivar",
                    "CityCode": "CCS"
                },
                {
                    "AirportCode": "CCT",
                    "AirportName": "Colonia Catriel",
                    "CityCode": "CCT"
                },
                {
                    "AirportCode": "CCU",
                    "AirportName": "Calcutta",
                    "CityCode": "CCU"
                },
                {
                    "AirportCode": "CCV",
                    "AirportName": "Craig Cove",
                    "CityCode": "CCV"
                },
                {
                    "AirportCode": "CCZ",
                    "AirportName": "Chub Cay",
                    "CityCode": "CCZ"
                },
                {
                    "AirportCode": "CDB",
                    "AirportName": "Cold Bay",
                    "CityCode": "CDB"
                },
                {
                    "AirportCode": "CDC",
                    "AirportName": "Cedar City",
                    "CityCode": "CDC"
                },
                {
                    "AirportCode": "CDG",
                    "AirportName": "Charles De Gaulle",
                    "CityCode": "PAR"
                },
                {
                    "AirportCode": "CDJ",
                    "AirportName": "Conceicao Do Arag",
                    "CityCode": "CDJ"
                },
                {
                    "AirportCode": "CDR",
                    "AirportName": "Chadron",
                    "CityCode": "CDR"
                },
                {
                    "AirportCode": "CDV",
                    "AirportName": "Mudhole Smith",
                    "CityCode": "CDV"
                },
                {
                    "AirportCode": "CEA",
                    "AirportName": "Cessna Aircraft Field",
                    "CityCode": "ICT"
                },
                {
                    "AirportCode": "CEB",
                    "AirportName": "Cebu",
                    "CityCode": "CEB"
                },
                {
                    "AirportCode": "CEC",
                    "AirportName": "Mc Namara Field",
                    "CityCode": "CEC"
                },
                {
                    "AirportCode": "CED",
                    "AirportName": "Ceduna",
                    "CityCode": "CED"
                },
                {
                    "AirportCode": "CEF",
                    "AirportName": "Westover Metro",
                    "CityCode": "SFY"
                },
                {
                    "AirportCode": "CEI",
                    "AirportName": "Chiang Rai",
                    "CityCode": "CEI"
                },
                {
                    "AirportCode": "CEK",
                    "AirportName": "Chelyabinsk",
                    "CityCode": "CEK"
                },
                {
                    "AirportCode": "CEN",
                    "AirportName": "Ciudad Obregon",
                    "CityCode": "CEN"
                },
                {
                    "AirportCode": "CEO",
                    "AirportName": "Waco Kungo",
                    "CityCode": "CEO"
                },
                {
                    "AirportCode": "CER",
                    "AirportName": "Maupertus",
                    "CityCode": "CER"
                },
                {
                    "AirportCode": "CES",
                    "AirportName": "Cessnock",
                    "CityCode": "CES"
                },
                {
                    "AirportCode": "CEZ",
                    "AirportName": "Montezuma County",
                    "CityCode": "CEZ"
                },
                {
                    "AirportCode": "CFE",
                    "AirportName": "Aulnat",
                    "CityCode": "CFE"
                },
                {
                    "AirportCode": "CFK",
                    "AirportName": "Aboubakr Belkaid",
                    "CityCode": "CFK"
                },
                {
                    "AirportCode": "CFN",
                    "AirportName": "Donegal",
                    "CityCode": "CFN"
                },
                {
                    "AirportCode": "CFO",
                    "AirportName": "Confreza",
                    "CityCode": "CFO"
                },
                {
                    "AirportCode": "CFR",
                    "AirportName": "Carpiquet",
                    "CityCode": "CFR"
                },
                {
                    "AirportCode": "CFS",
                    "AirportName": "Coffs Harbour",
                    "CityCode": "CFS"
                },
                {
                    "AirportCode": "CFU",
                    "AirportName": "Kerkyra",
                    "CityCode": "CFU"
                },
                {
                    "AirportCode": "CGB",
                    "AirportName": "M. Rondon",
                    "CityCode": "CGB"
                },
                {
                    "AirportCode": "CGF",
                    "AirportName": "Cuyahoga County",
                    "CityCode": "CLE"
                },
                {
                    "AirportCode": "CGH",
                    "AirportName": "Congonhas",
                    "CityCode": "SAO"
                },
                {
                    "AirportCode": "CGI",
                    "AirportName": "Cape Girardeau",
                    "CityCode": "CGI"
                },
                {
                    "AirportCode": "CGK",
                    "AirportName": "Soekarno-Hatta Int'l",
                    "CityCode": "JKT"
                },
                {
                    "AirportCode": "CGN",
                    "AirportName": "Cologne",
                    "CityCode": "CGN"
                },
                {
                    "AirportCode": "CGO",
                    "AirportName": "Zhengzhou",
                    "CityCode": "CGO"
                },
                {
                    "AirportCode": "CGP",
                    "AirportName": "Patenga",
                    "CityCode": "CGP"
                },
                {
                    "AirportCode": "CGQ",
                    "AirportName": "Changchun",
                    "CityCode": "CGQ"
                },
                {
                    "AirportCode": "CGR",
                    "AirportName": "Campo Grande Int'l",
                    "CityCode": "CGR"
                },
                {
                    "AirportCode": "CGS",
                    "AirportName": "College Park",
                    "CityCode": "CGS"
                },
                {
                    "AirportCode": "CGY",
                    "AirportName": "Lumbia",
                    "CityCode": "CGY"
                },
                {
                    "AirportCode": "CHA",
                    "AirportName": "Lovell Field",
                    "CityCode": "CHA"
                },
                {
                    "AirportCode": "CHC",
                    "AirportName": "Christchurch",
                    "CityCode": "CHC"
                },
                {
                    "AirportCode": "CHH",
                    "AirportName": "Chachapoyas",
                    "CityCode": "CHH"
                },
                {
                    "AirportCode": "CHM",
                    "AirportName": "Chimbote",
                    "CityCode": "CHM"
                },
                {
                    "AirportCode": "CHO",
                    "AirportName": "Albemarle",
                    "CityCode": "CHO"
                },
                {
                    "AirportCode": "CHQ",
                    "AirportName": "Souda",
                    "CityCode": "CHQ"
                },
                {
                    "AirportCode": "CHR",
                    "AirportName": "Chateauroux",
                    "CityCode": "CHR"
                },
                {
                    "AirportCode": "CHU",
                    "AirportName": "Chuathbaluk",
                    "CityCode": "CHU"
                },
                {
                    "AirportCode": "CHX",
                    "AirportName": "Changuinola",
                    "CityCode": "CHX"
                },
                {
                    "AirportCode": "CHY",
                    "AirportName": "Choiseul Bay",
                    "CityCode": "CHY"
                },
                {
                    "AirportCode": "CIA",
                    "AirportName": "Rome Ciampino",
                    "CityCode": "ROM"
                },
                {
                    "AirportCode": "CIB",
                    "AirportName": "Ap In The Sky",
                    "CityCode": "AVX"
                },
                {
                    "AirportCode": "CIC",
                    "AirportName": "Chico",
                    "CityCode": "CIC"
                },
                {
                    "AirportCode": "CID",
                    "AirportName": "Cedar Rapids",
                    "CityCode": "CID"
                },
                {
                    "AirportCode": "CIF",
                    "AirportName": "Chifeng",
                    "CityCode": "CIF"
                },
                {
                    "AirportCode": "CIH",
                    "AirportName": "Changzhi",
                    "CityCode": "CIH"
                },
                {
                    "AirportCode": "CIJ",
                    "AirportName": "E. Beltram",
                    "CityCode": "CIJ"
                },
                {
                    "AirportCode": "CIK",
                    "AirportName": "Chalkyitsik",
                    "CityCode": "CIK"
                },
                {
                    "AirportCode": "CIL",
                    "AirportName": "Melsing Creek",
                    "CityCode": "CIL"
                },
                {
                    "AirportCode": "CIM",
                    "AirportName": "Cimitarra",
                    "CityCode": "CIM"
                },
                {
                    "AirportCode": "CIP",
                    "AirportName": "Chipata",
                    "CityCode": "CIP"
                },
                {
                    "AirportCode": "CIT",
                    "AirportName": "Chimkent",
                    "CityCode": "CIT"
                },
                {
                    "AirportCode": "CIU",
                    "AirportName": "Chippewa County",
                    "CityCode": "SSM"
                },
                {
                    "AirportCode": "CIW",
                    "AirportName": "Canouan Island",
                    "CityCode": "CIW"
                },
                {
                    "AirportCode": "CIX",
                    "AirportName": "Cornel Ruiy",
                    "CityCode": "CIX"
                },
                {
                    "AirportCode": "CJA",
                    "AirportName": "Cajamarca",
                    "CityCode": "CJA"
                },
                {
                    "AirportCode": "CJB",
                    "AirportName": "Peelamedu",
                    "CityCode": "CJB"
                },
                {
                    "AirportCode": "CJC",
                    "AirportName": "Calama",
                    "CityCode": "CJC"
                },
                {
                    "AirportCode": "CJD",
                    "AirportName": "Candilejas",
                    "CityCode": "CJD"
                },
                {
                    "AirportCode": "CJS",
                    "AirportName": "Ciudad Juarez Intl",
                    "CityCode": "CJS"
                },
                {
                    "AirportCode": "CJU",
                    "AirportName": "Cheju",
                    "CityCode": "CJU"
                },
                {
                    "AirportCode": "CKB",
                    "AirportName": "Benedium",
                    "CityCode": "CKB"
                },
                {
                    "AirportCode": "CKD",
                    "AirportName": "Crooked Creek",
                    "CityCode": "CKD"
                },
                {
                    "AirportCode": "CKG",
                    "AirportName": "Chongqing",
                    "CityCode": "CKG"
                },
                {
                    "AirportCode": "CKK",
                    "AirportName": "CHEROKEE",
                    "CityCode": "CKK"
                },
                {
                    "AirportCode": "CKS",
                    "AirportName": "Carajas",
                    "CityCode": "CKS"
                },
                {
                    "AirportCode": "CKY",
                    "AirportName": "Conakry",
                    "CityCode": "CKY"
                },
                {
                    "AirportCode": "CLD",
                    "AirportName": "Carlsbad",
                    "CityCode": "CLD"
                },
                {
                    "AirportCode": "CLE",
                    "AirportName": "Hopkins Int'l",
                    "CityCode": "CLE"
                },
                {
                    "AirportCode": "CLJ",
                    "AirportName": "Cluj",
                    "CityCode": "CLJ"
                },
                {
                    "AirportCode": "CLL",
                    "AirportName": "Easterwood Field",
                    "CityCode": "CLL"
                },
                {
                    "AirportCode": "CLM",
                    "AirportName": "Fairchild Int'l",
                    "CityCode": "CLM"
                },
                {
                    "AirportCode": "CLO",
                    "AirportName": "Alfonso B. Aragon",
                    "CityCode": "CLO"
                },
                {
                    "AirportCode": "CLP",
                    "AirportName": "Clarks Point",
                    "CityCode": "CLP"
                },
                {
                    "AirportCode": "CLQ",
                    "AirportName": "Colima",
                    "CityCode": "CLQ"
                },
                {
                    "AirportCode": "CLT",
                    "AirportName": "Douglas",
                    "CityCode": "CLT"
                },
                {
                    "AirportCode": "CLY",
                    "AirportName": "Ste Catherine",
                    "CityCode": "CLY"
                },
                {
                    "AirportCode": "CMB",
                    "AirportName": "Katunayake",
                    "CityCode": "CMB"
                },
                {
                    "AirportCode": "CME",
                    "AirportName": "Ciudad Del Carmen",
                    "CityCode": "CME"
                },
                {
                    "AirportCode": "CMF",
                    "AirportName": "Chambery",
                    "CityCode": "CMF"
                },
                {
                    "AirportCode": "CMG",
                    "AirportName": "Corumba Int'l",
                    "CityCode": "CMG"
                },
                {
                    "AirportCode": "CMH",
                    "AirportName": "Port Columbus Int'l",
                    "CityCode": "CMH"
                },
                {
                    "AirportCode": "CMI",
                    "AirportName": "Willard University",
                    "CityCode": "CMI"
                },
                {
                    "AirportCode": "CMJ",
                    "AirportName": "Chi Mei",
                    "CityCode": "CMJ"
                },
                {
                    "AirportCode": "CMN",
                    "AirportName": "Mohamed V",
                    "CityCode": "CAS"
                },
                {
                    "AirportCode": "CMP",
                    "AirportName": "Santana Do Aragua",
                    "CityCode": "CMP"
                },
                {
                    "AirportCode": "CMQ",
                    "AirportName": "Clermont",
                    "CityCode": "CMQ"
                },
                {
                    "AirportCode": "CMR",
                    "AirportName": "Colmar-Houssen",
                    "CityCode": "CMR"
                },
                {
                    "AirportCode": "CMU",
                    "AirportName": "Chimbu",
                    "CityCode": "CMU"
                },
                {
                    "AirportCode": "CMW",
                    "AirportName": "Ign Agramonte Int'l",
                    "CityCode": "CMW"
                },
                {
                    "AirportCode": "CMX",
                    "AirportName": "Houghton County",
                    "CityCode": "CMX"
                },
                {
                    "AirportCode": "CNC",
                    "AirportName": "Coconut Island",
                    "CityCode": "CNC"
                },
                {
                    "AirportCode": "CND",
                    "AirportName": "Kogalniceanu",
                    "CityCode": "CND"
                },
                {
                    "AirportCode": "CNF",
                    "AirportName": "Tancredo Neves Int'l",
                    "CityCode": "BHZ"
                },
                {
                    "AirportCode": "CNJ",
                    "AirportName": "Cloncurry",
                    "CityCode": "CNJ"
                },
                {
                    "AirportCode": "CNM",
                    "AirportName": "Carlsbad",
                    "CityCode": "CNM"
                },
                {
                    "AirportCode": "CNO",
                    "AirportName": "Chino",
                    "CityCode": "CNO"
                },
                {
                    "AirportCode": "CNQ",
                    "AirportName": "Camba Punta",
                    "CityCode": "CNQ"
                },
                {
                    "AirportCode": "CNS",
                    "AirportName": "Cairns",
                    "CityCode": "CNS"
                },
                {
                    "AirportCode": "CNW",
                    "AirportName": "James Connall",
                    "CityCode": "ACT"
                },
                {
                    "AirportCode": "CNX",
                    "AirportName": "Chiang Mai Int'l",
                    "CityCode": "CNX"
                },
                {
                    "AirportCode": "CNY",
                    "AirportName": "Canyonlands Field",
                    "CityCode": "CNY"
                },
                {
                    "AirportCode": "COC",
                    "AirportName": "Concordia",
                    "CityCode": "COC"
                },
                {
                    "AirportCode": "COD",
                    "AirportName": "Yellowstone Regional",
                    "CityCode": "COD"
                },
                {
                    "AirportCode": "COE",
                    "AirportName": "Coeur D'Alene",
                    "CityCode": "COE"
                },
                {
                    "AirportCode": "COG",
                    "AirportName": "Condoto",
                    "CityCode": "COG"
                },
                {
                    "AirportCode": "COH",
                    "AirportName": "Cooch Behar",
                    "CityCode": "COH"
                },
                {
                    "AirportCode": "COJ",
                    "AirportName": "Coonabarabran",
                    "CityCode": "COJ"
                },
                {
                    "AirportCode": "COK",
                    "AirportName": "Kochi",
                    "CityCode": "COK"
                },
                {
                    "AirportCode": "CON",
                    "AirportName": "Concord",
                    "CityCode": "CON"
                },
                {
                    "AirportCode": "COO",
                    "AirportName": "Cotonou",
                    "CityCode": "COO"
                },
                {
                    "AirportCode": "COR",
                    "AirportName": "Pajas Blancas",
                    "CityCode": "COR"
                },
                {
                    "AirportCode": "COS",
                    "AirportName": "Colorado Springs",
                    "CityCode": "COS"
                },
                {
                    "AirportCode": "COU",
                    "AirportName": "Columbia Regional",
                    "CityCode": "COU"
                },
                {
                    "AirportCode": "CPA",
                    "AirportName": "A. Tubman",
                    "CityCode": "CPA"
                },
                {
                    "AirportCode": "CPB",
                    "AirportName": "Capurgana",
                    "CityCode": "CPB"
                },
                {
                    "AirportCode": "CPC",
                    "AirportName": "San Martin de Los Andes",
                    "CityCode": "CPC"
                },
                {
                    "AirportCode": "CPD",
                    "AirportName": "Coober Pedy",
                    "CityCode": "CPD"
                },
                {
                    "AirportCode": "CPE",
                    "AirportName": "Campeche Int'l",
                    "CityCode": "CPE"
                },
                {
                    "AirportCode": "CPH",
                    "AirportName": "Copenhagen",
                    "CityCode": "CPH"
                },
                {
                    "AirportCode": "CPM",
                    "AirportName": "Compton",
                    "CityCode": "CPM"
                },
                {
                    "AirportCode": "CPN",
                    "AirportName": "Cape Rodney",
                    "CityCode": "CPN"
                },
                {
                    "AirportCode": "CPO",
                    "AirportName": "Chamonate",
                    "CityCode": "CPO"
                },
                {
                    "AirportCode": "CPQ",
                    "AirportName": "Campinas Int'l",
                    "CityCode": "CPQ"
                },
                {
                    "AirportCode": "CPR",
                    "AirportName": "Casper",
                    "CityCode": "CPR"
                },
                {
                    "AirportCode": "CPT",
                    "AirportName": "International",
                    "CityCode": "CPT"
                },
                {
                    "AirportCode": "CPV",
                    "AirportName": "Joao Suassuna",
                    "CityCode": "CPV"
                },
                {
                    "AirportCode": "CPX",
                    "AirportName": "Culebra",
                    "CityCode": "CPX"
                },
                {
                    "AirportCode": "CQT",
                    "AirportName": "Caquetania",
                    "CityCode": "CQT"
                },
                {
                    "AirportCode": "CRD",
                    "AirportName": "Cdro  Rivadavia",
                    "CityCode": "CRD"
                },
                {
                    "AirportCode": "CRF",
                    "AirportName": "Carnot",
                    "CityCode": "CRF"
                },
                {
                    "AirportCode": "CRI",
                    "AirportName": "Crooked Island",
                    "CityCode": "CRI"
                },
                {
                    "AirportCode": "CRK",
                    "AirportName": "Diosdado Macapagal International (Clark Int)",
                    "CityCode": "NCP"
                },
                {
                    "AirportCode": "CRL",
                    "AirportName": "Brussels S. Charleroi",
                    "CityCode": "BRU"
                },
                {
                    "AirportCode": "CRP",
                    "AirportName": "Corpus Christi Int'l",
                    "CityCode": "CRP"
                },
                {
                    "AirportCode": "CRQ",
                    "AirportName": "Caravelas",
                    "CityCode": "CRQ"
                },
                {
                    "AirportCode": "CRU",
                    "AirportName": "Carriacou Is",
                    "CityCode": "CRU"
                },
                {
                    "AirportCode": "CRV",
                    "AirportName": "crotone airport",
                    "CityCode": "CRV"
                },
                {
                    "AirportCode": "CRW",
                    "AirportName": "Yeager",
                    "CityCode": "CRW"
                },
                {
                    "AirportCode": "CSB",
                    "AirportName": "Caransebes",
                    "CityCode": "CSB"
                },
                {
                    "AirportCode": "CSG",
                    "AirportName": "Columbus",
                    "CityCode": "CSG"
                },
                {
                    "AirportCode": "CSK",
                    "AirportName": "Cap Skirring",
                    "CityCode": "CSK"
                },
                {
                    "AirportCode": "CSL",
                    "AirportName": "O Sullivan AAF",
                    "CityCode": "CSL"
                },
                {
                    "AirportCode": "CSN",
                    "AirportName": "Carson City",
                    "CityCode": "CSN"
                },
                {
                    "AirportCode": "CSO",
                    "AirportName": "Cochstedt",
                    "CityCode": "CSO"
                },
                {
                    "AirportCode": "CST",
                    "AirportName": "Castaway",
                    "CityCode": "CST"
                },
                {
                    "AirportCode": "CSX",
                    "AirportName": "Changsha",
                    "CityCode": "CSX"
                },
                {
                    "AirportCode": "CTA",
                    "AirportName": "Fontanarossa",
                    "CityCode": "CTA"
                },
                {
                    "AirportCode": "CTC",
                    "AirportName": "Catamarca",
                    "CityCode": "CTC"
                },
                {
                    "AirportCode": "CTG",
                    "AirportName": "Rafael Nunez",
                    "CityCode": "CTG"
                },
                {
                    "AirportCode": "CTL",
                    "AirportName": "Charleville",
                    "CityCode": "CTL"
                },
                {
                    "AirportCode": "CTM",
                    "AirportName": "Chetumal",
                    "CityCode": "CTM"
                },
                {
                    "AirportCode": "CTN",
                    "AirportName": "Cooktown",
                    "CityCode": "CTN"
                },
                {
                    "AirportCode": "CTS",
                    "AirportName": "Chitose",
                    "CityCode": "SPK"
                },
                {
                    "AirportCode": "CTU",
                    "AirportName": "Chengdu",
                    "CityCode": "CTU"
                },
                {
                    "AirportCode": "CUC",
                    "AirportName": "Cucuta",
                    "CityCode": "CUC"
                },
                {
                    "AirportCode": "CUE",
                    "AirportName": "Cuenca",
                    "CityCode": "CUE"
                },
                {
                    "AirportCode": "CUF",
                    "AirportName": "Levaldige",
                    "CityCode": "CUF"
                },
                {
                    "AirportCode": "CUL",
                    "AirportName": "Fedl De Bachigualato",
                    "CityCode": "CUL"
                },
                {
                    "AirportCode": "CUM",
                    "AirportName": "Cumana",
                    "CityCode": "CUM"
                },
                {
                    "AirportCode": "CUN",
                    "AirportName": "Cancun",
                    "CityCode": "CUN"
                },
                {
                    "AirportCode": "CUP",
                    "AirportName": "Carupano",
                    "CityCode": "CUP"
                },
                {
                    "AirportCode": "CUQ",
                    "AirportName": "Coen",
                    "CityCode": "CUQ"
                },
                {
                    "AirportCode": "CUR",
                    "AirportName": "Aeropuerto Hato",
                    "CityCode": "CUR"
                },
                {
                    "AirportCode": "CUT",
                    "AirportName": "Cutral",
                    "CityCode": "CUT"
                },
                {
                    "AirportCode": "CUU",
                    "AirportName": "Gen Fierro Villalobos",
                    "CityCode": "CUU"
                },
                {
                    "AirportCode": "CUY",
                    "AirportName": "Cue",
                    "CityCode": "CUY"
                },
                {
                    "AirportCode": "CUZ",
                    "AirportName": "Velazco Astete",
                    "CityCode": "CUZ"
                },
                {
                    "AirportCode": "CVF",
                    "AirportName": "Courchevel",
                    "CityCode": "CVF"
                },
                {
                    "AirportCode": "CVG",
                    "AirportName": "Cincinnati/Northern Kentucky",
                    "CityCode": "CVG"
                },
                {
                    "AirportCode": "CVL",
                    "AirportName": "Cape Vogel",
                    "CityCode": "CVL"
                },
                {
                    "AirportCode": "CVM",
                    "AirportName": "Ciudad Victoria",
                    "CityCode": "CVM"
                },
                {
                    "AirportCode": "CVN",
                    "AirportName": "Clovis Municipal",
                    "CityCode": "CVN"
                },
                {
                    "AirportCode": "CVQ",
                    "AirportName": "Carnarvon",
                    "CityCode": "CVQ"
                },
                {
                    "AirportCode": "CVR",
                    "AirportName": "Hughes",
                    "CityCode": "CVR"
                },
                {
                    "AirportCode": "CWA",
                    "AirportName": "Central Wisonsin",
                    "CityCode": "AUW"
                },
                {
                    "AirportCode": "CWB",
                    "AirportName": "Afonso Pena",
                    "CityCode": "CWB"
                },
                {
                    "AirportCode": "CWL",
                    "AirportName": "Cardiff",
                    "CityCode": "CWL"
                },
                {
                    "AirportCode": "CWT",
                    "AirportName": "Cowra",
                    "CityCode": "CWT"
                },
                {
                    "AirportCode": "CXA",
                    "AirportName": "Caicara De Oro",
                    "CityCode": "CXA"
                },
                {
                    "AirportCode": "CXB",
                    "AirportName": "Cox's Bazar",
                    "CityCode": "CXB"
                },
                {
                    "AirportCode": "CXH",
                    "AirportName": "Coal Harbour",
                    "CityCode": "YVR"
                },
                {
                    "AirportCode": "CXI",
                    "AirportName": "Christmas Island",
                    "CityCode": "CXI"
                },
                {
                    "AirportCode": "CXJ",
                    "AirportName": "Campo Dos Bugres",
                    "CityCode": "CXJ"
                },
                {
                    "AirportCode": "CXL",
                    "AirportName": "Calexico Internatioanl",
                    "CityCode": "CXL"
                },
                {
                    "AirportCode": "CXP",
                    "AirportName": "Tunggul Wulung",
                    "CityCode": "CXP"
                },
                {
                    "AirportCode": "CXT",
                    "AirportName": "Charters Towers",
                    "CityCode": "CXT"
                },
                {
                    "AirportCode": "CYB",
                    "AirportName": "Gerrard-Smith",
                    "CityCode": "CYB"
                },
                {
                    "AirportCode": "CYC",
                    "AirportName": "Caye Chapel",
                    "CityCode": "CYC"
                },
                {
                    "AirportCode": "CYG",
                    "AirportName": "Corryong",
                    "CityCode": "CYG"
                },
                {
                    "AirportCode": "CYR",
                    "AirportName": "Colonia",
                    "CityCode": "CYR"
                },
                {
                    "AirportCode": "CYS",
                    "AirportName": "Cheyenne",
                    "CityCode": "CYS"
                },
                {
                    "AirportCode": "CZE",
                    "AirportName": "Coro",
                    "CityCode": "CZE"
                },
                {
                    "AirportCode": "CZH",
                    "AirportName": "Corozal",
                    "CityCode": "CZH"
                },
                {
                    "AirportCode": "CZL",
                    "AirportName": "Ain El Bey",
                    "CityCode": "CZL"
                },
                {
                    "AirportCode": "CZM",
                    "AirportName": "Cozumel",
                    "CityCode": "CZM"
                },
                {
                    "AirportCode": "CZS",
                    "AirportName": "Campo Int'l",
                    "CityCode": "CZS"
                },
                {
                    "AirportCode": "CZU",
                    "AirportName": "Corozal",
                    "CityCode": "CZU"
                },
                {
                    "AirportCode": "CZX",
                    "AirportName": "Changzhou",
                    "CityCode": "CZX"
                },
                {
                    "AirportCode": "DAB",
                    "AirportName": "Daytona Beach Regional",
                    "CityCode": "DAB"
                },
                {
                    "AirportCode": "DAC",
                    "AirportName": "Zia Int'l",
                    "CityCode": "DAC"
                },
                {
                    "AirportCode": "DAD",
                    "AirportName": "Da Nang",
                    "CityCode": "DAD"
                },
                {
                    "AirportCode": "DAL",
                    "AirportName": "Love Field",
                    "CityCode": "DFW"
                },
                {
                    "AirportCode": "DAM",
                    "AirportName": "Damascus Int'l",
                    "CityCode": "DAM"
                },
                {
                    "AirportCode": "DAN",
                    "AirportName": "Danville Municipal",
                    "CityCode": "DAN"
                },
                {
                    "AirportCode": "DAR",
                    "AirportName": "Dar Es Salaam Int'l",
                    "CityCode": "DAR"
                },
                {
                    "AirportCode": "DAU",
                    "AirportName": "Daru",
                    "CityCode": "DAU"
                },
                {
                    "AirportCode": "DAV",
                    "AirportName": "Enrique Malek",
                    "CityCode": "DAV"
                },
                {
                    "AirportCode": "DAY",
                    "AirportName": "James Cox Dayton Int'l",
                    "CityCode": "DAY"
                },
                {
                    "AirportCode": "DBD",
                    "AirportName": "DHANBAD",
                    "CityCode": "DBD"
                },
                {
                    "AirportCode": "DBM",
                    "AirportName": "Debra Marcos",
                    "CityCode": "DBM"
                },
                {
                    "AirportCode": "DBO",
                    "AirportName": "Dubbo",
                    "CityCode": "DBO"
                },
                {
                    "AirportCode": "DBP",
                    "AirportName": "Debepare",
                    "CityCode": "DBP"
                },
                {
                    "AirportCode": "DBQ",
                    "AirportName": "Dubuque Municipal",
                    "CityCode": "DBQ"
                },
                {
                    "AirportCode": "DBT",
                    "AirportName": "Debra Tabor",
                    "CityCode": "DBT"
                },
                {
                    "AirportCode": "DBV",
                    "AirportName": "Dubrovnik",
                    "CityCode": "DBV"
                },
                {
                    "AirportCode": "DCA",
                    "AirportName": "R Reagan National",
                    "CityCode": "WAS"
                },
                {
                    "AirportCode": "DCF",
                    "AirportName": "Cane Field",
                    "CityCode": "DOM"
                },
                {
                    "AirportCode": "DDC",
                    "AirportName": "Dodge City Municipal",
                    "CityCode": "DDC"
                },
                {
                    "AirportCode": "DDI",
                    "AirportName": "Daydream Is",
                    "CityCode": "DDI"
                },
                {
                    "AirportCode": "DDM",
                    "AirportName": "Dodoima",
                    "CityCode": "DDM"
                },
                {
                    "AirportCode": "DDN",
                    "AirportName": "DELTA DOWNS",
                    "CityCode": "DDN"
                },
                {
                    "AirportCode": "DEB",
                    "AirportName": "Debrecen",
                    "CityCode": "DEB"
                },
                {
                    "AirportCode": "DEC",
                    "AirportName": "Decatur",
                    "CityCode": "DEC"
                },
                {
                    "AirportCode": "DED",
                    "AirportName": "Dehra Dun",
                    "CityCode": "DED"
                },
                {
                    "AirportCode": "DEH",
                    "AirportName": "DECORAH MNPL",
                    "CityCode": "DEH"
                },
                {
                    "AirportCode": "DEI",
                    "AirportName": "Denis Island",
                    "CityCode": "DEI"
                },
                {
                    "AirportCode": "DEL",
                    "AirportName": "Indira Gandhi Airport",
                    "CityCode": "DEL"
                },
                {
                    "AirportCode": "DEM",
                    "AirportName": "Dembidollo",
                    "CityCode": "DEM"
                },
                {
                    "AirportCode": "DEN",
                    "AirportName": "Denver Internationa",
                    "CityCode": "DEN"
                },
                {
                    "AirportCode": "DER",
                    "AirportName": "Derim",
                    "CityCode": "DER"
                },
                {
                    "AirportCode": "DES",
                    "AirportName": "Desroches",
                    "CityCode": "DES"
                },
                {
                    "AirportCode": "DET",
                    "AirportName": "Detroit City",
                    "CityCode": "DTT"
                },
                {
                    "AirportCode": "DEZ",
                    "AirportName": "Deirezzor",
                    "CityCode": "DEZ"
                },
                {
                    "AirportCode": "DFW",
                    "AirportName": "Ft Worth Int'l",
                    "CityCode": "DFW"
                },
                {
                    "AirportCode": "DGA",
                    "AirportName": "Dangriga",
                    "CityCode": "DGA"
                },
                {
                    "AirportCode": "DGE",
                    "AirportName": "Mudgee",
                    "CityCode": "DGE"
                },
                {
                    "AirportCode": "DGO",
                    "AirportName": "Guadalupe Victoria",
                    "CityCode": "DGO"
                },
                {
                    "AirportCode": "DGT",
                    "AirportName": "Dumaguete",
                    "CityCode": "DGT"
                },
                {
                    "AirportCode": "DGU",
                    "AirportName": "Dedougou",
                    "CityCode": "DGU"
                },
                {
                    "AirportCode": "DHA",
                    "AirportName": "Dhahran",
                    "CityCode": "DHA"
                },
                {
                    "AirportCode": "DHM",
                    "AirportName": "Gaggal",
                    "CityCode": "DHM"
                },
                {
                    "AirportCode": "DHN",
                    "AirportName": "Dothan",
                    "CityCode": "DHN"
                },
                {
                    "AirportCode": "DHT",
                    "AirportName": "Dalhart",
                    "CityCode": "DHT"
                },
                {
                    "AirportCode": "DIB",
                    "AirportName": "Mohanbari",
                    "CityCode": "DIB"
                },
                {
                    "AirportCode": "DIE",
                    "AirportName": "Antsiranana/Arrachart",
                    "CityCode": "DIE"
                },
                {
                    "AirportCode": "DIJ",
                    "AirportName": "Dijon",
                    "CityCode": "DIJ"
                },
                {
                    "AirportCode": "DIL",
                    "AirportName": "Comoro",
                    "CityCode": "DIL"
                },
                {
                    "AirportCode": "DIM",
                    "AirportName": "Dimbokro",
                    "CityCode": "DIM"
                },
                {
                    "AirportCode": "DIO",
                    "AirportName": "Diomede Island",
                    "CityCode": "DIO"
                },
                {
                    "AirportCode": "DIR",
                    "AirportName": "Aba Tenna D Yilma",
                    "CityCode": "DIR"
                },
                {
                    "AirportCode": "DIS",
                    "AirportName": "Loubomo",
                    "CityCode": "DIS"
                },
                {
                    "AirportCode": "DIU",
                    "AirportName": "DIU",
                    "CityCode": "DIU"
                },
                {
                    "AirportCode": "DIY",
                    "AirportName": "Diyarbakir",
                    "CityCode": "DIY"
                },
                {
                    "AirportCode": "DJB",
                    "AirportName": "Sultan Taha Syarifudn",
                    "CityCode": "DJB"
                },
                {
                    "AirportCode": "DJE",
                    "AirportName": "Melita",
                    "CityCode": "DJE"
                },
                {
                    "AirportCode": "DJG",
                    "AirportName": "Inedbirenne",
                    "CityCode": "DJG"
                },
                {
                    "AirportCode": "DJJ",
                    "AirportName": "Sentani",
                    "CityCode": "DJJ"
                },
                {
                    "AirportCode": "DJM",
                    "AirportName": "Djambala",
                    "CityCode": "DJM"
                },
                {
                    "AirportCode": "DJN",
                    "AirportName": "Delta Junction",
                    "CityCode": "DJN"
                },
                {
                    "AirportCode": "DJO",
                    "AirportName": "Daloa",
                    "CityCode": "DJO"
                },
                {
                    "AirportCode": "DKI",
                    "AirportName": "Dunk Island",
                    "CityCode": "DKI"
                },
                {
                    "AirportCode": "DKR",
                    "AirportName": "Yoff",
                    "CityCode": "DKR"
                },
                {
                    "AirportCode": "DLA",
                    "AirportName": "Douala",
                    "CityCode": "DLA"
                },
                {
                    "AirportCode": "DLC",
                    "AirportName": "Dalian",
                    "CityCode": "DLC"
                },
                {
                    "AirportCode": "DLE",
                    "AirportName": "Tavaux",
                    "CityCode": "DLE"
                },
                {
                    "AirportCode": "DLG",
                    "AirportName": "Dillingham Municipal",
                    "CityCode": "DLG"
                },
                {
                    "AirportCode": "DLH",
                    "AirportName": "Duluth Int'l",
                    "CityCode": "DLH"
                },
                {
                    "AirportCode": "DLI",
                    "AirportName": "LIENKHANG",
                    "CityCode": "DLI"
                },
                {
                    "AirportCode": "DLM",
                    "AirportName": "Dalaman",
                    "CityCode": "DLM"
                },
                {
                    "AirportCode": "DLO",
                    "AirportName": "Dolomi",
                    "CityCode": "DLO"
                },
                {
                    "AirportCode": "DLY",
                    "AirportName": "Dillons Bay",
                    "CityCode": "DLY"
                },
                {
                    "AirportCode": "DMB",
                    "AirportName": "Zhambyl",
                    "CityCode": "DMB"
                },
                {
                    "AirportCode": "DMD",
                    "AirportName": "Doomadgee",
                    "CityCode": "DMD"
                },
                {
                    "AirportCode": "DME",
                    "AirportName": "Domodedovo",
                    "CityCode": "MOW"
                },
                {
                    "AirportCode": "DMM",
                    "AirportName": "King Fahad Intl",
                    "CityCode": "DMM"
                },
                {
                    "AirportCode": "DMU",
                    "AirportName": "Dimapur",
                    "CityCode": "DMU"
                },
                {
                    "AirportCode": "DND",
                    "AirportName": "Dundee",
                    "CityCode": "DND"
                },
                {
                    "AirportCode": "DNH",
                    "AirportName": "Dunhuang",
                    "CityCode": "DNH"
                },
                {
                    "AirportCode": "DNK",
                    "AirportName": "Dnepropetrovsk",
                    "CityCode": "DNK"
                },
                {
                    "AirportCode": "DNL",
                    "AirportName": "Daniel Field",
                    "CityCode": "AGS"
                },
                {
                    "AirportCode": "DNQ",
                    "AirportName": "Deniliquin",
                    "CityCode": "DNQ"
                },
                {
                    "AirportCode": "DNR",
                    "AirportName": "Pleurtuit",
                    "CityCode": "DNR"
                },
                {
                    "AirportCode": "DNZ",
                    "AirportName": "Cardak",
                    "CityCode": "DNZ"
                },
                {
                    "AirportCode": "DOA",
                    "AirportName": "Doany",
                    "CityCode": "DOA"
                },
                {
                    "AirportCode": "DOD",
                    "AirportName": "Dodoma",
                    "CityCode": "DOD"
                },
                {
                    "AirportCode": "DOF",
                    "AirportName": "Dora Bay",
                    "CityCode": "DOF"
                },
                {
                    "AirportCode": "DOG",
                    "AirportName": "Dongola",
                    "CityCode": "DOG"
                },
                {
                    "AirportCode": "DOH",
                    "AirportName": "Doha",
                    "CityCode": "DOH"
                },
                {
                    "AirportCode": "DOK",
                    "AirportName": "Donetsk",
                    "CityCode": "DOK"
                },
                {
                    "AirportCode": "DOL",
                    "AirportName": "St Gatien",
                    "CityCode": "DOL"
                },
                {
                    "AirportCode": "DOM",
                    "AirportName": "Melville Hall",
                    "CityCode": "DOM"
                },
                {
                    "AirportCode": "DOR",
                    "AirportName": "Dori",
                    "CityCode": "DOR"
                },
                {
                    "AirportCode": "DOU",
                    "AirportName": "Dourados",
                    "CityCode": "DOU"
                },
                {
                    "AirportCode": "DPO",
                    "AirportName": "Devonport",
                    "CityCode": "DPO"
                },
                {
                    "AirportCode": "DPS",
                    "AirportName": "Ngurah Rai",
                    "CityCode": "DPS"
                },
                {
                    "AirportCode": "DRG",
                    "AirportName": "Deering",
                    "CityCode": "DRG"
                },
                {
                    "AirportCode": "DRO",
                    "AirportName": "La Plata",
                    "CityCode": "DRO"
                },
                {
                    "AirportCode": "DRS",
                    "AirportName": "Dresden",
                    "CityCode": "DRS"
                },
                {
                    "AirportCode": "DRW",
                    "AirportName": "Darwin",
                    "CityCode": "DRW"
                },
                {
                    "AirportCode": "DSA",
                    "AirportName": "Robin hood",
                    "CityCode": "DSA"
                },
                {
                    "AirportCode": "DSC",
                    "AirportName": "Dschang",
                    "CityCode": "DSC"
                },
                {
                    "AirportCode": "DSD",
                    "AirportName": "La Desirade",
                    "CityCode": "DSD"
                },
                {
                    "AirportCode": "DSE",
                    "AirportName": "Comobolcha",
                    "CityCode": "DSE"
                },
                {
                    "AirportCode": "DSM",
                    "AirportName": "Des Moines",
                    "CityCode": "DSM"
                },
                {
                    "AirportCode": "DTD",
                    "AirportName": "Datadawai",
                    "CityCode": "DTD"
                },
                {
                    "AirportCode": "DTM",
                    "AirportName": "Dortmund",
                    "CityCode": "DTM"
                },
                {
                    "AirportCode": "DTW",
                    "AirportName": "Wayne County",
                    "CityCode": "DTT"
                },
                {
                    "AirportCode": "DUB",
                    "AirportName": "Dublin",
                    "CityCode": "DUB"
                },
                {
                    "AirportCode": "DUD",
                    "AirportName": "Dunedin",
                    "CityCode": "DUD"
                },
                {
                    "AirportCode": "DUE",
                    "AirportName": "Dundo",
                    "CityCode": "DUE"
                },
                {
                    "AirportCode": "DUJ",
                    "AirportName": "Jefferson County",
                    "CityCode": "DUJ"
                },
                {
                    "AirportCode": "DUM",
                    "AirportName": "Pinang Kampai",
                    "CityCode": "DUM"
                },
                {
                    "AirportCode": "DUR",
                    "AirportName": "International",
                    "CityCode": "DUR"
                },
                {
                    "AirportCode": "DUS",
                    "AirportName": "Dusseldorf",
                    "CityCode": "DUS"
                },
                {
                    "AirportCode": "DVO",
                    "AirportName": "Mati",
                    "CityCode": "DVO"
                },
                {
                    "AirportCode": "DWA",
                    "AirportName": "Dwangwa",
                    "CityCode": "DWA"
                },
                {
                    "AirportCode": "DWB",
                    "AirportName": "Soalala",
                    "CityCode": "DWB"
                },
                {
                    "AirportCode": "DXB",
                    "AirportName": "Dubai",
                    "CityCode": "DXB"
                },
                {
                    "AirportCode": "DYA",
                    "AirportName": "Dysart",
                    "CityCode": "DYA"
                },
                {
                    "AirportCode": "DYU",
                    "AirportName": "Dushanbe",
                    "CityCode": "DYU"
                },
                {
                    "AirportCode": "DZA",
                    "AirportName": "Dzaoudzi",
                    "CityCode": "DZA"
                },
                {
                    "AirportCode": "EAA",
                    "AirportName": "Eagle",
                    "CityCode": "EAA"
                },
                {
                    "AirportCode": "EAE",
                    "AirportName": "Emae",
                    "CityCode": "EAE"
                },
                {
                    "AirportCode": "EAR",
                    "AirportName": "Kearney",
                    "CityCode": "EAR"
                },
                {
                    "AirportCode": "EAS",
                    "AirportName": "San Sebastian",
                    "CityCode": "EAS"
                },
                {
                    "AirportCode": "EAT",
                    "AirportName": "Pangborn Field",
                    "CityCode": "EAT"
                },
                {
                    "AirportCode": "EAU",
                    "AirportName": "Eau Claire",
                    "CityCode": "EAU"
                },
                {
                    "AirportCode": "EBB",
                    "AirportName": "Entebbe",
                    "CityCode": "EBB"
                },
                {
                    "AirportCode": "EBD",
                    "AirportName": "El Obeid",
                    "CityCode": "EBD"
                },
                {
                    "AirportCode": "EBG",
                    "AirportName": "El Bagre",
                    "CityCode": "EBG"
                },
                {
                    "AirportCode": "EBJ",
                    "AirportName": "Esbjerg",
                    "CityCode": "EBJ"
                },
                {
                    "AirportCode": "EBL",
                    "AirportName": "Erbil International",
                    "CityCode": "EBL"
                },
                {
                    "AirportCode": "EBU",
                    "AirportName": "Boutheon",
                    "CityCode": "EBU"
                },
                {
                    "AirportCode": "EBW",
                    "AirportName": "Ebolowa",
                    "CityCode": "EBW"
                },
                {
                    "AirportCode": "ECG",
                    "AirportName": "Elizabeth City",
                    "CityCode": "ECG"
                },
                {
                    "AirportCode": "ECN",
                    "AirportName": "Ercan",
                    "CityCode": "ECN"
                },
                {
                    "AirportCode": "EDA",
                    "AirportName": "Edna Bay",
                    "CityCode": "EDA"
                },
                {
                    "AirportCode": "EDB",
                    "AirportName": "Eldebba",
                    "CityCode": "EDB"
                },
                {
                    "AirportCode": "EDI",
                    "AirportName": "Edinburgh",
                    "CityCode": "EDI"
                },
                {
                    "AirportCode": "EDL",
                    "AirportName": "Eldoret",
                    "CityCode": "EDL"
                },
                {
                    "AirportCode": "EDR",
                    "AirportName": "Edward River",
                    "CityCode": "EDR"
                },
                {
                    "AirportCode": "EEK",
                    "AirportName": "Eek",
                    "CityCode": "EEK"
                },
                {
                    "AirportCode": "EFD",
                    "AirportName": "Ellington Field",
                    "CityCode": "HOU"
                },
                {
                    "AirportCode": "EFL",
                    "AirportName": "Argostolion",
                    "CityCode": "EFL"
                },
                {
                    "AirportCode": "EGC",
                    "AirportName": "Roumanieres",
                    "CityCode": "EGC"
                },
                {
                    "AirportCode": "EGE",
                    "AirportName": "Eagle County",
                    "CityCode": "EGE"
                },
                {
                    "AirportCode": "EGM",
                    "AirportName": "Sege",
                    "CityCode": "EGM"
                },
                {
                    "AirportCode": "EGN",
                    "AirportName": "Geneina",
                    "CityCode": "EGN"
                },
                {
                    "AirportCode": "EGS",
                    "AirportName": "Egilsstadir",
                    "CityCode": "EGS"
                },
                {
                    "AirportCode": "EGV",
                    "AirportName": "Eagle River",
                    "CityCode": "EGV"
                },
                {
                    "AirportCode": "EGX",
                    "AirportName": "Egegik",
                    "CityCode": "EGX"
                },
                {
                    "AirportCode": "EHL",
                    "AirportName": "El Bolson",
                    "CityCode": "EHL"
                },
                {
                    "AirportCode": "EIA",
                    "AirportName": "Popondetta",
                    "CityCode": "EIA"
                },
                {
                    "AirportCode": "EIN",
                    "AirportName": "Eindhoven",
                    "CityCode": "EIN"
                },
                {
                    "AirportCode": "EIS",
                    "AirportName": "Beef Island",
                    "CityCode": "EIS"
                },
                {
                    "AirportCode": "EJA",
                    "AirportName": "Variguies",
                    "CityCode": "EJA"
                },
                {
                    "AirportCode": "EKN",
                    "AirportName": "Elkins",
                    "CityCode": "EKN"
                },
                {
                    "AirportCode": "EKO",
                    "AirportName": "Elko",
                    "CityCode": "EKO"
                },
                {
                    "AirportCode": "ELB",
                    "AirportName": "San Bernardo",
                    "CityCode": "ELB"
                },
                {
                    "AirportCode": "ELC",
                    "AirportName": "Elcho Island",
                    "CityCode": "ELC"
                },
                {
                    "AirportCode": "ELF",
                    "AirportName": "El Fasher",
                    "CityCode": "ELF"
                },
                {
                    "AirportCode": "ELG",
                    "AirportName": "El Golea",
                    "CityCode": "ELG"
                },
                {
                    "AirportCode": "ELH",
                    "AirportName": "North Eleuthera Int'l",
                    "CityCode": "ELH"
                },
                {
                    "AirportCode": "ELI",
                    "AirportName": "Elim",
                    "CityCode": "ELI"
                },
                {
                    "AirportCode": "ELJ",
                    "AirportName": "El Recreo",
                    "CityCode": "ELJ"
                },
                {
                    "AirportCode": "ELL",
                    "AirportName": "Ellisras",
                    "CityCode": "ELL"
                },
                {
                    "AirportCode": "ELM",
                    "AirportName": "Elmira",
                    "CityCode": "ELM"
                },
                {
                    "AirportCode": "ELP",
                    "AirportName": "El Paso Int'l",
                    "CityCode": "ELP"
                },
                {
                    "AirportCode": "ELQ",
                    "AirportName": "GASSIM",
                    "CityCode": "ELQ"
                },
                {
                    "AirportCode": "ELS",
                    "AirportName": "East London",
                    "CityCode": "ELS"
                },
                {
                    "AirportCode": "ELT",
                    "AirportName": "Tour Sinai City",
                    "CityCode": "ELT"
                },
                {
                    "AirportCode": "ELU",
                    "AirportName": "Guermar",
                    "CityCode": "ELU"
                },
                {
                    "AirportCode": "ELY",
                    "AirportName": "Yelland",
                    "CityCode": "ELY"
                },
                {
                    "AirportCode": "EMA",
                    "AirportName": "East Midlands",
                    "CityCode": "NQT"
                },
                {
                    "AirportCode": "EMD",
                    "AirportName": "Emerald",
                    "CityCode": "EMD"
                },
                {
                    "AirportCode": "EME",
                    "AirportName": "Emden",
                    "CityCode": "EME"
                },
                {
                    "AirportCode": "EMK",
                    "AirportName": "Emmonak",
                    "CityCode": "EMK"
                },
                {
                    "AirportCode": "EMN",
                    "AirportName": "Nema",
                    "CityCode": "EMN"
                },
                {
                    "AirportCode": "EMO",
                    "AirportName": "Emo",
                    "CityCode": "EMO"
                },
                {
                    "AirportCode": "EMS",
                    "AirportName": "Embessa",
                    "CityCode": "EMS"
                },
                {
                    "AirportCode": "EMX",
                    "AirportName": "El Maiten",
                    "CityCode": "EMX"
                },
                {
                    "AirportCode": "ENA",
                    "AirportName": "Kenai",
                    "CityCode": "ENA"
                },
                {
                    "AirportCode": "ENE",
                    "AirportName": "Ende",
                    "CityCode": "ENE"
                },
                {
                    "AirportCode": "ENF",
                    "AirportName": "Enontekio",
                    "CityCode": "ENF"
                },
                {
                    "AirportCode": "ENS",
                    "AirportName": "Twente",
                    "CityCode": "ENS"
                },
                {
                    "AirportCode": "ENT",
                    "AirportName": "Enewetak Island",
                    "CityCode": "ENT"
                },
                {
                    "AirportCode": "ENU",
                    "AirportName": "Enugu",
                    "CityCode": "ENU"
                },
                {
                    "AirportCode": "EOI",
                    "AirportName": "Eday",
                    "CityCode": "EOI"
                },
                {
                    "AirportCode": "EPL",
                    "AirportName": "Mirecourt",
                    "CityCode": "EPL"
                },
                {
                    "AirportCode": "EPR",
                    "AirportName": "Esperance",
                    "CityCode": "EPR"
                },
                {
                    "AirportCode": "EQS",
                    "AirportName": "Esquel",
                    "CityCode": "EQS"
                },
                {
                    "AirportCode": "ERF",
                    "AirportName": "Erfurt",
                    "CityCode": "ERF"
                },
                {
                    "AirportCode": "ERH",
                    "AirportName": "Errachidia",
                    "CityCode": "ERH"
                },
                {
                    "AirportCode": "ERI",
                    "AirportName": "Erie Int'l",
                    "CityCode": "ERI"
                },
                {
                    "AirportCode": "ERN",
                    "AirportName": "EIRUNEPE",
                    "CityCode": "ERN"
                },
                {
                    "AirportCode": "ERZ",
                    "AirportName": "Erzurum",
                    "CityCode": "ERZ"
                },
                {
                    "AirportCode": "ESA",
                    "AirportName": "Esa'ala",
                    "CityCode": "ESA"
                },
                {
                    "AirportCode": "ESB",
                    "AirportName": "Esenboga",
                    "CityCode": "ANK"
                },
                {
                    "AirportCode": "ESC",
                    "AirportName": "Delta County",
                    "CityCode": "ESC"
                },
                {
                    "AirportCode": "ESD",
                    "AirportName": "Orcas Island",
                    "CityCode": "ESD"
                },
                {
                    "AirportCode": "ESF",
                    "AirportName": "Esler Field",
                    "CityCode": "AEX"
                },
                {
                    "AirportCode": "ESH",
                    "AirportName": "Shoreham",
                    "CityCode": "ESH"
                },
                {
                    "AirportCode": "ESM",
                    "AirportName": "Esmeraldas",
                    "CityCode": "ESM"
                },
                {
                    "AirportCode": "ESR",
                    "AirportName": "El Salvador",
                    "CityCode": "ESR"
                },
                {
                    "AirportCode": "ESS",
                    "AirportName": "Essen",
                    "CityCode": "ESS"
                },
                {
                    "AirportCode": "ETE",
                    "AirportName": "Genda Wuha",
                    "CityCode": "ETE"
                },
                {
                    "AirportCode": "ETH",
                    "AirportName": "Elat",
                    "CityCode": "ETH"
                },
                {
                    "AirportCode": "ETZ",
                    "AirportName": "Nancy Metz",
                    "CityCode": "ETZ"
                },
                {
                    "AirportCode": "EUA",
                    "AirportName": "Kaufana",
                    "CityCode": "EUA"
                },
                {
                    "AirportCode": "EUG",
                    "AirportName": "Eugene",
                    "CityCode": "EUG"
                },
                {
                    "AirportCode": "EUN",
                    "AirportName": "Hassan I",
                    "CityCode": "EUN"
                },
                {
                    "AirportCode": "EUX",
                    "AirportName": "F D Roosevelt",
                    "CityCode": "EUX"
                },
                {
                    "AirportCode": "EVE",
                    "AirportName": "Evenes",
                    "CityCode": "EVE"
                },
                {
                    "AirportCode": "EVG",
                    "AirportName": "Sveg",
                    "CityCode": "EVG"
                },
                {
                    "AirportCode": "EVN",
                    "AirportName": "Yerevan",
                    "CityCode": "EVN"
                },
                {
                    "AirportCode": "EVV",
                    "AirportName": "Dress Regional",
                    "CityCode": "EVV"
                },
                {
                    "AirportCode": "EWB",
                    "AirportName": "New Bedford",
                    "CityCode": "EWB"
                },
                {
                    "AirportCode": "EWI",
                    "AirportName": "Enarotali",
                    "CityCode": "EWI"
                },
                {
                    "AirportCode": "EWN",
                    "AirportName": "Simmons Nott",
                    "CityCode": "EWN"
                },
                {
                    "AirportCode": "EWO",
                    "AirportName": "Ewo",
                    "CityCode": "EWO"
                },
                {
                    "AirportCode": "EWR",
                    "AirportName": "Newark Int'l",
                    "CityCode": "NYC"
                },
                {
                    "AirportCode": "EXT",
                    "AirportName": "Exeter",
                    "CityCode": "EXT"
                },
                {
                    "AirportCode": "EYL",
                    "AirportName": "Yelimane",
                    "CityCode": "EYL"
                },
                {
                    "AirportCode": "EYP",
                    "AirportName": "El Yopal",
                    "CityCode": "EYP"
                },
                {
                    "AirportCode": "EYW",
                    "AirportName": "Key West Int'l",
                    "CityCode": "EYW"
                },
                {
                    "AirportCode": "EZE",
                    "AirportName": "Ministro Pistarini",
                    "CityCode": "BUE"
                },
                {
                    "AirportCode": "EZS",
                    "AirportName": "Elazig",
                    "CityCode": "EZS"
                },
                {
                    "AirportCode": "FAA",
                    "AirportName": "Faranah",
                    "CityCode": "FAA"
                },
                {
                    "AirportCode": "FAE",
                    "AirportName": "Vagar",
                    "CityCode": "FAE"
                },
                {
                    "AirportCode": "FAH",
                    "AirportName": "Farah",
                    "CityCode": "FAH"
                },
                {
                    "AirportCode": "FAI",
                    "AirportName": "Fairbanks Int'l",
                    "CityCode": "FAI"
                },
                {
                    "AirportCode": "FAJ",
                    "AirportName": "Fajardo",
                    "CityCode": "FAJ"
                },
                {
                    "AirportCode": "FAO",
                    "AirportName": "Faro",
                    "CityCode": "FAO"
                },
                {
                    "AirportCode": "FAR",
                    "AirportName": "Hector Field",
                    "CityCode": "FAR"
                },
                {
                    "AirportCode": "FAT",
                    "AirportName": "Fresno Airterminal",
                    "CityCode": "FAT"
                },
                {
                    "AirportCode": "FAV",
                    "AirportName": "Fakarava",
                    "CityCode": "FAV"
                },
                {
                    "AirportCode": "FAY",
                    "AirportName": "Fayetteville Municipal",
                    "CityCode": "FAY"
                },
                {
                    "AirportCode": "FBD",
                    "AirportName": "Faizabad",
                    "CityCode": "FBD"
                },
                {
                    "AirportCode": "FCA",
                    "AirportName": "Glacier National Park",
                    "CityCode": "FCA"
                },
                {
                    "AirportCode": "FCO",
                    "AirportName": "Fiumicino",
                    "CityCode": "ROM"
                },
                {
                    "AirportCode": "FDE",
                    "AirportName": "Bringeland",
                    "CityCode": "FDE"
                },
                {
                    "AirportCode": "FDF",
                    "AirportName": "Lamentin",
                    "CityCode": "FDF"
                },
                {
                    "AirportCode": "FDH",
                    "AirportName": "Friedrichshafen",
                    "CityCode": "FDH"
                },
                {
                    "AirportCode": "FDU",
                    "AirportName": "Bandundu",
                    "CityCode": "FDU"
                },
                {
                    "AirportCode": "FEG",
                    "AirportName": "Fergana",
                    "CityCode": "FEG"
                },
                {
                    "AirportCode": "FEJ",
                    "AirportName": "FEIJO",
                    "CityCode": "FEJ"
                },
                {
                    "AirportCode": "FEN",
                    "AirportName": "Fernando De Noron",
                    "CityCode": "FEN"
                },
                {
                    "AirportCode": "FER",
                    "AirportName": "Fergusons Gulf",
                    "CityCode": "FER"
                },
                {
                    "AirportCode": "FEZ",
                    "AirportName": "Sais",
                    "CityCode": "FEZ"
                },
                {
                    "AirportCode": "FGD",
                    "AirportName": "Fderik",
                    "CityCode": "FGD"
                },
                {
                    "AirportCode": "FGU",
                    "AirportName": "Fangatau",
                    "CityCode": "FGU"
                },
                {
                    "AirportCode": "FHU",
                    "AirportName": "Libby Aaf",
                    "CityCode": "FHU"
                },
                {
                    "AirportCode": "FHZ",
                    "AirportName": "Fakahina",
                    "CityCode": "FHZ"
                },
                {
                    "AirportCode": "FIC",
                    "AirportName": "Fire Cove",
                    "CityCode": "FIC"
                },
                {
                    "AirportCode": "FID",
                    "AirportName": "Elizabeth Field",
                    "CityCode": "FID"
                },
                {
                    "AirportCode": "FIE",
                    "AirportName": "Fair Isle",
                    "CityCode": "FIE"
                },
                {
                    "AirportCode": "FIG",
                    "AirportName": "Fria",
                    "CityCode": "FIG"
                },
                {
                    "AirportCode": "FIH",
                    "AirportName": "N Djili",
                    "CityCode": "FIH"
                },
                {
                    "AirportCode": "FIN",
                    "AirportName": "Finschhafen",
                    "CityCode": "FIN"
                },
                {
                    "AirportCode": "FJR",
                    "AirportName": "Fujairah Int'l",
                    "CityCode": "FJR"
                },
                {
                    "AirportCode": "FKB",
                    "AirportName": "Baden airpark",
                    "CityCode": "FKB"
                },
                {
                    "AirportCode": "FKI",
                    "AirportName": "Kisangani",
                    "CityCode": "FKI"
                },
                {
                    "AirportCode": "FKL",
                    "AirportName": "Chess Lamber",
                    "CityCode": "FKL"
                },
                {
                    "AirportCode": "FKQ",
                    "AirportName": "Fak Fak",
                    "CityCode": "FKQ"
                },
                {
                    "AirportCode": "FLA",
                    "AirportName": "Capitolio",
                    "CityCode": "FLA"
                },
                {
                    "AirportCode": "FLG",
                    "AirportName": "Pulliam Field",
                    "CityCode": "FLG"
                },
                {
                    "AirportCode": "FLL",
                    "AirportName": "Fll Int'l",
                    "CityCode": "FLL"
                },
                {
                    "AirportCode": "FLN",
                    "AirportName": "Hercilio Luz",
                    "CityCode": "FLN"
                },
                {
                    "AirportCode": "FLO",
                    "AirportName": "Florence",
                    "CityCode": "FLO"
                },
                {
                    "AirportCode": "FLR",
                    "AirportName": "Peretola",
                    "CityCode": "FLR"
                },
                {
                    "AirportCode": "FLS",
                    "AirportName": "Flinders Island",
                    "CityCode": "FLS"
                },
                {
                    "AirportCode": "FLT",
                    "AirportName": "Flat",
                    "CityCode": "FLT"
                },
                {
                    "AirportCode": "FLW",
                    "AirportName": "Flores Island",
                    "CityCode": "FLW"
                },
                {
                    "AirportCode": "FMA",
                    "AirportName": "El Pucu",
                    "CityCode": "FMA"
                },
                {
                    "AirportCode": "FMI",
                    "AirportName": "Kalemie",
                    "CityCode": "FMI"
                },
                {
                    "AirportCode": "FMM",
                    "AirportName": "Allgaeu",
                    "CityCode": "FMM"
                },
                {
                    "AirportCode": "FMN",
                    "AirportName": "Farmington Municipal",
                    "CityCode": "FMN"
                },
                {
                    "AirportCode": "FMO",
                    "AirportName": "Muenster",
                    "CityCode": "FMO"
                },
                {
                    "AirportCode": "FMY",
                    "AirportName": "Fort Myers Page Field",
                    "CityCode": "FMY"
                },
                {
                    "AirportCode": "FNA",
                    "AirportName": "Lungi Int'l",
                    "CityCode": "FNA"
                },
                {
                    "AirportCode": "FNC",
                    "AirportName": "Funchal",
                    "CityCode": "FNC"
                },
                {
                    "AirportCode": "FNG",
                    "AirportName": "Fada Ngourma",
                    "CityCode": "FNG"
                },
                {
                    "AirportCode": "FNI",
                    "AirportName": "Garons",
                    "CityCode": "FNI"
                },
                {
                    "AirportCode": "FNJ",
                    "AirportName": "Sunan",
                    "CityCode": "FNJ"
                },
                {
                    "AirportCode": "FNL",
                    "AirportName": "Fort Collins Love",
                    "CityCode": "FNL"
                },
                {
                    "AirportCode": "FNT",
                    "AirportName": "Bishop",
                    "CityCode": "FNT"
                },
                {
                    "AirportCode": "FOC",
                    "AirportName": "Fuzhou",
                    "CityCode": "FOC"
                },
                {
                    "AirportCode": "FOD",
                    "AirportName": "Fort Dodge",
                    "CityCode": "FOD"
                },
                {
                    "AirportCode": "FOM",
                    "AirportName": "Foumban",
                    "CityCode": "FOM"
                },
                {
                    "AirportCode": "FOO",
                    "AirportName": "Numfoor",
                    "CityCode": "FOO"
                },
                {
                    "AirportCode": "FOR",
                    "AirportName": "Pinto Martins",
                    "CityCode": "FOR"
                },
                {
                    "AirportCode": "FOU",
                    "AirportName": "Fougamou",
                    "CityCode": "FOU"
                },
                {
                    "AirportCode": "FPO",
                    "AirportName": "Freeport Int'l",
                    "CityCode": "FPO"
                },
                {
                    "AirportCode": "FPR",
                    "AirportName": "St Lucie County",
                    "CityCode": "FPR"
                },
                {
                    "AirportCode": "FRA",
                    "AirportName": "Frankfurt Int'l",
                    "CityCode": "FRA"
                },
                {
                    "AirportCode": "FRB",
                    "AirportName": "Forbes",
                    "CityCode": "FRB"
                },
                {
                    "AirportCode": "FRC",
                    "AirportName": "Franca",
                    "CityCode": "FRC"
                },
                {
                    "AirportCode": "FRD",
                    "AirportName": "Friday Harbor",
                    "CityCode": "FRD"
                },
                {
                    "AirportCode": "FRE",
                    "AirportName": "Fera Island",
                    "CityCode": "FRE"
                },
                {
                    "AirportCode": "FRG",
                    "AirportName": "Republic Field",
                    "CityCode": "FRG"
                },
                {
                    "AirportCode": "FRL",
                    "AirportName": "Luigi Ridolfi",
                    "CityCode": "FRL"
                },
                {
                    "AirportCode": "FRM",
                    "AirportName": "Fairmont",
                    "CityCode": "FRM"
                },
                {
                    "AirportCode": "FRO",
                    "AirportName": "Flora",
                    "CityCode": "FRO"
                },
                {
                    "AirportCode": "FRP",
                    "AirportName": "Fresh Water Bay",
                    "CityCode": "FRP"
                },
                {
                    "AirportCode": "FRS",
                    "AirportName": "Santa Elena",
                    "CityCode": "FRS"
                },
                {
                    "AirportCode": "FRU",
                    "AirportName": "Bishkek",
                    "CityCode": "FRU"
                },
                {
                    "AirportCode": "FRW",
                    "AirportName": "Francistown",
                    "CityCode": "FRW"
                },
                {
                    "AirportCode": "FSC",
                    "AirportName": "Sud Corse",
                    "CityCode": "FSC"
                },
                {
                    "AirportCode": "FSD",
                    "AirportName": "Sioux Falls Regional",
                    "CityCode": "FSD"
                },
                {
                    "AirportCode": "FSM",
                    "AirportName": "Fort Smith Municipal",
                    "CityCode": "FSM"
                },
                {
                    "AirportCode": "FSP",
                    "AirportName": "St Pierre",
                    "CityCode": "FSP"
                },
                {
                    "AirportCode": "FTA",
                    "AirportName": "Futuna",
                    "CityCode": "FTA"
                },
                {
                    "AirportCode": "FTU",
                    "AirportName": "Marillac",
                    "CityCode": "FTU"
                },
                {
                    "AirportCode": "FTX",
                    "AirportName": "Owando",
                    "CityCode": "FTX"
                },
                {
                    "AirportCode": "FUE",
                    "AirportName": "Fuerteventura",
                    "CityCode": "FUE"
                },
                {
                    "AirportCode": "FUJ",
                    "AirportName": "Fukue",
                    "CityCode": "FUJ"
                },
                {
                    "AirportCode": "FUK",
                    "AirportName": "Fukuoka",
                    "CityCode": "FUK"
                },
                {
                    "AirportCode": "FUL",
                    "AirportName": "Fullerton Municipal",
                    "CityCode": "FUL"
                },
                {
                    "AirportCode": "FUN",
                    "AirportName": "Funafuti Atol Int'l",
                    "CityCode": "FUN"
                },
                {
                    "AirportCode": "FUT",
                    "AirportName": "Futuna Island",
                    "CityCode": "FUT"
                },
                {
                    "AirportCode": "FWA",
                    "AirportName": "Fort Wayne Municipal",
                    "CityCode": "FWA"
                },
                {
                    "AirportCode": "FXO",
                    "AirportName": "Cuamba",
                    "CityCode": "FXO"
                },
                {
                    "AirportCode": "GAD",
                    "AirportName": "Gadsden Municipal",
                    "CityCode": "GAD"
                },
                {
                    "AirportCode": "GAJ",
                    "AirportName": "Junmachi",
                    "CityCode": "GAJ"
                },
                {
                    "AirportCode": "GAL",
                    "AirportName": "Galena",
                    "CityCode": "GAL"
                },
                {
                    "AirportCode": "GAM",
                    "AirportName": "Gambell",
                    "CityCode": "GAM"
                },
                {
                    "AirportCode": "GAO",
                    "AirportName": "Los Canos",
                    "CityCode": "GAO"
                },
                {
                    "AirportCode": "GAQ",
                    "AirportName": "Gao",
                    "CityCode": "GAQ"
                },
                {
                    "AirportCode": "GAS",
                    "AirportName": "Garissa",
                    "CityCode": "GAS"
                },
                {
                    "AirportCode": "GAU",
                    "AirportName": "Borjhar",
                    "CityCode": "GAU"
                },
                {
                    "AirportCode": "GAX",
                    "AirportName": "Gamba",
                    "CityCode": "GAX"
                },
                {
                    "AirportCode": "GAY",
                    "AirportName": "Gaya",
                    "CityCode": "GAY"
                },
                {
                    "AirportCode": "GBC",
                    "AirportName": "Gasuke",
                    "CityCode": "GBC"
                },
                {
                    "AirportCode": "GBD",
                    "AirportName": "Great Bend",
                    "CityCode": "GBD"
                },
                {
                    "AirportCode": "GBE",
                    "AirportName": "Sir Seretse Khama Int'l",
                    "CityCode": "GBE"
                },
                {
                    "AirportCode": "GBJ",
                    "AirportName": "Les Bases",
                    "CityCode": "GBJ"
                },
                {
                    "AirportCode": "GBK",
                    "AirportName": "Gbangbatok",
                    "CityCode": "GBK"
                },
                {
                    "AirportCode": "GCA",
                    "AirportName": "Guacamaya",
                    "CityCode": "GCA"
                },
                {
                    "AirportCode": "GCC",
                    "AirportName": "Campbell County",
                    "CityCode": "GCC"
                },
                {
                    "AirportCode": "GCI",
                    "AirportName": "Guernsey",
                    "CityCode": "GCI"
                },
                {
                    "AirportCode": "GCJ",
                    "AirportName": "Crand Central",
                    "CityCode": "JNB"
                },
                {
                    "AirportCode": "GCK",
                    "AirportName": "Garden City Municipal",
                    "CityCode": "GCK"
                },
                {
                    "AirportCode": "GCM",
                    "AirportName": "Owen Roberts Int'l",
                    "CityCode": "GCM"
                },
                {
                    "AirportCode": "GCN",
                    "AirportName": "Grand Canyon National Park",
                    "CityCode": "GCN"
                },
                {
                    "AirportCode": "GDI",
                    "AirportName": "Gordil",
                    "CityCode": "GDI"
                },
                {
                    "AirportCode": "GDL",
                    "AirportName": "Miguel Hidal",
                    "CityCode": "GDL"
                },
                {
                    "AirportCode": "GDN",
                    "AirportName": "Rebiechowo",
                    "CityCode": "GDN"
                },
                {
                    "AirportCode": "GDQ",
                    "AirportName": "Gondar",
                    "CityCode": "GDQ"
                },
                {
                    "AirportCode": "GDT",
                    "AirportName": "Grand Turk Is",
                    "CityCode": "GDT"
                },
                {
                    "AirportCode": "GDV",
                    "AirportName": "Dawson Community",
                    "CityCode": "GDV"
                },
                {
                    "AirportCode": "GDX",
                    "AirportName": "Magadan",
                    "CityCode": "GDX"
                },
                {
                    "AirportCode": "GEA",
                    "AirportName": "Magenta",
                    "CityCode": "NOU"
                },
                {
                    "AirportCode": "GEB",
                    "AirportName": "Gebe",
                    "CityCode": "GEB"
                },
                {
                    "AirportCode": "GEC",
                    "AirportName": "Gecitkale",
                    "CityCode": "GEC"
                },
                {
                    "AirportCode": "GEG",
                    "AirportName": "Spokane Int'l",
                    "CityCode": "GEG"
                },
                {
                    "AirportCode": "GEL",
                    "AirportName": "Sepe Tiaraju",
                    "CityCode": "GEL"
                },
                {
                    "AirportCode": "GEO",
                    "AirportName": "Cheddi Jagan Int",
                    "CityCode": "GEO"
                },
                {
                    "AirportCode": "GER",
                    "AirportName": "Rafael Cabrera",
                    "CityCode": "GER"
                },
                {
                    "AirportCode": "GET",
                    "AirportName": "Geraldton",
                    "CityCode": "GET"
                },
                {
                    "AirportCode": "GEV",
                    "AirportName": "Gallivare",
                    "CityCode": "GEV"
                },
                {
                    "AirportCode": "GEW",
                    "AirportName": "Gewoya",
                    "CityCode": "GEW"
                },
                {
                    "AirportCode": "GEY",
                    "AirportName": "South Big Horn County",
                    "CityCode": "GEY"
                },
                {
                    "AirportCode": "GFF",
                    "AirportName": "Griffith",
                    "CityCode": "GFF"
                },
                {
                    "AirportCode": "GFK",
                    "AirportName": "Grand Forks",
                    "CityCode": "GFK"
                },
                {
                    "AirportCode": "GFN",
                    "AirportName": "Grafton",
                    "CityCode": "GFN"
                },
                {
                    "AirportCode": "GFY",
                    "AirportName": "Grootfontein",
                    "CityCode": "GFY"
                },
                {
                    "AirportCode": "GGG",
                    "AirportName": "Gregg County",
                    "CityCode": "GGG"
                },
                {
                    "AirportCode": "GGN",
                    "AirportName": "Gagnoa",
                    "CityCode": "GGN"
                },
                {
                    "AirportCode": "GGO",
                    "AirportName": "Guiglo",
                    "CityCode": "GGO"
                },
                {
                    "AirportCode": "GGR",
                    "AirportName": "Garoe",
                    "CityCode": "GGR"
                },
                {
                    "AirportCode": "GGS",
                    "AirportName": "Gdor  Gregores",
                    "CityCode": "GGS"
                },
                {
                    "AirportCode": "GGT",
                    "AirportName": "George Town",
                    "CityCode": "GGT"
                },
                {
                    "AirportCode": "GGW",
                    "AirportName": "Glasgow",
                    "CityCode": "GGW"
                },
                {
                    "AirportCode": "GHA",
                    "AirportName": "Noumerate",
                    "CityCode": "GHA"
                },
                {
                    "AirportCode": "GHB",
                    "AirportName": "Governors Harbour",
                    "CityCode": "GHB"
                },
                {
                    "AirportCode": "GHC",
                    "AirportName": "Great Harbour",
                    "CityCode": "GHC"
                },
                {
                    "AirportCode": "GHT",
                    "AirportName": "Ghat",
                    "CityCode": "GHT"
                },
                {
                    "AirportCode": "GIB",
                    "AirportName": "North Front",
                    "CityCode": "GIB"
                },
                {
                    "AirportCode": "GIC",
                    "AirportName": "Boigu Island",
                    "CityCode": "GIC"
                },
                {
                    "AirportCode": "GID",
                    "AirportName": "Gitega",
                    "CityCode": "GID"
                },
                {
                    "AirportCode": "GIG",
                    "AirportName": "Rio De Janeiro Int'l",
                    "CityCode": "RIO"
                },
                {
                    "AirportCode": "GII",
                    "AirportName": "Siguiri",
                    "CityCode": "GII"
                },
                {
                    "AirportCode": "GIS",
                    "AirportName": "Gisborne",
                    "CityCode": "GIS"
                },
                {
                    "AirportCode": "GIZ",
                    "AirportName": "JAZAN",
                    "CityCode": "GIZ"
                },
                {
                    "AirportCode": "GJA",
                    "AirportName": "Guanaja",
                    "CityCode": "GJA"
                },
                {
                    "AirportCode": "GJL",
                    "AirportName": "Jijel",
                    "CityCode": "GJL"
                },
                {
                    "AirportCode": "GJT",
                    "AirportName": "Walker Field",
                    "CityCode": "GJT"
                },
                {
                    "AirportCode": "GKA",
                    "AirportName": "Goroka",
                    "CityCode": "GKA"
                },
                {
                    "AirportCode": "GKL",
                    "AirportName": "Great Keppel Island",
                    "CityCode": "GKL"
                },
                {
                    "AirportCode": "GLA",
                    "AirportName": "Glasgow int'l",
                    "CityCode": "GLA"
                },
                {
                    "AirportCode": "GLD",
                    "AirportName": "Renner Field",
                    "CityCode": "GLD"
                },
                {
                    "AirportCode": "GLF",
                    "AirportName": "Golfito",
                    "CityCode": "GLF"
                },
                {
                    "AirportCode": "GLH",
                    "AirportName": "Greenville",
                    "CityCode": "GLH"
                },
                {
                    "AirportCode": "GLI",
                    "AirportName": "Glen Innes",
                    "CityCode": "GLI"
                },
                {
                    "AirportCode": "GLK",
                    "AirportName": "Galcaio",
                    "CityCode": "GLK"
                },
                {
                    "AirportCode": "GLO",
                    "AirportName": "Gloucester",
                    "CityCode": "GLO"
                },
                {
                    "AirportCode": "GLS",
                    "AirportName": "Scholes Field",
                    "CityCode": "GLS"
                },
                {
                    "AirportCode": "GLT",
                    "AirportName": "Gladstone",
                    "CityCode": "GLT"
                },
                {
                    "AirportCode": "GLV",
                    "AirportName": "Golovin",
                    "CityCode": "GLV"
                },
                {
                    "AirportCode": "GLX",
                    "AirportName": "Galela",
                    "CityCode": "GLX"
                },
                {
                    "AirportCode": "GMA",
                    "AirportName": "Gemena",
                    "CityCode": "GMA"
                },
                {
                    "AirportCode": "GMB",
                    "AirportName": "Gambela",
                    "CityCode": "GMB"
                },
                {
                    "AirportCode": "GME",
                    "AirportName": "Gomel",
                    "CityCode": "GME"
                },
                {
                    "AirportCode": "GMM",
                    "AirportName": "Gamboma",
                    "CityCode": "GMM"
                },
                {
                    "AirportCode": "GMP",
                    "AirportName": "Gimpo International",
                    "CityCode": "SEL"
                },
                {
                    "AirportCode": "GMR",
                    "AirportName": "Gambier Island",
                    "CityCode": "GMR"
                },
                {
                    "AirportCode": "GNB",
                    "AirportName": "Saint Geoirs",
                    "CityCode": "GNB"
                },
                {
                    "AirportCode": "GND",
                    "AirportName": "Point Saline Int'l",
                    "CityCode": "GND"
                },
                {
                    "AirportCode": "GNI",
                    "AirportName": "Green Island",
                    "CityCode": "GNI"
                },
                {
                    "AirportCode": "GNM",
                    "AirportName": "Guanambi",
                    "CityCode": "GNM"
                },
                {
                    "AirportCode": "GNN",
                    "AirportName": "Ghinnir",
                    "CityCode": "GNN"
                },
                {
                    "AirportCode": "GNR",
                    "AirportName": "General Roca",
                    "CityCode": "GNR"
                },
                {
                    "AirportCode": "GNS",
                    "AirportName": "Gunungsitoli",
                    "CityCode": "GNS"
                },
                {
                    "AirportCode": "GNU",
                    "AirportName": "Goodnews Mumtrak",
                    "CityCode": "GNU"
                },
                {
                    "AirportCode": "GNV",
                    "AirportName": "J R Alison Municipal",
                    "CityCode": "GNV"
                },
                {
                    "AirportCode": "GNZ",
                    "AirportName": "Ghanzi",
                    "CityCode": "GNZ"
                },
                {
                    "AirportCode": "GOA",
                    "AirportName": "Cristoforo Colombo",
                    "CityCode": "GOA"
                },
                {
                    "AirportCode": "GOB",
                    "AirportName": "Goba",
                    "CityCode": "GOB"
                },
                {
                    "AirportCode": "GOC",
                    "AirportName": "Gora",
                    "CityCode": "GOC"
                },
                {
                    "AirportCode": "GOH",
                    "AirportName": "Nuuk",
                    "CityCode": "GOH"
                },
                {
                    "AirportCode": "GOI",
                    "AirportName": "Dabolim",
                    "CityCode": "GOI"
                },
                {
                    "AirportCode": "GOJ",
                    "AirportName": "Nizhniy Novgorod",
                    "CityCode": "GOJ"
                },
                {
                    "AirportCode": "GOM",
                    "AirportName": "Goma",
                    "CityCode": "GOM"
                },
                {
                    "AirportCode": "GON",
                    "AirportName": "Groton-New London",
                    "CityCode": "GON"
                },
                {
                    "AirportCode": "GOP",
                    "AirportName": "Gorakhpur",
                    "CityCode": "GOP"
                },
                {
                    "AirportCode": "GOR",
                    "AirportName": "Gore",
                    "CityCode": "GOR"
                },
                {
                    "AirportCode": "GOT",
                    "AirportName": "Landvetter",
                    "CityCode": "GOT"
                },
                {
                    "AirportCode": "GOU",
                    "AirportName": "Garoua",
                    "CityCode": "GOU"
                },
                {
                    "AirportCode": "GOV",
                    "AirportName": "Nhulunbuy",
                    "CityCode": "GOV"
                },
                {
                    "AirportCode": "GOZ",
                    "AirportName": "Gorna Orechovitsa",
                    "CityCode": "GOZ"
                },
                {
                    "AirportCode": "GPA",
                    "AirportName": "Araxos",
                    "CityCode": "GPA"
                },
                {
                    "AirportCode": "GPI",
                    "AirportName": "Guapi",
                    "CityCode": "GPI"
                },
                {
                    "AirportCode": "GPN",
                    "AirportName": "Garden Point",
                    "CityCode": "GPN"
                },
                {
                    "AirportCode": "GPS",
                    "AirportName": "Baltra",
                    "CityCode": "GPS"
                },
                {
                    "AirportCode": "GPT",
                    "AirportName": "Biloxi Regional",
                    "CityCode": "GPT"
                },
                {
                    "AirportCode": "GPZ",
                    "AirportName": "Grand Rapids",
                    "CityCode": "GPZ"
                },
                {
                    "AirportCode": "GRB",
                    "AirportName": "Austin-Straubel Field",
                    "CityCode": "GRB"
                },
                {
                    "AirportCode": "GRG",
                    "AirportName": "Gardez",
                    "CityCode": "GRG"
                },
                {
                    "AirportCode": "GRI",
                    "AirportName": "Grand Island",
                    "CityCode": "GRI"
                },
                {
                    "AirportCode": "GRJ",
                    "AirportName": "George",
                    "CityCode": "GRJ"
                },
                {
                    "AirportCode": "GRO",
                    "AirportName": "Costa Brava",
                    "CityCode": "GRO"
                },
                {
                    "AirportCode": "GRP",
                    "AirportName": "Gurupi",
                    "CityCode": "GRP"
                },
                {
                    "AirportCode": "GRQ",
                    "AirportName": "Eelde",
                    "CityCode": "GRQ"
                },
                {
                    "AirportCode": "GRR",
                    "AirportName": "Kent County Int'l",
                    "CityCode": "GRR"
                },
                {
                    "AirportCode": "GRU",
                    "AirportName": "Guarulhos Int'l",
                    "CityCode": "SAO"
                },
                {
                    "AirportCode": "GRV",
                    "AirportName": "Groznyj",
                    "CityCode": "GRV"
                },
                {
                    "AirportCode": "GRW",
                    "AirportName": "Graciosa Island",
                    "CityCode": "GRW"
                },
                {
                    "AirportCode": "GRX",
                    "AirportName": "Granada",
                    "CityCode": "GRX"
                },
                {
                    "AirportCode": "GRY",
                    "AirportName": "Grimsey",
                    "CityCode": "GRY"
                },
                {
                    "AirportCode": "GRZ",
                    "AirportName": "Thalerhof",
                    "CityCode": "GRZ"
                },
                {
                    "AirportCode": "GSA",
                    "AirportName": "Long Pasia",
                    "CityCode": "GSA"
                },
                {
                    "AirportCode": "GSE",
                    "AirportName": "Saeve",
                    "CityCode": "GOT"
                },
                {
                    "AirportCode": "GSO",
                    "AirportName": "Greensboro",
                    "CityCode": "GSO"
                },
                {
                    "AirportCode": "GSP",
                    "AirportName": "Greenville-Spartanbur",
                    "CityCode": "GSP"
                },
                {
                    "AirportCode": "GTE",
                    "AirportName": "Alyangula",
                    "CityCode": "GTE"
                },
                {
                    "AirportCode": "GTF",
                    "AirportName": "Great Fall Int'ls",
                    "CityCode": "GTF"
                },
                {
                    "AirportCode": "GTN",
                    "AirportName": "Glentanner",
                    "CityCode": "MON"
                },
                {
                    "AirportCode": "GTO",
                    "AirportName": "Tolotio",
                    "CityCode": "GTO"
                },
                {
                    "AirportCode": "GTR",
                    "AirportName": "Golden Triangle Regional",
                    "CityCode": "UBS"
                },
                {
                    "AirportCode": "GUA",
                    "AirportName": "La Aurora",
                    "CityCode": "GUA"
                },
                {
                    "AirportCode": "GUC",
                    "AirportName": "Gunnison",
                    "CityCode": "GUC"
                },
                {
                    "AirportCode": "GUD",
                    "AirportName": "Goundam",
                    "CityCode": "GUD"
                },
                {
                    "AirportCode": "GUH",
                    "AirportName": "Gunnedah",
                    "CityCode": "GUH"
                },
                {
                    "AirportCode": "GUI",
                    "AirportName": "Guiria",
                    "CityCode": "GUI"
                },
                {
                    "AirportCode": "GUM",
                    "AirportName": "A.B Won Pat Intl",
                    "CityCode": "GUM"
                },
                {
                    "AirportCode": "GUP",
                    "AirportName": "Senator Clark",
                    "CityCode": "GUP"
                },
                {
                    "AirportCode": "GUQ",
                    "AirportName": "Guanare",
                    "CityCode": "GUQ"
                },
                {
                    "AirportCode": "GUR",
                    "AirportName": "Gurney",
                    "CityCode": "GUR"
                },
                {
                    "AirportCode": "GUV",
                    "AirportName": "Mougulu",
                    "CityCode": "GUV"
                },
                {
                    "AirportCode": "GUW",
                    "AirportName": "Atyrau",
                    "CityCode": "GUW"
                },
                {
                    "AirportCode": "GVA",
                    "AirportName": "Geneva",
                    "CityCode": "GVA"
                },
                {
                    "AirportCode": "GVI",
                    "AirportName": "Green River",
                    "CityCode": "GVI"
                },
                {
                    "AirportCode": "GVR",
                    "AirportName": "Governador Valada",
                    "CityCode": "GVR"
                },
                {
                    "AirportCode": "GVX",
                    "AirportName": "Sandviien",
                    "CityCode": "GVX"
                },
                {
                    "AirportCode": "GWE",
                    "AirportName": "Gweru",
                    "CityCode": "GWE"
                },
                {
                    "AirportCode": "GWL",
                    "AirportName": "Gwalior",
                    "CityCode": "GWL"
                },
                {
                    "AirportCode": "GWT",
                    "AirportName": "Westerland",
                    "CityCode": "GWT"
                },
                {
                    "AirportCode": "GWY",
                    "AirportName": "Galway",
                    "CityCode": "GWY"
                },
                {
                    "AirportCode": "GXF",
                    "AirportName": "Seiyun",
                    "CityCode": "GXF"
                },
                {
                    "AirportCode": "GXG",
                    "AirportName": "Negage",
                    "CityCode": "GXG"
                },
                {
                    "AirportCode": "GXQ",
                    "AirportName": "Coyhaique",
                    "CityCode": "GXQ"
                },
                {
                    "AirportCode": "GXX",
                    "AirportName": "Yagoua",
                    "CityCode": "GXX"
                },
                {
                    "AirportCode": "GYA",
                    "AirportName": "Guayaramerin",
                    "CityCode": "GYA"
                },
                {
                    "AirportCode": "GYD",
                    "AirportName": "HEYDAR ALIYEV INTL ARPT",
                    "CityCode": "GYD"
                },
                {
                    "AirportCode": "GYE",
                    "AirportName": "Guayaquil",
                    "CityCode": "GYE"
                },
                {
                    "AirportCode": "GYI",
                    "AirportName": "Gisenyi",
                    "CityCode": "GYI"
                },
                {
                    "AirportCode": "GYM",
                    "AirportName": "Gen Jose M Yanez",
                    "CityCode": "GYM"
                },
                {
                    "AirportCode": "GYN",
                    "AirportName": "Santa Genoveva",
                    "CityCode": "GYN"
                },
                {
                    "AirportCode": "GYR",
                    "AirportName": "Litchfield",
                    "CityCode": "GYR"
                },
                {
                    "AirportCode": "GZO",
                    "AirportName": "Gizo",
                    "CityCode": "GZO"
                },
                {
                    "AirportCode": "GZP",
                    "AirportName": "Gazipasa",
                    "CityCode": "GZP"
                },
                {
                    "AirportCode": "GZT",
                    "AirportName": "Gaziantep",
                    "CityCode": "GZT"
                },
                {
                    "AirportCode": "HAA",
                    "AirportName": "Hasvik",
                    "CityCode": "HAA"
                },
                {
                    "AirportCode": "HAC",
                    "AirportName": "Hachijo Jima",
                    "CityCode": "HAC"
                },
                {
                    "AirportCode": "HAD",
                    "AirportName": "Halmstad",
                    "CityCode": "HAD"
                },
                {
                    "AirportCode": "HAE",
                    "AirportName": "Havasupai",
                    "CityCode": "HAE"
                },
                {
                    "AirportCode": "HAH",
                    "AirportName": "Hahaya Aeroport Internation",
                    "CityCode": "YVA"
                },
                {
                    "AirportCode": "HAI",
                    "AirportName": "DR HAINES",
                    "CityCode": "HAI"
                },
                {
                    "AirportCode": "HAJ",
                    "AirportName": "Hanover",
                    "CityCode": "HAJ"
                },
                {
                    "AirportCode": "HAK",
                    "AirportName": "Haikou",
                    "CityCode": "HAK"
                },
                {
                    "AirportCode": "HAM",
                    "AirportName": "Fuhlsbuttel",
                    "CityCode": "HAM"
                },
                {
                    "AirportCode": "HAN",
                    "AirportName": "HANOI",
                    "CityCode": "HAN"
                },
                {
                    "AirportCode": "HAP",
                    "AirportName": "Long Island",
                    "CityCode": "HAP"
                },
                {
                    "AirportCode": "HAR",
                    "AirportName": "Harrisburg Skyport",
                    "CityCode": "HAR"
                },
                {
                    "AirportCode": "HAS",
                    "AirportName": "HAIL",
                    "CityCode": "HAS"
                },
                {
                    "AirportCode": "HAU",
                    "AirportName": "Haugesund",
                    "CityCode": "HAU"
                },
                {
                    "AirportCode": "HAV",
                    "AirportName": "Jose Marti Int'l",
                    "CityCode": "HAV"
                },
                {
                    "AirportCode": "HBE",
                    "AirportName": "Alexandria - Burj",
                    "CityCode": "ALY"
                },
                {
                    "AirportCode": "HBX",
                    "AirportName": "Hubli",
                    "CityCode": "HBX"
                },
                {
                    "AirportCode": "HCR",
                    "AirportName": "Holy Cross",
                    "CityCode": "HCR"
                },
                {
                    "AirportCode": "HDN",
                    "AirportName": "Yampa Valley",
                    "CityCode": "SBS"
                },
                {
                    "AirportCode": "HDY",
                    "AirportName": "Hat yai",
                    "CityCode": "HDY"
                },
                {
                    "AirportCode": "HEA",
                    "AirportName": "Herat",
                    "CityCode": "HEA"
                },
                {
                    "AirportCode": "HEH",
                    "AirportName": "Heho",
                    "CityCode": "HEH"
                },
                {
                    "AirportCode": "HEI",
                    "AirportName": "Heide Buesum",
                    "CityCode": "HEI"
                },
                {
                    "AirportCode": "HEL",
                    "AirportName": "Helsinki-Vantaa",
                    "CityCode": "HEL"
                },
                {
                    "AirportCode": "HER",
                    "AirportName": "N Kazantzakis",
                    "CityCode": "HER"
                },
                {
                    "AirportCode": "HET",
                    "AirportName": "Hohhot",
                    "CityCode": "HET"
                },
                {
                    "AirportCode": "HEX",
                    "AirportName": "Herrer",
                    "CityCode": "SDQ"
                },
                {
                    "AirportCode": "HFA",
                    "AirportName": "Haifa",
                    "CityCode": "HFA"
                },
                {
                    "AirportCode": "HFD",
                    "AirportName": "Brainard",
                    "CityCode": "HFD"
                },
                {
                    "AirportCode": "HFE",
                    "AirportName": "Hefei",
                    "CityCode": "HFE"
                },
                {
                    "AirportCode": "HFN",
                    "AirportName": "Hornafjordur",
                    "CityCode": "HFN"
                },
                {
                    "AirportCode": "HFT",
                    "AirportName": "Hammerfest",
                    "CityCode": "HFT"
                },
                {
                    "AirportCode": "HGA",
                    "AirportName": "Hargeisa",
                    "CityCode": "HGA"
                },
                {
                    "AirportCode": "HGD",
                    "AirportName": "Hughenden",
                    "CityCode": "HGD"
                },
                {
                    "AirportCode": "HGH",
                    "AirportName": "Hangzhou",
                    "CityCode": "HGH"
                },
                {
                    "AirportCode": "HGL",
                    "AirportName": "Helgoland",
                    "CityCode": "HGL"
                },
                {
                    "AirportCode": "HGO",
                    "AirportName": "Korhogo",
                    "CityCode": "HGO"
                },
                {
                    "AirportCode": "HGR",
                    "AirportName": "Wash. County Regional",
                    "CityCode": "HGR"
                },
                {
                    "AirportCode": "HGS",
                    "AirportName": "Hastings",
                    "CityCode": "FNA"
                },
                {
                    "AirportCode": "HGU",
                    "AirportName": "Kagamuga",
                    "CityCode": "HGU"
                },
                {
                    "AirportCode": "HHH",
                    "AirportName": "Hilton Head",
                    "CityCode": "HHH"
                },
                {
                    "AirportCode": "HHN",
                    "AirportName": "Hahn",
                    "CityCode": "FRA"
                },
                {
                    "AirportCode": "HHQ",
                    "AirportName": "Hua Hin",
                    "CityCode": "HHQ"
                },
                {
                    "AirportCode": "HHR",
                    "AirportName": "Hawthorne",
                    "CityCode": "HHR"
                },
                {
                    "AirportCode": "HIB",
                    "AirportName": "Chisholm",
                    "CityCode": "HIB"
                },
                {
                    "AirportCode": "HIJ",
                    "AirportName": "Hiroshima Int'l",
                    "CityCode": "HIJ"
                },
                {
                    "AirportCode": "HIN",
                    "AirportName": "Sacheon",
                    "CityCode": "HIN"
                },
                {
                    "AirportCode": "HIR",
                    "AirportName": "Henderson Int'l",
                    "CityCode": "HIR"
                },
                {
                    "AirportCode": "HIS",
                    "AirportName": "Hayman Island",
                    "CityCode": "HIS"
                },
                {
                    "AirportCode": "HJR",
                    "AirportName": "Khajuraho",
                    "CityCode": "HJR"
                },
                {
                    "AirportCode": "HKD",
                    "AirportName": "Hakodate",
                    "CityCode": "HKD"
                },
                {
                    "AirportCode": "HKG",
                    "AirportName": "Hong Kong Int'l",
                    "CityCode": "HKG"
                },
                {
                    "AirportCode": "HKK",
                    "AirportName": "Hokitika",
                    "CityCode": "HKK"
                },
                {
                    "AirportCode": "HKN",
                    "AirportName": "Hoskins",
                    "CityCode": "HKN"
                },
                {
                    "AirportCode": "HKT",
                    "AirportName": "Phuket Int'l",
                    "CityCode": "HKT"
                },
                {
                    "AirportCode": "HKY",
                    "AirportName": "Hickory",
                    "CityCode": "HKY"
                },
                {
                    "AirportCode": "HLA",
                    "AirportName": "Lanseria",
                    "CityCode": "HLA"
                },
                {
                    "AirportCode": "HLD",
                    "AirportName": "Hailar",
                    "CityCode": "HLD"
                },
                {
                    "AirportCode": "HLF",
                    "AirportName": "Hultsfred",
                    "CityCode": "HLF"
                },
                {
                    "AirportCode": "HLH",
                    "AirportName": "Ulanhot",
                    "CityCode": "HLH"
                },
                {
                    "AirportCode": "HLN",
                    "AirportName": "Helena",
                    "CityCode": "HLN"
                },
                {
                    "AirportCode": "HLP",
                    "AirportName": "Halim Perdana Kusuma",
                    "CityCode": "JKT"
                },
                {
                    "AirportCode": "HLY",
                    "AirportName": "Anglesey Airport",
                    "CityCode": "HLY"
                },
                {
                    "AirportCode": "HLZ",
                    "AirportName": "Hamilton",
                    "CityCode": "HLZ"
                },
                {
                    "AirportCode": "HMA",
                    "AirportName": "Malmo city HVC",
                    "CityCode": "MMA"
                },
                {
                    "AirportCode": "HME",
                    "AirportName": "Oued Irara",
                    "CityCode": "HME"
                },
                {
                    "AirportCode": "HMJ",
                    "AirportName": "Khmelnitskiy",
                    "CityCode": "HMJ"
                },
                {
                    "AirportCode": "HMO",
                    "AirportName": "Gen Pesqueira Garcia",
                    "CityCode": "HMO"
                },
                {
                    "AirportCode": "HMT",
                    "AirportName": "Ryan Field",
                    "CityCode": "HMT"
                },
                {
                    "AirportCode": "HNA",
                    "AirportName": "Hanamaki",
                    "CityCode": "HNA"
                },
                {
                    "AirportCode": "HND",
                    "AirportName": "Haneda",
                    "CityCode": "TYO"
                },
                {
                    "AirportCode": "HNH",
                    "AirportName": "Hoonah",
                    "CityCode": "HNH"
                },
                {
                    "AirportCode": "HNL",
                    "AirportName": "Honolulu Int'l",
                    "CityCode": "HNL"
                },
                {
                    "AirportCode": "HNM",
                    "AirportName": "Hana",
                    "CityCode": "HNM"
                },
                {
                    "AirportCode": "HNS",
                    "AirportName": "Haines Municipal",
                    "CityCode": "HNS"
                },
                {
                    "AirportCode": "HNY",
                    "AirportName": "Hengyang",
                    "CityCode": "HNY"
                },
                {
                    "AirportCode": "HOB",
                    "AirportName": "Lea County",
                    "CityCode": "HOB"
                },
                {
                    "AirportCode": "HOD",
                    "AirportName": "Hodeidah",
                    "CityCode": "HOD"
                },
                {
                    "AirportCode": "HOE",
                    "AirportName": "Houeisay",
                    "CityCode": "HOE"
                },
                {
                    "AirportCode": "HOG",
                    "AirportName": "Frank Pais",
                    "CityCode": "HOG"
                },
                {
                    "AirportCode": "HOI",
                    "AirportName": "Hao Island",
                    "CityCode": "HOI"
                },
                {
                    "AirportCode": "HOK",
                    "AirportName": "Hooker Creek",
                    "CityCode": "HOK"
                },
                {
                    "AirportCode": "HOM",
                    "AirportName": "Homer",
                    "CityCode": "HOM"
                },
                {
                    "AirportCode": "HON",
                    "AirportName": "Howes",
                    "CityCode": "HON"
                },
                {
                    "AirportCode": "HOQ",
                    "AirportName": "Hof",
                    "CityCode": "HOQ"
                },
                {
                    "AirportCode": "HOR",
                    "AirportName": "Horta",
                    "CityCode": "HOR"
                },
                {
                    "AirportCode": "HOT",
                    "AirportName": "Memorial Field",
                    "CityCode": "HOT"
                },
                {
                    "AirportCode": "HOU",
                    "AirportName": "Hobby",
                    "CityCode": "HOU"
                },
                {
                    "AirportCode": "HOV",
                    "AirportName": "Hovden",
                    "CityCode": "HOV"
                },
                {
                    "AirportCode": "HPA",
                    "AirportName": "Salote Pilolevu",
                    "CityCode": "HPA"
                },
                {
                    "AirportCode": "HPB",
                    "AirportName": "Hooper Bay",
                    "CityCode": "HPB"
                },
                {
                    "AirportCode": "HPN",
                    "AirportName": "Westchester County",
                    "CityCode": "HPN"
                },
                {
                    "AirportCode": "HPV",
                    "AirportName": "Princeville",
                    "CityCode": "LIH"
                },
                {
                    "AirportCode": "HRB",
                    "AirportName": "Harbin",
                    "CityCode": "HRB"
                },
                {
                    "AirportCode": "HRE",
                    "AirportName": "Harare",
                    "CityCode": "HRE"
                },
                {
                    "AirportCode": "HRG",
                    "AirportName": "Hurghada",
                    "CityCode": "HRG"
                },
                {
                    "AirportCode": "HRK",
                    "AirportName": "Kharkov",
                    "CityCode": "HRK"
                },
                {
                    "AirportCode": "HRL",
                    "AirportName": "Valley Int'l",
                    "CityCode": "HRL"
                },
                {
                    "AirportCode": "HRO",
                    "AirportName": "Boone County",
                    "CityCode": "HRO"
                },
                {
                    "AirportCode": "HSI",
                    "AirportName": "Hastings",
                    "CityCode": "HSI"
                },
                {
                    "AirportCode": "HSL",
                    "AirportName": "Huslia",
                    "CityCode": "HSL"
                },
                {
                    "AirportCode": "HST",
                    "AirportName": "Homestead",
                    "CityCode": "HST"
                },
                {
                    "AirportCode": "HSV",
                    "AirportName": "Madison County",
                    "CityCode": "HSV"
                },
                {
                    "AirportCode": "HTA",
                    "AirportName": "Chita",
                    "CityCode": "HTA"
                },
                {
                    "AirportCode": "HTI",
                    "AirportName": "Hamilton Island",
                    "CityCode": "HTI"
                },
                {
                    "AirportCode": "HTO",
                    "AirportName": "East Hampton",
                    "CityCode": "HTO"
                },
                {
                    "AirportCode": "HTR",
                    "AirportName": "Hateruma",
                    "CityCode": "HTR"
                },
                {
                    "AirportCode": "HTS",
                    "AirportName": "Huntington",
                    "CityCode": "HTS"
                },
                {
                    "AirportCode": "HUB",
                    "AirportName": "HUMBERT RIVER",
                    "CityCode": "HUB"
                },
                {
                    "AirportCode": "HUE",
                    "AirportName": "Humera",
                    "CityCode": "HUE"
                },
                {
                    "AirportCode": "HUF",
                    "AirportName": "Hulman Field",
                    "CityCode": "HUF"
                },
                {
                    "AirportCode": "HUH",
                    "AirportName": "Flying Boat",
                    "CityCode": "HUH"
                },
                {
                    "AirportCode": "HUK",
                    "AirportName": "Hukuntsi",
                    "CityCode": "HUK"
                },
                {
                    "AirportCode": "HUN",
                    "AirportName": "Hualien",
                    "CityCode": "HUN"
                },
                {
                    "AirportCode": "HUQ",
                    "AirportName": "Houn",
                    "CityCode": "HUQ"
                },
                {
                    "AirportCode": "HUS",
                    "AirportName": "Hughes Municipal",
                    "CityCode": "HUS"
                },
                {
                    "AirportCode": "HUV",
                    "AirportName": "Hudiksvall",
                    "CityCode": "HUV"
                },
                {
                    "AirportCode": "HUX",
                    "AirportName": "Huatulco",
                    "CityCode": "HUX"
                },
                {
                    "AirportCode": "HUY",
                    "AirportName": "Humberside",
                    "CityCode": "HUY"
                },
                {
                    "AirportCode": "HVA",
                    "AirportName": "Analalava",
                    "CityCode": "HVA"
                },
                {
                    "AirportCode": "HVB",
                    "AirportName": "Hervey Bay",
                    "CityCode": "HVB"
                },
                {
                    "AirportCode": "HVG",
                    "AirportName": "Valan",
                    "CityCode": "HVG"
                },
                {
                    "AirportCode": "HVN",
                    "AirportName": "New Haven",
                    "CityCode": "HVN"
                },
                {
                    "AirportCode": "HVR",
                    "AirportName": "Havre City County",
                    "CityCode": "HVR"
                },
                {
                    "AirportCode": "HWN",
                    "AirportName": "Hwange Nat Park",
                    "CityCode": "HWN"
                },
                {
                    "AirportCode": "HWO",
                    "AirportName": "Norht Perry",
                    "CityCode": "HWO"
                },
                {
                    "AirportCode": "HXX",
                    "AirportName": "Hay",
                    "CityCode": "HXX"
                },
                {
                    "AirportCode": "HYA",
                    "AirportName": "Barnstable",
                    "CityCode": "HYA"
                },
                {
                    "AirportCode": "HYD",
                    "AirportName": "Shamsabad International Airport",
                    "CityCode": "HYD"
                },
                {
                    "AirportCode": "HYG",
                    "AirportName": "Hydaburg",
                    "CityCode": "HYG"
                },
                {
                    "AirportCode": "HYL",
                    "AirportName": "Hollis",
                    "CityCode": "HYL"
                },
                {
                    "AirportCode": "HYN",
                    "AirportName": "Huangyan",
                    "CityCode": "HYN"
                },
                {
                    "AirportCode": "HYS",
                    "AirportName": "Hays Municipal",
                    "CityCode": "HYS"
                },
                {
                    "AirportCode": "HZK",
                    "AirportName": "Husavik",
                    "CityCode": "HZK"
                },
                {
                    "AirportCode": "IAA",
                    "AirportName": "Igarka",
                    "CityCode": "IAA"
                },
                {
                    "AirportCode": "IAD",
                    "AirportName": "Dulles Int'l",
                    "CityCode": "WAS"
                },
                {
                    "AirportCode": "IAG",
                    "AirportName": "Niagara Falls Int'l",
                    "CityCode": "IAG"
                },
                {
                    "AirportCode": "IAH",
                    "AirportName": "Houston Intercontinental",
                    "CityCode": "HOU"
                },
                {
                    "AirportCode": "IAM",
                    "AirportName": "In Amenas",
                    "CityCode": "IAM"
                },
                {
                    "AirportCode": "IAN",
                    "AirportName": "Bob Barker Memorial",
                    "CityCode": "IAN"
                },
                {
                    "AirportCode": "IAS",
                    "AirportName": "Iasi",
                    "CityCode": "IAS"
                },
                {
                    "AirportCode": "IBA",
                    "AirportName": "Ibadan",
                    "CityCode": "IBA"
                },
                {
                    "AirportCode": "IBE",
                    "AirportName": "Ibague",
                    "CityCode": "IBE"
                },
                {
                    "AirportCode": "IBZ",
                    "AirportName": "Ibiza",
                    "CityCode": "IBZ"
                },
                {
                    "AirportCode": "ICI",
                    "AirportName": "Cicia",
                    "CityCode": "ICI"
                },
                {
                    "AirportCode": "ICK",
                    "AirportName": "Nieuw Nickerie",
                    "CityCode": "ICK"
                },
                {
                    "AirportCode": "ICN",
                    "AirportName": "Incheon International",
                    "CityCode": "SEL"
                },
                {
                    "AirportCode": "ICT",
                    "AirportName": "Mid-Continent",
                    "CityCode": "ICT"
                },
                {
                    "AirportCode": "IDA",
                    "AirportName": "Fanning Field",
                    "CityCode": "IDA"
                },
                {
                    "AirportCode": "IDN",
                    "AirportName": "Indagen",
                    "CityCode": "IDN"
                },
                {
                    "AirportCode": "IDR",
                    "AirportName": "Indore",
                    "CityCode": "IDR"
                },
                {
                    "AirportCode": "IEV",
                    "AirportName": "Zhulhany",
                    "CityCode": "IEV"
                },
                {
                    "AirportCode": "IFJ",
                    "AirportName": "Isafjordur",
                    "CityCode": "IFJ"
                },
                {
                    "AirportCode": "IFN",
                    "AirportName": "Isfahan",
                    "CityCode": "IFN"
                },
                {
                    "AirportCode": "IFO",
                    "AirportName": "Ivano Frankovsk",
                    "CityCode": "IFO"
                },
                {
                    "AirportCode": "IGA",
                    "AirportName": "Inagua",
                    "CityCode": "IGA"
                },
                {
                    "AirportCode": "IGG",
                    "AirportName": "Igiugig",
                    "CityCode": "IGG"
                },
                {
                    "AirportCode": "IGM",
                    "AirportName": "Kingman",
                    "CityCode": "IGM"
                },
                {
                    "AirportCode": "IGO",
                    "AirportName": "Chigorodo",
                    "CityCode": "IGO"
                },
                {
                    "AirportCode": "IGR",
                    "AirportName": "Cataratas",
                    "CityCode": "IGR"
                },
                {
                    "AirportCode": "IGU",
                    "AirportName": "Cataratas",
                    "CityCode": "IGU"
                },
                {
                    "AirportCode": "IHN",
                    "AirportName": "Qishn",
                    "CityCode": "IHN"
                },
                {
                    "AirportCode": "IHO",
                    "AirportName": "Ihosy",
                    "CityCode": "IHO"
                },
                {
                    "AirportCode": "IHU",
                    "AirportName": "Ihu",
                    "CityCode": "IHU"
                },
                {
                    "AirportCode": "IIA",
                    "AirportName": "Inishmaan",
                    "CityCode": "IIA"
                },
                {
                    "AirportCode": "IKA",
                    "AirportName": "Imam Khomeini Airport",
                    "CityCode": "THR"
                },
                {
                    "AirportCode": "IKI",
                    "AirportName": "Iki",
                    "CityCode": "IKI"
                },
                {
                    "AirportCode": "IKL",
                    "AirportName": "Ikela",
                    "CityCode": "IKL"
                },
                {
                    "AirportCode": "IKS",
                    "AirportName": "Tiksi",
                    "CityCode": "IKS"
                },
                {
                    "AirportCode": "IKT",
                    "AirportName": "Irkutsk",
                    "CityCode": "IKT"
                },
                {
                    "AirportCode": "ILA",
                    "AirportName": "Illaga",
                    "CityCode": "ILA"
                },
                {
                    "AirportCode": "ILD",
                    "AirportName": "Alguaire",
                    "CityCode": "ILD"
                },
                {
                    "AirportCode": "ILE",
                    "AirportName": "Killeen Municipal",
                    "CityCode": "ILE"
                },
                {
                    "AirportCode": "ILG",
                    "AirportName": "Greater Wilmington",
                    "CityCode": "ILG"
                },
                {
                    "AirportCode": "ILI",
                    "AirportName": "Iliamna",
                    "CityCode": "ILI"
                },
                {
                    "AirportCode": "ILK",
                    "AirportName": "Ilaka",
                    "CityCode": "ILK"
                },
                {
                    "AirportCode": "ILM",
                    "AirportName": "New Hanover County",
                    "CityCode": "ILM"
                },
                {
                    "AirportCode": "ILO",
                    "AirportName": "Mandurriao",
                    "CityCode": "ILO"
                },
                {
                    "AirportCode": "ILP",
                    "AirportName": "Ile Des Pins",
                    "CityCode": "ILP"
                },
                {
                    "AirportCode": "ILR",
                    "AirportName": "Ilorin",
                    "CityCode": "ILR"
                },
                {
                    "AirportCode": "ILU",
                    "AirportName": "Kilaguni",
                    "CityCode": "ILU"
                },
                {
                    "AirportCode": "ILY",
                    "AirportName": "Glenegedale",
                    "CityCode": "ILY"
                },
                {
                    "AirportCode": "IMA",
                    "AirportName": "Iamalele",
                    "CityCode": "IMA"
                },
                {
                    "AirportCode": "IMD",
                    "AirportName": "Imonda",
                    "CityCode": "IMD"
                },
                {
                    "AirportCode": "IMF",
                    "AirportName": "Imphal Municipal",
                    "CityCode": "IMF"
                },
                {
                    "AirportCode": "IMI",
                    "AirportName": "Ine Island",
                    "CityCode": "IMI"
                },
                {
                    "AirportCode": "IMO",
                    "AirportName": "Zemio",
                    "CityCode": "IMO"
                },
                {
                    "AirportCode": "IMP",
                    "AirportName": "Imperatriz",
                    "CityCode": "IMP"
                },
                {
                    "AirportCode": "IMT",
                    "AirportName": "Ford",
                    "CityCode": "IMT"
                },
                {
                    "AirportCode": "INC",
                    "AirportName": "Yinchuan",
                    "CityCode": "INC"
                },
                {
                    "AirportCode": "IND",
                    "AirportName": "Indianapolis Int'l",
                    "CityCode": "IND"
                },
                {
                    "AirportCode": "INF",
                    "AirportName": "In Guezzam",
                    "CityCode": "INF"
                },
                {
                    "AirportCode": "ING",
                    "AirportName": "Lago Argentino",
                    "CityCode": "ING"
                },
                {
                    "AirportCode": "INH",
                    "AirportName": "Inhambane",
                    "CityCode": "INH"
                },
                {
                    "AirportCode": "INI",
                    "AirportName": "Nis",
                    "CityCode": "INI"
                },
                {
                    "AirportCode": "INL",
                    "AirportName": "Int'l Falls",
                    "CityCode": "INL"
                },
                {
                    "AirportCode": "INN",
                    "AirportName": "Kranebitten",
                    "CityCode": "INN"
                },
                {
                    "AirportCode": "INO",
                    "AirportName": "Inongo",
                    "CityCode": "INO"
                },
                {
                    "AirportCode": "INQ",
                    "AirportName": "Inisheer",
                    "CityCode": "INQ"
                },
                {
                    "AirportCode": "INT",
                    "AirportName": "Smith-Reynolds",
                    "CityCode": "GSO"
                },
                {
                    "AirportCode": "INU",
                    "AirportName": "Nauru Island Int'l",
                    "CityCode": "INU"
                },
                {
                    "AirportCode": "INV",
                    "AirportName": "Inverness",
                    "CityCode": "INV"
                },
                {
                    "AirportCode": "INX",
                    "AirportName": "Inanwatan",
                    "CityCode": "INX"
                },
                {
                    "AirportCode": "INZ",
                    "AirportName": "In Salah",
                    "CityCode": "INZ"
                },
                {
                    "AirportCode": "IOA",
                    "AirportName": "Ioannina",
                    "CityCode": "IOA"
                },
                {
                    "AirportCode": "IOM",
                    "AirportName": "Ronaldsway",
                    "CityCode": "IOM"
                },
                {
                    "AirportCode": "ION",
                    "AirportName": "Impfondo",
                    "CityCode": "ION"
                },
                {
                    "AirportCode": "IOP",
                    "AirportName": "Ioma",
                    "CityCode": "IOP"
                },
                {
                    "AirportCode": "IOR",
                    "AirportName": "Kilronan",
                    "CityCode": "IOR"
                },
                {
                    "AirportCode": "IOS",
                    "AirportName": "Eduardo Gomes",
                    "CityCode": "IOS"
                },
                {
                    "AirportCode": "IPA",
                    "AirportName": "Ipota",
                    "CityCode": "IPA"
                },
                {
                    "AirportCode": "IPC",
                    "AirportName": "Mataveri Int'l",
                    "CityCode": "IPC"
                },
                {
                    "AirportCode": "IPG",
                    "AirportName": "Ipiranga",
                    "CityCode": "IPG"
                },
                {
                    "AirportCode": "IPH",
                    "AirportName": "Ipoh",
                    "CityCode": "IPH"
                },
                {
                    "AirportCode": "IPI",
                    "AirportName": "Ipiales",
                    "CityCode": "IPI"
                },
                {
                    "AirportCode": "IPL",
                    "AirportName": "Imperial County",
                    "CityCode": "IPL"
                },
                {
                    "AirportCode": "IPN",
                    "AirportName": "Usiminas",
                    "CityCode": "IPN"
                },
                {
                    "AirportCode": "IPT",
                    "AirportName": "Lycoming County",
                    "CityCode": "IPT"
                },
                {
                    "AirportCode": "IQQ",
                    "AirportName": "Cavancha",
                    "CityCode": "IQQ"
                },
                {
                    "AirportCode": "IQT",
                    "AirportName": "C.F. Secada",
                    "CityCode": "IQT"
                },
                {
                    "AirportCode": "IRA",
                    "AirportName": "Kirakira",
                    "CityCode": "IRA"
                },
                {
                    "AirportCode": "IRC",
                    "AirportName": "Circle City",
                    "CityCode": "IRC"
                },
                {
                    "AirportCode": "IRG",
                    "AirportName": "Lockhart River",
                    "CityCode": "IRG"
                },
                {
                    "AirportCode": "IRI",
                    "AirportName": "Nduli",
                    "CityCode": "IRI"
                },
                {
                    "AirportCode": "IRJ",
                    "AirportName": "La Rioja",
                    "CityCode": "IRJ"
                },
                {
                    "AirportCode": "IRK",
                    "AirportName": "Kirksville Municipal",
                    "CityCode": "IRK"
                },
                {
                    "AirportCode": "IRO",
                    "AirportName": "Birao",
                    "CityCode": "IRO"
                },
                {
                    "AirportCode": "IRP",
                    "AirportName": "Matari",
                    "CityCode": "IRP"
                },
                {
                    "AirportCode": "ISA",
                    "AirportName": "Mount Isa",
                    "CityCode": "ISA"
                },
                {
                    "AirportCode": "ISB",
                    "AirportName": "Islamabad",
                    "CityCode": "ISB"
                },
                {
                    "AirportCode": "ISC",
                    "AirportName": "Is Scilly",
                    "CityCode": "ISC"
                },
                {
                    "AirportCode": "ISG",
                    "AirportName": "Ishigaki",
                    "CityCode": "ISG"
                },
                {
                    "AirportCode": "ISK",
                    "AirportName": "Gandhinagar",
                    "CityCode": "ISK"
                },
                {
                    "AirportCode": "ISN",
                    "AirportName": "Sloulin Field Int'l",
                    "CityCode": "ISN"
                },
                {
                    "AirportCode": "ISO",
                    "AirportName": "Stalliings Field",
                    "CityCode": "ISO"
                },
                {
                    "AirportCode": "ISP",
                    "AirportName": "Long Island Macarthur",
                    "CityCode": "ISP"
                },
                {
                    "AirportCode": "IST",
                    "AirportName": "Ataturk",
                    "CityCode": "IST"
                },
                {
                    "AirportCode": "ITH",
                    "AirportName": "Tompkins County",
                    "CityCode": "ITH"
                },
                {
                    "AirportCode": "ITK",
                    "AirportName": "Itokama",
                    "CityCode": "ITK"
                },
                {
                    "AirportCode": "ITO",
                    "AirportName": "Hilo Int'l",
                    "CityCode": "ITO"
                },
                {
                    "AirportCode": "IUE",
                    "AirportName": "Hanan",
                    "CityCode": "IUE"
                },
                {
                    "AirportCode": "IUL",
                    "AirportName": "Ilu",
                    "CityCode": "IUL"
                },
                {
                    "AirportCode": "IVA",
                    "AirportName": "Ambanja",
                    "CityCode": "IVA"
                },
                {
                    "AirportCode": "IVC",
                    "AirportName": "Invercargill",
                    "CityCode": "IVC"
                },
                {
                    "AirportCode": "IVL",
                    "AirportName": "Ivalo",
                    "CityCode": "IVL"
                },
                {
                    "AirportCode": "IVR",
                    "AirportName": "Inverell",
                    "CityCode": "IVR"
                },
                {
                    "AirportCode": "IWD",
                    "AirportName": "Gogebic County",
                    "CityCode": "IWD"
                },
                {
                    "AirportCode": "IXA",
                    "AirportName": "Singerbhil",
                    "CityCode": "IXA"
                },
                {
                    "AirportCode": "IXB",
                    "AirportName": "Bagdogra",
                    "CityCode": "IXB"
                },
                {
                    "AirportCode": "IXC",
                    "AirportName": "Chandigarh",
                    "CityCode": "IXC"
                },
                {
                    "AirportCode": "IXD",
                    "AirportName": "Bamrauli",
                    "CityCode": "IXD"
                },
                {
                    "AirportCode": "IXE",
                    "AirportName": "Bajpe",
                    "CityCode": "IXE"
                },
                {
                    "AirportCode": "IXG",
                    "AirportName": "Sambre",
                    "CityCode": "IXG"
                },
                {
                    "AirportCode": "IXH",
                    "AirportName": "Kailashahar",
                    "CityCode": "IXH"
                },
                {
                    "AirportCode": "IXI",
                    "AirportName": "Lilabari",
                    "CityCode": "IXI"
                },
                {
                    "AirportCode": "IXJ",
                    "AirportName": "Satwari",
                    "CityCode": "IXJ"
                },
                {
                    "AirportCode": "IXK",
                    "AirportName": "Keshod",
                    "CityCode": "IXK"
                },
                {
                    "AirportCode": "IXL",
                    "AirportName": "Leh",
                    "CityCode": "IXL"
                },
                {
                    "AirportCode": "IXM",
                    "AirportName": "Madurai",
                    "CityCode": "IXM"
                },
                {
                    "AirportCode": "IXP",
                    "AirportName": "Pathankot",
                    "CityCode": "IXP"
                },
                {
                    "AirportCode": "IXR",
                    "AirportName": "Ranchi",
                    "CityCode": "IXR"
                },
                {
                    "AirportCode": "IXS",
                    "AirportName": "Kumbhirgram",
                    "CityCode": "IXS"
                },
                {
                    "AirportCode": "IXU",
                    "AirportName": "Chikkalthana",
                    "CityCode": "IXU"
                },
                {
                    "AirportCode": "IXW",
                    "AirportName": "Sonari",
                    "CityCode": "IXW"
                },
                {
                    "AirportCode": "IXY",
                    "AirportName": "Kandla",
                    "CityCode": "IXY"
                },
                {
                    "AirportCode": "IXZ",
                    "AirportName": "Port Blair",
                    "CityCode": "IXZ"
                },
                {
                    "AirportCode": "IYK",
                    "AirportName": "Kern County",
                    "CityCode": "IYK"
                },
                {
                    "AirportCode": "IZO",
                    "AirportName": "Izumo",
                    "CityCode": "IZO"
                },
                {
                    "AirportCode": "JAA",
                    "AirportName": "Jalalabad",
                    "CityCode": "JAA"
                },
                {
                    "AirportCode": "JAC",
                    "AirportName": "Jackson Hole",
                    "CityCode": "JAC"
                },
                {
                    "AirportCode": "JAD",
                    "AirportName": "Jandakot",
                    "CityCode": "JAD"
                },
                {
                    "AirportCode": "JAG",
                    "AirportName": "JACOBABAD",
                    "CityCode": "JAG"
                },
                {
                    "AirportCode": "JAI",
                    "AirportName": "Jaipur",
                    "CityCode": "JAI"
                },
                {
                    "AirportCode": "JAK",
                    "AirportName": "Jacmel",
                    "CityCode": "JAK"
                },
                {
                    "AirportCode": "JAN",
                    "AirportName": "Jackson Int'l",
                    "CityCode": "JAN"
                },
                {
                    "AirportCode": "JAT",
                    "AirportName": "Jabot",
                    "CityCode": "JAT"
                },
                {
                    "AirportCode": "JAV",
                    "AirportName": "Ilulisaat",
                    "CityCode": "JAV"
                },
                {
                    "AirportCode": "JAX",
                    "AirportName": "Jacksonville Int'l",
                    "CityCode": "JAX"
                },
                {
                    "AirportCode": "JBR",
                    "AirportName": "Jonesboro",
                    "CityCode": "JBR"
                },
                {
                    "AirportCode": "JCH",
                    "AirportName": "Christianshaab",
                    "CityCode": "JCH"
                },
                {
                    "AirportCode": "JCI",
                    "AirportName": "Johnson Industrial",
                    "CityCode": "MKC"
                },
                {
                    "AirportCode": "JCK",
                    "AirportName": "Julia Creek",
                    "CityCode": "JCK"
                },
                {
                    "AirportCode": "JDF",
                    "AirportName": "Francisco De Assis",
                    "CityCode": "JDF"
                },
                {
                    "AirportCode": "JDH",
                    "AirportName": "Jodhpur",
                    "CityCode": "JDH"
                },
                {
                    "AirportCode": "JDO",
                    "AirportName": "Juazeiro Do Norte",
                    "CityCode": "JDO"
                },
                {
                    "AirportCode": "JED",
                    "AirportName": "King Abdulaziz Int'l",
                    "CityCode": "JED"
                },
                {
                    "AirportCode": "JEG",
                    "AirportName": "Aasiaat",
                    "CityCode": "JEG"
                },
                {
                    "AirportCode": "JEJ",
                    "AirportName": "Jeh",
                    "CityCode": "JEJ"
                },
                {
                    "AirportCode": "JER",
                    "AirportName": "Jersey States",
                    "CityCode": "JER"
                },
                {
                    "AirportCode": "JFK",
                    "AirportName": "John F Kennedy Int'l",
                    "CityCode": "NYC"
                },
                {
                    "AirportCode": "JFR",
                    "AirportName": "Frederikshaab",
                    "CityCode": "JFR"
                },
                {
                    "AirportCode": "JGA",
                    "AirportName": "Govardhanpur",
                    "CityCode": "JGA"
                },
                {
                    "AirportCode": "JGB",
                    "AirportName": "Jagdalpur",
                    "CityCode": "JGB"
                },
                {
                    "AirportCode": "JGN",
                    "AirportName": "Jiayuguan",
                    "CityCode": "JGN"
                },
                {
                    "AirportCode": "JGO",
                    "AirportName": "Godhavn",
                    "CityCode": "JGO"
                },
                {
                    "AirportCode": "JHB",
                    "AirportName": "Sultan Ismail Int'l",
                    "CityCode": "JHB"
                },
                {
                    "AirportCode": "JHM",
                    "AirportName": "Kapalua",
                    "CityCode": "JHM"
                },
                {
                    "AirportCode": "JHS",
                    "AirportName": "Sisimiut",
                    "CityCode": "JHS"
                },
                {
                    "AirportCode": "JHW",
                    "AirportName": "Jamestown",
                    "CityCode": "JHW"
                },
                {
                    "AirportCode": "JIB",
                    "AirportName": "Ambouli",
                    "CityCode": "JIB"
                },
                {
                    "AirportCode": "JIM",
                    "AirportName": "Jimma",
                    "CityCode": "JIM"
                },
                {
                    "AirportCode": "JJI",
                    "AirportName": "Juanjui",
                    "CityCode": "JJI"
                },
                {
                    "AirportCode": "JKG",
                    "AirportName": "Axamo",
                    "CityCode": "JKG"
                },
                {
                    "AirportCode": "JKH",
                    "AirportName": "Chios",
                    "CityCode": "JKH"
                },
                {
                    "AirportCode": "JLN",
                    "AirportName": "Joplin",
                    "CityCode": "JLN"
                },
                {
                    "AirportCode": "JLR",
                    "AirportName": "Jabalpur",
                    "CityCode": "JLR"
                },
                {
                    "AirportCode": "JMK",
                    "AirportName": "Mikonos",
                    "CityCode": "JMK"
                },
                {
                    "AirportCode": "JNB",
                    "AirportName": "Johannesburg Int'l",
                    "CityCode": "JNB"
                },
                {
                    "AirportCode": "JNN",
                    "AirportName": "Nanortalik",
                    "CityCode": "JNN"
                },
                {
                    "AirportCode": "JNU",
                    "AirportName": "Juneau Int'l",
                    "CityCode": "JNU"
                },
                {
                    "AirportCode": "JOE",
                    "AirportName": "Joensuu",
                    "CityCode": "JOE"
                },
                {
                    "AirportCode": "JOG",
                    "AirportName": "Adisutjipto",
                    "CityCode": "JOG"
                },
                {
                    "AirportCode": "JOI",
                    "AirportName": "Cubatao",
                    "CityCode": "JOI"
                },
                {
                    "AirportCode": "JON",
                    "AirportName": "Johnston Island",
                    "CityCode": "JON"
                },
                {
                    "AirportCode": "JOS",
                    "AirportName": "Jos",
                    "CityCode": "JOS"
                },
                {
                    "AirportCode": "JPA",
                    "AirportName": "Castro Pinto",
                    "CityCode": "JPA"
                },
                {
                    "AirportCode": "JRB",
                    "AirportName": "Downtown Manhattan H/p",
                    "CityCode": "NYC"
                },
                {
                    "AirportCode": "JRH",
                    "AirportName": "Rowriah",
                    "CityCode": "JRH"
                },
                {
                    "AirportCode": "JRO",
                    "AirportName": "Kilimanjaro",
                    "CityCode": "JRO"
                },
                {
                    "AirportCode": "JRS",
                    "AirportName": "Jerusalem",
                    "CityCode": "JRS"
                },
                {
                    "AirportCode": "JSA",
                    "AirportName": "Jaisalmer",
                    "CityCode": "JSA"
                },
                {
                    "AirportCode": "JSH",
                    "AirportName": "Sitia",
                    "CityCode": "JSH"
                },
                {
                    "AirportCode": "JSI",
                    "AirportName": "Skiathos",
                    "CityCode": "JSI"
                },
                {
                    "AirportCode": "JSM",
                    "AirportName": "Jose D San Martin",
                    "CityCode": "JSM"
                },
                {
                    "AirportCode": "JSR",
                    "AirportName": "Jessore",
                    "CityCode": "JSR"
                },
                {
                    "AirportCode": "JST",
                    "AirportName": "Cambria County",
                    "CityCode": "JST"
                },
                {
                    "AirportCode": "JTR",
                    "AirportName": "Santorini",
                    "CityCode": "JTR"
                },
                {
                    "AirportCode": "JUB",
                    "AirportName": "Juba",
                    "CityCode": "JUB"
                },
                {
                    "AirportCode": "JUI",
                    "AirportName": "Juist",
                    "CityCode": "JUI"
                },
                {
                    "AirportCode": "JUJ",
                    "AirportName": "El Cadillal",
                    "CityCode": "JUJ"
                },
                {
                    "AirportCode": "JUL",
                    "AirportName": "Juliaca",
                    "CityCode": "JUL"
                },
                {
                    "AirportCode": "JVA",
                    "AirportName": "Ankavandra",
                    "CityCode": "JVA"
                },
                {
                    "AirportCode": "JWA",
                    "AirportName": "Jwaneng",
                    "CityCode": "JWA"
                },
                {
                    "AirportCode": "JYV",
                    "AirportName": "Jyvaskyla",
                    "CityCode": "JYV"
                },
                {
                    "AirportCode": "KAA",
                    "AirportName": "Kasama",
                    "CityCode": "KAA"
                },
                {
                    "AirportCode": "KAB",
                    "AirportName": "Kariba",
                    "CityCode": "KAB"
                },
                {
                    "AirportCode": "KAC",
                    "AirportName": "Kameshli",
                    "CityCode": "KAC"
                },
                {
                    "AirportCode": "KAD",
                    "AirportName": "Kaduna",
                    "CityCode": "KAD"
                },
                {
                    "AirportCode": "KAG",
                    "AirportName": "Kangnung",
                    "CityCode": "KAG"
                },
                {
                    "AirportCode": "KAJ",
                    "AirportName": "Kajaani",
                    "CityCode": "KAJ"
                },
                {
                    "AirportCode": "KAL",
                    "AirportName": "Kaltag",
                    "CityCode": "KAL"
                },
                {
                    "AirportCode": "KAN",
                    "AirportName": "Aminu Kano Int'l",
                    "CityCode": "KAN"
                },
                {
                    "AirportCode": "KAO",
                    "AirportName": "Kuusamo",
                    "CityCode": "KAO"
                },
                {
                    "AirportCode": "KAT",
                    "AirportName": "Kaitaia",
                    "CityCode": "KAT"
                },
                {
                    "AirportCode": "KAX",
                    "AirportName": "Kalbarri",
                    "CityCode": "KAX"
                },
                {
                    "AirportCode": "KAZ",
                    "AirportName": "Kau",
                    "CityCode": "KAZ"
                },
                {
                    "AirportCode": "KBA",
                    "AirportName": "Kabala",
                    "CityCode": "KBA"
                },
                {
                    "AirportCode": "KBC",
                    "AirportName": "Birch Creek",
                    "CityCode": "KBC"
                },
                {
                    "AirportCode": "KBI",
                    "AirportName": "Kribi",
                    "CityCode": "KBI"
                },
                {
                    "AirportCode": "KBL",
                    "AirportName": "Khwaja Rawash",
                    "CityCode": "KBL"
                },
                {
                    "AirportCode": "KBM",
                    "AirportName": "Kabwum",
                    "CityCode": "KBM"
                },
                {
                    "AirportCode": "KBP",
                    "AirportName": "Borispol",
                    "CityCode": "IEV"
                },
                {
                    "AirportCode": "KBR",
                    "AirportName": "Pengkalan Chepa",
                    "CityCode": "KBR"
                },
                {
                    "AirportCode": "KBT",
                    "AirportName": "Kaben",
                    "CityCode": "KBT"
                },
                {
                    "AirportCode": "KBV",
                    "AirportName": "KRABI",
                    "CityCode": "KBV"
                },
                {
                    "AirportCode": "KBX",
                    "AirportName": "Kambuaya",
                    "CityCode": "KBX"
                },
                {
                    "AirportCode": "KBY",
                    "AirportName": "Streaky Bay",
                    "CityCode": "KBY"
                },
                {
                    "AirportCode": "KCG",
                    "AirportName": "Fisheries",
                    "CityCode": "KCL"
                },
                {
                    "AirportCode": "KCH",
                    "AirportName": "Kuching",
                    "CityCode": "KCH"
                },
                {
                    "AirportCode": "KCK",
                    "AirportName": "Fairfax Municipal",
                    "CityCode": "KCK"
                },
                {
                    "AirportCode": "KCL",
                    "AirportName": "Chignik",
                    "CityCode": "KCL"
                },
                {
                    "AirportCode": "KCQ",
                    "AirportName": "Chignik Lake",
                    "CityCode": "KCL"
                },
                {
                    "AirportCode": "KCZ",
                    "AirportName": "Kochi",
                    "CityCode": "KCZ"
                },
                {
                    "AirportCode": "KDA",
                    "AirportName": "Kolda",
                    "CityCode": "KDA"
                },
                {
                    "AirportCode": "KDC",
                    "AirportName": "Kandi",
                    "CityCode": "KDC"
                },
                {
                    "AirportCode": "KDH",
                    "AirportName": "Kandahar",
                    "CityCode": "KDH"
                },
                {
                    "AirportCode": "KDI",
                    "AirportName": "Wolter Monginsidi",
                    "CityCode": "KDI"
                },
                {
                    "AirportCode": "KDN",
                    "AirportName": "Ndende",
                    "CityCode": "KDN"
                },
                {
                    "AirportCode": "KDV",
                    "AirportName": "Kandavu",
                    "CityCode": "KDV"
                },
                {
                    "AirportCode": "KEA",
                    "AirportName": "Keisah",
                    "CityCode": "KEA"
                },
                {
                    "AirportCode": "KED",
                    "AirportName": "Kaedi",
                    "CityCode": "KED"
                },
                {
                    "AirportCode": "KEE",
                    "AirportName": "Kelle",
                    "CityCode": "KEE"
                },
                {
                    "AirportCode": "KEF",
                    "AirportName": "Keflavik Int'l",
                    "CityCode": "REK"
                },
                {
                    "AirportCode": "KEH",
                    "AirportName": "Kenmore Air Harbo",
                    "CityCode": "KEH"
                },
                {
                    "AirportCode": "KEJ",
                    "AirportName": "Kemerovo",
                    "CityCode": "KEJ"
                },
                {
                    "AirportCode": "KEK",
                    "AirportName": "Ekwok",
                    "CityCode": "KEK"
                },
                {
                    "AirportCode": "KEL",
                    "AirportName": "Holtenau",
                    "CityCode": "KEL"
                },
                {
                    "AirportCode": "KEM",
                    "AirportName": "Kemi Tornio",
                    "CityCode": "KEM"
                },
                {
                    "AirportCode": "KEN",
                    "AirportName": "Kenema",
                    "CityCode": "KEN"
                },
                {
                    "AirportCode": "KEO",
                    "AirportName": "Odienne",
                    "CityCode": "KEO"
                },
                {
                    "AirportCode": "KEQ",
                    "AirportName": "Kebar",
                    "CityCode": "KEQ"
                },
                {
                    "AirportCode": "KER",
                    "AirportName": "Kerman",
                    "CityCode": "KER"
                },
                {
                    "AirportCode": "KET",
                    "AirportName": "Keng Tung",
                    "CityCode": "KET"
                },
                {
                    "AirportCode": "KEY",
                    "AirportName": "Kericho",
                    "CityCode": "KEY"
                },
                {
                    "AirportCode": "KFA",
                    "AirportName": "Kiffa",
                    "CityCode": "KFA"
                },
                {
                    "AirportCode": "KFG",
                    "AirportName": "Kalkurung",
                    "CityCode": "KFG"
                },
                {
                    "AirportCode": "KFP",
                    "AirportName": "False Pass",
                    "CityCode": "KFP"
                },
                {
                    "AirportCode": "KGA",
                    "AirportName": "Kananga",
                    "CityCode": "KGA"
                },
                {
                    "AirportCode": "KGB",
                    "AirportName": "Konge",
                    "CityCode": "KGB"
                },
                {
                    "AirportCode": "KGC",
                    "AirportName": "Kingscote",
                    "CityCode": "KGC"
                },
                {
                    "AirportCode": "KGD",
                    "AirportName": "Kaliningrad",
                    "CityCode": "KGD"
                },
                {
                    "AirportCode": "KGF",
                    "AirportName": "Karaganda",
                    "CityCode": "KGF"
                },
                {
                    "AirportCode": "KGG",
                    "AirportName": "Kedougou",
                    "CityCode": "KGG"
                },
                {
                    "AirportCode": "KGI",
                    "AirportName": "Kalgoorlie",
                    "CityCode": "KGI"
                },
                {
                    "AirportCode": "KGJ",
                    "AirportName": "Karonga",
                    "CityCode": "KGJ"
                },
                {
                    "AirportCode": "KGK",
                    "AirportName": "New Koliganek",
                    "CityCode": "KGK"
                },
                {
                    "AirportCode": "KGL",
                    "AirportName": "Gregoire Kayibanda",
                    "CityCode": "KGL"
                },
                {
                    "AirportCode": "KGS",
                    "AirportName": "Kos",
                    "CityCode": "KGS"
                },
                {
                    "AirportCode": "KGX",
                    "AirportName": "Grayling",
                    "CityCode": "KGX"
                },
                {
                    "AirportCode": "KHE",
                    "AirportName": "Kherson",
                    "CityCode": "KHE"
                },
                {
                    "AirportCode": "KHG",
                    "AirportName": "Kashi",
                    "CityCode": "KHG"
                },
                {
                    "AirportCode": "KHH",
                    "AirportName": "Kaohsiung Int'l",
                    "CityCode": "KHH"
                },
                {
                    "AirportCode": "KHI",
                    "AirportName": "Quaid-e-Azam Int'l",
                    "CityCode": "KHI"
                },
                {
                    "AirportCode": "KHN",
                    "AirportName": "Nanchang",
                    "CityCode": "KHN"
                },
                {
                    "AirportCode": "KHS",
                    "AirportName": "Khasab",
                    "CityCode": "KHS"
                },
                {
                    "AirportCode": "KHT",
                    "AirportName": "Khost",
                    "CityCode": "KHT"
                },
                {
                    "AirportCode": "KHV",
                    "AirportName": "Novy",
                    "CityCode": "KHV"
                },
                {
                    "AirportCode": "KHW",
                    "AirportName": "Khwai River Lodge",
                    "CityCode": "KHW"
                },
                {
                    "AirportCode": "KID",
                    "AirportName": "Kristianstad",
                    "CityCode": "KID"
                },
                {
                    "AirportCode": "KIF",
                    "AirportName": "Kingfisher Lake",
                    "CityCode": "KIF"
                },
                {
                    "AirportCode": "KIH",
                    "AirportName": "Kish Island",
                    "CityCode": "KIH"
                },
                {
                    "AirportCode": "KIJ",
                    "AirportName": "Niigata",
                    "CityCode": "KIJ"
                },
                {
                    "AirportCode": "KIM",
                    "AirportName": "Kimberley",
                    "CityCode": "KIM"
                },
                {
                    "AirportCode": "KIN",
                    "AirportName": "Norman Manley",
                    "CityCode": "KIN"
                },
                {
                    "AirportCode": "KIO",
                    "AirportName": "Kili Island",
                    "CityCode": "KIO"
                },
                {
                    "AirportCode": "KIQ",
                    "AirportName": "Kira",
                    "CityCode": "KIQ"
                },
                {
                    "AirportCode": "KIR",
                    "AirportName": "Kerry County",
                    "CityCode": "KIR"
                },
                {
                    "AirportCode": "KIS",
                    "AirportName": "Kisumu",
                    "CityCode": "KIS"
                },
                {
                    "AirportCode": "KIT",
                    "AirportName": "Kithira",
                    "CityCode": "KIT"
                },
                {
                    "AirportCode": "KIV",
                    "AirportName": "Chisinau",
                    "CityCode": "KIV"
                },
                {
                    "AirportCode": "KIX",
                    "AirportName": "Kansai Int'l",
                    "CityCode": "OSA"
                },
                {
                    "AirportCode": "KJA",
                    "AirportName": "Krasnojarsk",
                    "CityCode": "KJA"
                },
                {
                    "AirportCode": "KKA",
                    "AirportName": "Koyuk",
                    "CityCode": "KKA"
                },
                {
                    "AirportCode": "KKB",
                    "AirportName": "Kitoi Bay",
                    "CityCode": "KKB"
                },
                {
                    "AirportCode": "KKC",
                    "AirportName": "Khon Kaen",
                    "CityCode": "KKC"
                },
                {
                    "AirportCode": "KKD",
                    "AirportName": "Kokoda",
                    "CityCode": "KKD"
                },
                {
                    "AirportCode": "KKE",
                    "AirportName": "Kerikeri",
                    "CityCode": "KKE"
                },
                {
                    "AirportCode": "KKH",
                    "AirportName": "Kongiganak",
                    "CityCode": "KKH"
                },
                {
                    "AirportCode": "KKN",
                    "AirportName": "Hoeybuktmoen",
                    "CityCode": "KKN"
                },
                {
                    "AirportCode": "KKR",
                    "AirportName": "Kaukura Atoll",
                    "CityCode": "KKR"
                },
                {
                    "AirportCode": "KKU",
                    "AirportName": "Ekuk",
                    "CityCode": "KKU"
                },
                {
                    "AirportCode": "KKX",
                    "AirportName": "Kikaiga Shima",
                    "CityCode": "KKX"
                },
                {
                    "AirportCode": "KLC",
                    "AirportName": "Kaolack",
                    "CityCode": "KLC"
                },
                {
                    "AirportCode": "KLE",
                    "AirportName": "Kaele",
                    "CityCode": "KLE"
                },
                {
                    "AirportCode": "KLG",
                    "AirportName": "Kalskag Municipal",
                    "CityCode": "KLG"
                },
                {
                    "AirportCode": "KLH",
                    "AirportName": "Kolhapur",
                    "CityCode": "KLH"
                },
                {
                    "AirportCode": "KLL",
                    "AirportName": "Levelock",
                    "CityCode": "KLL"
                },
                {
                    "AirportCode": "KLO",
                    "AirportName": "Kalibo",
                    "CityCode": "KLO"
                },
                {
                    "AirportCode": "KLR",
                    "AirportName": "Kalmar",
                    "CityCode": "KLR"
                },
                {
                    "AirportCode": "KLU",
                    "AirportName": "Klagenfurt",
                    "CityCode": "KLU"
                },
                {
                    "AirportCode": "KLW",
                    "AirportName": "Klawock",
                    "CityCode": "KLW"
                },
                {
                    "AirportCode": "KLX",
                    "AirportName": "Kalamata",
                    "CityCode": "KLX"
                },
                {
                    "AirportCode": "KLZ",
                    "AirportName": "Kleinzee",
                    "CityCode": "KLZ"
                },
                {
                    "AirportCode": "KME",
                    "AirportName": "Kamembe",
                    "CityCode": "KME"
                },
                {
                    "AirportCode": "KMG",
                    "AirportName": "Kunming",
                    "CityCode": "KMG"
                },
                {
                    "AirportCode": "KMI",
                    "AirportName": "Miyazaki",
                    "CityCode": "KMI"
                },
                {
                    "AirportCode": "KMJ",
                    "AirportName": "Kumamoto",
                    "CityCode": "KMJ"
                },
                {
                    "AirportCode": "KMK",
                    "AirportName": "Makabana",
                    "CityCode": "KMK"
                },
                {
                    "AirportCode": "KMM",
                    "AirportName": "Kimam",
                    "CityCode": "KMM"
                },
                {
                    "AirportCode": "KMP",
                    "AirportName": "J.G.H. Van Der Wath",
                    "CityCode": "KMP"
                },
                {
                    "AirportCode": "KMQ",
                    "AirportName": "Komatsu",
                    "CityCode": "KMQ"
                },
                {
                    "AirportCode": "KMS",
                    "AirportName": "Kumasi",
                    "CityCode": "KMS"
                },
                {
                    "AirportCode": "KMU",
                    "AirportName": "Kismayu",
                    "CityCode": "KMU"
                },
                {
                    "AirportCode": "KMV",
                    "AirportName": "Kalemyo",
                    "CityCode": "KMV"
                },
                {
                    "AirportCode": "KMY",
                    "AirportName": "Moser Bay",
                    "CityCode": "KMY"
                },
                {
                    "AirportCode": "KND",
                    "AirportName": "Kindu",
                    "CityCode": "KND"
                },
                {
                    "AirportCode": "KNG",
                    "AirportName": "Kaimana",
                    "CityCode": "KNG"
                },
                {
                    "AirportCode": "KNH",
                    "AirportName": "Shang-Yi",
                    "CityCode": "KNH"
                },
                {
                    "AirportCode": "KNJ",
                    "AirportName": "Kindamba",
                    "CityCode": "KNJ"
                },
                {
                    "AirportCode": "KNK",
                    "AirportName": "Kakhonak",
                    "CityCode": "KNK"
                },
                {
                    "AirportCode": "KNN",
                    "AirportName": "Kankan",
                    "CityCode": "KNN"
                },
                {
                    "AirportCode": "KNQ",
                    "AirportName": "Kone",
                    "CityCode": "KNQ"
                },
                {
                    "AirportCode": "KNS",
                    "AirportName": "King Island",
                    "CityCode": "KNS"
                },
                {
                    "AirportCode": "KNU",
                    "AirportName": "Kanpur",
                    "CityCode": "KNU"
                },
                {
                    "AirportCode": "KNW",
                    "AirportName": "New Stuyahok",
                    "CityCode": "KNW"
                },
                {
                    "AirportCode": "KNX",
                    "AirportName": "Kununurra",
                    "CityCode": "KNX"
                },
                {
                    "AirportCode": "KOA",
                    "AirportName": "Keahole",
                    "CityCode": "KOA"
                },
                {
                    "AirportCode": "KOB",
                    "AirportName": "Koutaba",
                    "CityCode": "KOB"
                },
                {
                    "AirportCode": "KOC",
                    "AirportName": "Koumac",
                    "CityCode": "KOC"
                },
                {
                    "AirportCode": "KOE",
                    "AirportName": "Eltari",
                    "CityCode": "KOE"
                },
                {
                    "AirportCode": "KOI",
                    "AirportName": "Kirkwall",
                    "CityCode": "KOI"
                },
                {
                    "AirportCode": "KOJ",
                    "AirportName": "Kagoshima",
                    "CityCode": "KOJ"
                },
                {
                    "AirportCode": "KOK",
                    "AirportName": "Kruunupyy",
                    "CityCode": "KOK"
                },
                {
                    "AirportCode": "KOO",
                    "AirportName": "Kongolo",
                    "CityCode": "KOO"
                },
                {
                    "AirportCode": "KOT",
                    "AirportName": "Kotlik",
                    "CityCode": "KOT"
                },
                {
                    "AirportCode": "KOU",
                    "AirportName": "Koulamoutou",
                    "CityCode": "KOU"
                },
                {
                    "AirportCode": "KOV",
                    "AirportName": "Kokchetau",
                    "CityCode": "KOV"
                },
                {
                    "AirportCode": "KOW",
                    "AirportName": "Ganzhou",
                    "CityCode": "KOW"
                },
                {
                    "AirportCode": "KPC",
                    "AirportName": "Port Clarence",
                    "CityCode": "KPC"
                },
                {
                    "AirportCode": "KPE",
                    "AirportName": "Yapsiei",
                    "CityCode": "KPE"
                },
                {
                    "AirportCode": "KPI",
                    "AirportName": "Kapit",
                    "CityCode": "KPI"
                },
                {
                    "AirportCode": "KPO",
                    "AirportName": "Pohang",
                    "CityCode": "KPO"
                },
                {
                    "AirportCode": "KPS",
                    "AirportName": "Kempsey",
                    "CityCode": "KPS"
                },
                {
                    "AirportCode": "KQA",
                    "AirportName": "Akutan",
                    "CityCode": "KQA"
                },
                {
                    "AirportCode": "KRB",
                    "AirportName": "Karumba",
                    "CityCode": "KRB"
                },
                {
                    "AirportCode": "KRE",
                    "AirportName": "Kirundo",
                    "CityCode": "KRE"
                },
                {
                    "AirportCode": "KRF",
                    "AirportName": "Kramfors",
                    "CityCode": "KRF"
                },
                {
                    "AirportCode": "KRI",
                    "AirportName": "Kikori",
                    "CityCode": "KRI"
                },
                {
                    "AirportCode": "KRJ",
                    "AirportName": "Karawari",
                    "CityCode": "KRJ"
                },
                {
                    "AirportCode": "KRK",
                    "AirportName": "John Paul11 Balice Int'l",
                    "CityCode": "KRK"
                },
                {
                    "AirportCode": "KRN",
                    "AirportName": "Kiruna",
                    "CityCode": "KRN"
                },
                {
                    "AirportCode": "KRO",
                    "AirportName": "Kurgan",
                    "CityCode": "KRO"
                },
                {
                    "AirportCode": "KRP",
                    "AirportName": "Karup",
                    "CityCode": "KRP"
                },
                {
                    "AirportCode": "KRR",
                    "AirportName": "Krasnodar",
                    "CityCode": "KRR"
                },
                {
                    "AirportCode": "KRS",
                    "AirportName": "Kjevik",
                    "CityCode": "KRS"
                },
                {
                    "AirportCode": "KRT",
                    "AirportName": "Khartoum Civil",
                    "CityCode": "KRT"
                },
                {
                    "AirportCode": "KRV",
                    "AirportName": "Kerio Valley",
                    "CityCode": "KRV"
                },
                {
                    "AirportCode": "KRW",
                    "AirportName": "Krasnowodsk",
                    "CityCode": "KRW"
                },
                {
                    "AirportCode": "KRX",
                    "AirportName": "Kar Kar",
                    "CityCode": "KRX"
                },
                {
                    "AirportCode": "KSA",
                    "AirportName": "Kosrae",
                    "CityCode": "KSA"
                },
                {
                    "AirportCode": "KSC",
                    "AirportName": "Barca",
                    "CityCode": "KSC"
                },
                {
                    "AirportCode": "KSD",
                    "AirportName": "Karlstad",
                    "CityCode": "KSD"
                },
                {
                    "AirportCode": "KSE",
                    "AirportName": "Kasese",
                    "CityCode": "KSE"
                },
                {
                    "AirportCode": "KSH",
                    "AirportName": "Bakhtaran",
                    "CityCode": "KSH"
                },
                {
                    "AirportCode": "KSI",
                    "AirportName": "Kissidougou",
                    "CityCode": "KSI"
                },
                {
                    "AirportCode": "KSJ",
                    "AirportName": "Kasos Island",
                    "CityCode": "KSJ"
                },
                {
                    "AirportCode": "KSL",
                    "AirportName": "Kassala",
                    "CityCode": "KSL"
                },
                {
                    "AirportCode": "KSM",
                    "AirportName": "Saint Marys",
                    "CityCode": "KSM"
                },
                {
                    "AirportCode": "KSN",
                    "AirportName": "Kostanay",
                    "CityCode": "KSN"
                },
                {
                    "AirportCode": "KSO",
                    "AirportName": "Aristoteles",
                    "CityCode": "KSO"
                },
                {
                    "AirportCode": "KSQ",
                    "AirportName": "Karshi",
                    "CityCode": "KSQ"
                },
                {
                    "AirportCode": "KSS",
                    "AirportName": "Sikasso",
                    "CityCode": "KSS"
                },
                {
                    "AirportCode": "KSU",
                    "AirportName": "Kvernberget",
                    "CityCode": "KSU"
                },
                {
                    "AirportCode": "KTA",
                    "AirportName": "Karratha",
                    "CityCode": "KTA"
                },
                {
                    "AirportCode": "KTB",
                    "AirportName": "Thorne Bay",
                    "CityCode": "KTB"
                },
                {
                    "AirportCode": "KTC",
                    "AirportName": "Katiola",
                    "CityCode": "KTC"
                },
                {
                    "AirportCode": "KTD",
                    "AirportName": "Kitadaito",
                    "CityCode": "KTD"
                },
                {
                    "AirportCode": "KTE",
                    "AirportName": "Kerteh",
                    "CityCode": "KTE"
                },
                {
                    "AirportCode": "KTG",
                    "AirportName": "Ketapang",
                    "CityCode": "KTG"
                },
                {
                    "AirportCode": "KTL",
                    "AirportName": "Kitale",
                    "CityCode": "KTL"
                },
                {
                    "AirportCode": "KTM",
                    "AirportName": "Tribhuvan",
                    "CityCode": "KTM"
                },
                {
                    "AirportCode": "KTN",
                    "AirportName": "Ketchikan int'l",
                    "CityCode": "KTN"
                },
                {
                    "AirportCode": "KTP",
                    "AirportName": "Tinson",
                    "CityCode": "KIN"
                },
                {
                    "AirportCode": "KTR",
                    "AirportName": "Tindal",
                    "CityCode": "KTR"
                },
                {
                    "AirportCode": "KTS",
                    "AirportName": "Brevig Mission",
                    "CityCode": "KTS"
                },
                {
                    "AirportCode": "KTT",
                    "AirportName": "Kittila",
                    "CityCode": "KTT"
                },
                {
                    "AirportCode": "KTU",
                    "AirportName": "Kota",
                    "CityCode": "KTU"
                },
                {
                    "AirportCode": "KTW",
                    "AirportName": "Pyrzowice",
                    "CityCode": "KTW"
                },
                {
                    "AirportCode": "KTX",
                    "AirportName": "Koutiala",
                    "CityCode": "KTX"
                },
                {
                    "AirportCode": "KUA",
                    "AirportName": "Kuantan",
                    "CityCode": "KUA"
                },
                {
                    "AirportCode": "KUC",
                    "AirportName": "Kuria",
                    "CityCode": "KUC"
                },
                {
                    "AirportCode": "KUD",
                    "AirportName": "Kudat",
                    "CityCode": "KUD"
                },
                {
                    "AirportCode": "KUF",
                    "AirportName": "Samara",
                    "CityCode": "KUF"
                },
                {
                    "AirportCode": "KUG",
                    "AirportName": "Kubin Island",
                    "CityCode": "KUG"
                },
                {
                    "AirportCode": "KUH",
                    "AirportName": "Kushiro",
                    "CityCode": "KUH"
                },
                {
                    "AirportCode": "KUK",
                    "AirportName": "Kasigluk",
                    "CityCode": "KUK"
                },
                {
                    "AirportCode": "KUL",
                    "AirportName": "Kuala Lum Intl.",
                    "CityCode": "KUL"
                },
                {
                    "AirportCode": "KUM",
                    "AirportName": "Yakushima",
                    "CityCode": "KUM"
                },
                {
                    "AirportCode": "KUN",
                    "AirportName": "Kaunas",
                    "CityCode": "KUN"
                },
                {
                    "AirportCode": "KUO",
                    "AirportName": "Kuopio",
                    "CityCode": "KUO"
                },
                {
                    "AirportCode": "KUP",
                    "AirportName": "Kupiano",
                    "CityCode": "KUP"
                },
                {
                    "AirportCode": "KUS",
                    "AirportName": "Kulusuk",
                    "CityCode": "KUS"
                },
                {
                    "AirportCode": "KUT",
                    "AirportName": "Kutaisi",
                    "CityCode": "KUT"
                },
                {
                    "AirportCode": "KUU",
                    "AirportName": "Bhuntar",
                    "CityCode": "KUU"
                },
                {
                    "AirportCode": "KVA",
                    "AirportName": "Megas Alexandros",
                    "CityCode": "KVA"
                },
                {
                    "AirportCode": "KVB",
                    "AirportName": "Skovde",
                    "CityCode": "KVB"
                },
                {
                    "AirportCode": "KVC",
                    "AirportName": "King Cove",
                    "CityCode": "KVC"
                },
                {
                    "AirportCode": "KVG",
                    "AirportName": "Kavieng",
                    "CityCode": "KVG"
                },
                {
                    "AirportCode": "KVL",
                    "AirportName": "Kivalina",
                    "CityCode": "KVL"
                },
                {
                    "AirportCode": "KVX",
                    "AirportName": "Kirov",
                    "CityCode": "KVX"
                },
                {
                    "AirportCode": "KWA",
                    "AirportName": "Kwajalein",
                    "CityCode": "KWA"
                },
                {
                    "AirportCode": "KWE",
                    "AirportName": "Guiyang",
                    "CityCode": "KWE"
                },
                {
                    "AirportCode": "KWG",
                    "AirportName": "Krivoy Rog",
                    "CityCode": "KWG"
                },
                {
                    "AirportCode": "KWH",
                    "AirportName": "Khwahan",
                    "CityCode": "KWH"
                },
                {
                    "AirportCode": "KWI",
                    "AirportName": "Kuwait Int'l",
                    "CityCode": "KWI"
                },
                {
                    "AirportCode": "KWJ",
                    "AirportName": "Kwangju",
                    "CityCode": "KWJ"
                },
                {
                    "AirportCode": "KWK",
                    "AirportName": "Kwigillingok",
                    "CityCode": "KWK"
                },
                {
                    "AirportCode": "KWL",
                    "AirportName": "Guilin",
                    "CityCode": "KWL"
                },
                {
                    "AirportCode": "KWM",
                    "AirportName": "Kowanyama",
                    "CityCode": "KWM"
                },
                {
                    "AirportCode": "KWN",
                    "AirportName": "Kwinhagak",
                    "CityCode": "KWN"
                },
                {
                    "AirportCode": "KWT",
                    "AirportName": "Kwethluk",
                    "CityCode": "KWT"
                },
                {
                    "AirportCode": "KWY",
                    "AirportName": "Kiwayu",
                    "CityCode": "KWY"
                },
                {
                    "AirportCode": "KYA",
                    "AirportName": "Konya",
                    "CityCode": "KYA"
                },
                {
                    "AirportCode": "KYD",
                    "AirportName": "Orchid Island",
                    "CityCode": "KYD"
                },
                {
                    "AirportCode": "KYE",
                    "AirportName": "Kleyate",
                    "CityCode": "KYE"
                },
                {
                    "AirportCode": "KYK",
                    "AirportName": "Karluk",
                    "CityCode": "KYK"
                },
                {
                    "AirportCode": "KYP",
                    "AirportName": "Kyaukpyu",
                    "CityCode": "KYP"
                },
                {
                    "AirportCode": "KYS",
                    "AirportName": "Kayes",
                    "CityCode": "KYS"
                },
                {
                    "AirportCode": "KYU",
                    "AirportName": "Koyukuk",
                    "CityCode": "KYU"
                },
                {
                    "AirportCode": "KYX",
                    "AirportName": "Yalumet",
                    "CityCode": "KYX"
                },
                {
                    "AirportCode": "KYZ",
                    "AirportName": "Kyzyl",
                    "CityCode": "KYZ"
                },
                {
                    "AirportCode": "KZF",
                    "AirportName": "Kaintiba",
                    "CityCode": "KZF"
                },
                {
                    "AirportCode": "KZI",
                    "AirportName": "Philippos",
                    "CityCode": "KZI"
                },
                {
                    "AirportCode": "KZN",
                    "AirportName": "Kazan",
                    "CityCode": "KZN"
                },
                {
                    "AirportCode": "KZS",
                    "AirportName": "Kastelorizo",
                    "CityCode": "KZS"
                },
                {
                    "AirportCode": "LAA",
                    "AirportName": "Lamar Field",
                    "CityCode": "LAA"
                },
                {
                    "AirportCode": "LAB",
                    "AirportName": "Lablab",
                    "CityCode": "LAB"
                },
                {
                    "AirportCode": "LAD",
                    "AirportName": "4 De Fevereiro",
                    "CityCode": "LAD"
                },
                {
                    "AirportCode": "LAE",
                    "AirportName": "Nadzab",
                    "CityCode": "LAE"
                },
                {
                    "AirportCode": "LAF",
                    "AirportName": "Purdue University",
                    "CityCode": "LAF"
                },
                {
                    "AirportCode": "LAH",
                    "AirportName": "Labuha",
                    "CityCode": "LAH"
                },
                {
                    "AirportCode": "LAI",
                    "AirportName": "Servel",
                    "CityCode": "LAI"
                },
                {
                    "AirportCode": "LAJ",
                    "AirportName": "Lages",
                    "CityCode": "LAJ"
                },
                {
                    "AirportCode": "LAK",
                    "AirportName": "Aklavik",
                    "CityCode": "LAK"
                },
                {
                    "AirportCode": "LAM",
                    "AirportName": "Los Alamos",
                    "CityCode": "LAM"
                },
                {
                    "AirportCode": "LAN",
                    "AirportName": "Capital City",
                    "CityCode": "LAN"
                },
                {
                    "AirportCode": "LAP",
                    "AirportName": "Leon",
                    "CityCode": "LAP"
                },
                {
                    "AirportCode": "LAQ",
                    "AirportName": "La Braq",
                    "CityCode": "LAQ"
                },
                {
                    "AirportCode": "LAR",
                    "AirportName": "General Brees Field",
                    "CityCode": "LAR"
                },
                {
                    "AirportCode": "LAS",
                    "AirportName": "Mccarran Int'l",
                    "CityCode": "LAS"
                },
                {
                    "AirportCode": "LAT",
                    "AirportName": "La Uribe",
                    "CityCode": "LAT"
                },
                {
                    "AirportCode": "LAU",
                    "AirportName": "Lamu",
                    "CityCode": "LAU"
                },
                {
                    "AirportCode": "LAW",
                    "AirportName": "Lawton Municipal",
                    "CityCode": "LAW"
                },
                {
                    "AirportCode": "LAX",
                    "AirportName": "Los Angeles Int'l",
                    "CityCode": "LAX"
                },
                {
                    "AirportCode": "LAY",
                    "AirportName": "Ladysmith",
                    "CityCode": "LAY"
                },
                {
                    "AirportCode": "LAZ",
                    "AirportName": "Bom Jesus Da Lapa",
                    "CityCode": "LAZ"
                },
                {
                    "AirportCode": "LBA",
                    "AirportName": "Leeds/Bradford",
                    "CityCode": "LBA"
                },
                {
                    "AirportCode": "LBB",
                    "AirportName": "Lubbock Int'l",
                    "CityCode": "LBB"
                },
                {
                    "AirportCode": "LBC",
                    "AirportName": "Luebeck-Blankensee",
                    "CityCode": "HAM"
                },
                {
                    "AirportCode": "LBE",
                    "AirportName": "Westmoreland County",
                    "CityCode": "LBE"
                },
                {
                    "AirportCode": "LBF",
                    "AirportName": "Lee Bird Field",
                    "CityCode": "LBF"
                },
                {
                    "AirportCode": "LBI",
                    "AirportName": "Le Sequestre",
                    "CityCode": "LBI"
                },
                {
                    "AirportCode": "LBJ",
                    "AirportName": "Mutiara",
                    "CityCode": "LBJ"
                },
                {
                    "AirportCode": "LBL",
                    "AirportName": "Liberal Municipal",
                    "CityCode": "LBL"
                },
                {
                    "AirportCode": "LBQ",
                    "AirportName": "Lambarene",
                    "CityCode": "LBQ"
                },
                {
                    "AirportCode": "LBS",
                    "AirportName": "Labasa",
                    "CityCode": "LBS"
                },
                {
                    "AirportCode": "LBT",
                    "AirportName": "LUMBERTON",
                    "CityCode": "LBT"
                },
                {
                    "AirportCode": "LBU",
                    "AirportName": "Labuan",
                    "CityCode": "LBU"
                },
                {
                    "AirportCode": "LBV",
                    "AirportName": "Libreville",
                    "CityCode": "LBV"
                },
                {
                    "AirportCode": "LBW",
                    "AirportName": "Long Bawan",
                    "CityCode": "LBW"
                },
                {
                    "AirportCode": "LCA",
                    "AirportName": "Larnaca",
                    "CityCode": "LCA"
                },
                {
                    "AirportCode": "LCB",
                    "AirportName": "Pontes E Lacerda",
                    "CityCode": "lcb"
                },
                {
                    "AirportCode": "LCD",
                    "AirportName": "Louis Trichardt",
                    "CityCode": "LCD"
                },
                {
                    "AirportCode": "LCE",
                    "AirportName": "Goloson Int'l",
                    "CityCode": "LCE"
                },
                {
                    "AirportCode": "LCG",
                    "AirportName": "La Coruna",
                    "CityCode": "LCG"
                },
                {
                    "AirportCode": "LCH",
                    "AirportName": "Lake Charles Municipal",
                    "CityCode": "LCH"
                },
                {
                    "AirportCode": "LCI",
                    "AirportName": "Laconia Municipal",
                    "CityCode": "LCI"
                },
                {
                    "AirportCode": "LCJ",
                    "AirportName": "Wladyslaw Reymont",
                    "CityCode": "LCJ"
                },
                {
                    "AirportCode": "LCK",
                    "AirportName": "Rickenbacker",
                    "CityCode": "CMH"
                },
                {
                    "AirportCode": "LCL",
                    "AirportName": "La Coloma",
                    "CityCode": "LCL"
                },
                {
                    "AirportCode": "LCO",
                    "AirportName": "Lague",
                    "CityCode": "LCO"
                },
                {
                    "AirportCode": "LCR",
                    "AirportName": "La Chorrera",
                    "CityCode": "LCR"
                },
                {
                    "AirportCode": "LCY",
                    "AirportName": "London City Apt",
                    "CityCode": "LON"
                },
                {
                    "AirportCode": "LDA",
                    "AirportName": "Malda",
                    "CityCode": "LDA"
                },
                {
                    "AirportCode": "LDB",
                    "AirportName": "Londrina",
                    "CityCode": "LDB"
                },
                {
                    "AirportCode": "LDC",
                    "AirportName": "Lindeman Island",
                    "CityCode": "LDC"
                },
                {
                    "AirportCode": "LDE",
                    "AirportName": "Lourdes Tarbes Int'l",
                    "CityCode": "LDE"
                },
                {
                    "AirportCode": "LDH",
                    "AirportName": "Lord Howe Island",
                    "CityCode": "LDH"
                },
                {
                    "AirportCode": "LDI",
                    "AirportName": "Kikwetu",
                    "CityCode": "LDI"
                },
                {
                    "AirportCode": "LDK",
                    "AirportName": "Hovby",
                    "CityCode": "LDK"
                },
                {
                    "AirportCode": "LDU",
                    "AirportName": "Lahad Datu",
                    "CityCode": "LDU"
                },
                {
                    "AirportCode": "LDY",
                    "AirportName": "Eglinton",
                    "CityCode": "LDY"
                },
                {
                    "AirportCode": "LEA",
                    "AirportName": "Learmonth",
                    "CityCode": "LEA"
                },
                {
                    "AirportCode": "LEB",
                    "AirportName": "Lebanon Rgnl",
                    "CityCode": "LEB"
                },
                {
                    "AirportCode": "LED",
                    "AirportName": "Pulkovo",
                    "CityCode": "LED"
                },
                {
                    "AirportCode": "LEH",
                    "AirportName": "Octeville",
                    "CityCode": "LEH"
                },
                {
                    "AirportCode": "LEI",
                    "AirportName": "Almeria",
                    "CityCode": "LEI"
                },
                {
                    "AirportCode": "LEJ",
                    "AirportName": "Leipzig",
                    "CityCode": "LEJ"
                },
                {
                    "AirportCode": "LEK",
                    "AirportName": "Labe",
                    "CityCode": "LEK"
                },
                {
                    "AirportCode": "LEL",
                    "AirportName": "Lake Evella",
                    "CityCode": "LEL"
                },
                {
                    "AirportCode": "LEM",
                    "AirportName": "Lemmon",
                    "CityCode": "LEM"
                },
                {
                    "AirportCode": "LER",
                    "AirportName": "Leinster",
                    "CityCode": "LER"
                },
                {
                    "AirportCode": "LES",
                    "AirportName": "Lesobeng",
                    "CityCode": "LES"
                },
                {
                    "AirportCode": "LET",
                    "AirportName": "Leticia",
                    "CityCode": "LET"
                },
                {
                    "AirportCode": "LEV",
                    "AirportName": "Levuka Airfield",
                    "CityCode": "LEV"
                },
                {
                    "AirportCode": "LEX",
                    "AirportName": "Blue Grass",
                    "CityCode": "LEX"
                },
                {
                    "AirportCode": "LFR",
                    "AirportName": "La Fria",
                    "CityCode": "LFR"
                },
                {
                    "AirportCode": "LFT",
                    "AirportName": "Lafayette Regional",
                    "CityCode": "ARA"
                },
                {
                    "AirportCode": "LFW",
                    "AirportName": "Lome",
                    "CityCode": "LFW"
                },
                {
                    "AirportCode": "LGA",
                    "AirportName": "La Guardia",
                    "CityCode": "NYC"
                },
                {
                    "AirportCode": "LGB",
                    "AirportName": "Long Beach Municipal",
                    "CityCode": "LGB"
                },
                {
                    "AirportCode": "LGG",
                    "AirportName": "Bierset",
                    "CityCode": "LGG"
                },
                {
                    "AirportCode": "LGH",
                    "AirportName": "Leigh Creek",
                    "CityCode": "LGH"
                },
                {
                    "AirportCode": "LGI",
                    "AirportName": "Deadmans Cay",
                    "CityCode": "LGI"
                },
                {
                    "AirportCode": "LGK",
                    "AirportName": "Langkawi",
                    "CityCode": "LGK"
                },
                {
                    "AirportCode": "LGL",
                    "AirportName": "Long Lellang",
                    "CityCode": "LGL"
                },
                {
                    "AirportCode": "LGP",
                    "AirportName": "Legaspi",
                    "CityCode": "LGP"
                },
                {
                    "AirportCode": "LGQ",
                    "AirportName": "Lago Agrio",
                    "CityCode": "LGQ"
                },
                {
                    "AirportCode": "LGW",
                    "AirportName": "Gatwick",
                    "CityCode": "LON"
                },
                {
                    "AirportCode": "LGZ",
                    "AirportName": "Leguizamo",
                    "CityCode": "LGZ"
                },
                {
                    "AirportCode": "LHE",
                    "AirportName": "Lahore",
                    "CityCode": "LHE"
                },
                {
                    "AirportCode": "LHI",
                    "AirportName": "Lereh",
                    "CityCode": "LHI"
                },
                {
                    "AirportCode": "LHR",
                    "AirportName": "Heathrow",
                    "CityCode": "LON"
                },
                {
                    "AirportCode": "LIF",
                    "AirportName": "Lifou",
                    "CityCode": "LIF"
                },
                {
                    "AirportCode": "LIG",
                    "AirportName": "Bellegarde",
                    "CityCode": "LIG"
                },
                {
                    "AirportCode": "LIH",
                    "AirportName": "Lihue",
                    "CityCode": "LIH"
                },
                {
                    "AirportCode": "LII",
                    "AirportName": "Mulia",
                    "CityCode": "LII"
                },
                {
                    "AirportCode": "LIJ",
                    "AirportName": "Long Island",
                    "CityCode": "LIJ"
                },
                {
                    "AirportCode": "LIK",
                    "AirportName": "Likiep Island",
                    "CityCode": "LIK"
                },
                {
                    "AirportCode": "LIL",
                    "AirportName": "Lesquin",
                    "CityCode": "LIL"
                },
                {
                    "AirportCode": "LIM",
                    "AirportName": "J Chavez Int'l",
                    "CityCode": "LIM"
                },
                {
                    "AirportCode": "LIN",
                    "AirportName": "Linate",
                    "CityCode": "MIL"
                },
                {
                    "AirportCode": "LIP",
                    "AirportName": "Lins",
                    "CityCode": "LIP"
                },
                {
                    "AirportCode": "LIQ",
                    "AirportName": "Lisala",
                    "CityCode": "LIQ"
                },
                {
                    "AirportCode": "LIS",
                    "AirportName": "Lisboa",
                    "CityCode": "LIS"
                },
                {
                    "AirportCode": "LIT",
                    "AirportName": "Little Rock Regional",
                    "CityCode": "LIT"
                },
                {
                    "AirportCode": "LIW",
                    "AirportName": "Loikaw",
                    "CityCode": "LIW"
                },
                {
                    "AirportCode": "LJA",
                    "AirportName": "Lodja",
                    "CityCode": "LJA"
                },
                {
                    "AirportCode": "LJU",
                    "AirportName": "Brnik",
                    "CityCode": "LJU"
                },
                {
                    "AirportCode": "LKA",
                    "AirportName": "Larantuka",
                    "CityCode": "LKA"
                },
                {
                    "AirportCode": "LKB",
                    "AirportName": "Lakeba",
                    "CityCode": "LKB"
                },
                {
                    "AirportCode": "LKL",
                    "AirportName": "Banak",
                    "CityCode": "LKL"
                },
                {
                    "AirportCode": "LKN",
                    "AirportName": "Leknes",
                    "CityCode": "LKN"
                },
                {
                    "AirportCode": "LKO",
                    "AirportName": "Amausi",
                    "CityCode": "LKO"
                },
                {
                    "AirportCode": "LLA",
                    "AirportName": "Kallax",
                    "CityCode": "LLA"
                },
                {
                    "AirportCode": "LLI",
                    "AirportName": "Lalibela",
                    "CityCode": "LLI"
                },
                {
                    "AirportCode": "LLN",
                    "AirportName": "Kelila",
                    "CityCode": "LLN"
                },
                {
                    "AirportCode": "LLW",
                    "AirportName": "Kamuzu Int'l",
                    "CityCode": "LLW"
                },
                {
                    "AirportCode": "LMA",
                    "AirportName": "Lake Minchumina",
                    "CityCode": "LMA"
                },
                {
                    "AirportCode": "LMB",
                    "AirportName": "Salima",
                    "CityCode": "LMB"
                },
                {
                    "AirportCode": "LMC",
                    "AirportName": "Lamacarena",
                    "CityCode": "LMC"
                },
                {
                    "AirportCode": "LMI",
                    "AirportName": "Lumi",
                    "CityCode": "LMI"
                },
                {
                    "AirportCode": "LML",
                    "AirportName": "Lae Island",
                    "CityCode": "LML"
                },
                {
                    "AirportCode": "LMM",
                    "AirportName": "Federl",
                    "CityCode": "LMM"
                },
                {
                    "AirportCode": "LMN",
                    "AirportName": "Limbang",
                    "CityCode": "LMN"
                },
                {
                    "AirportCode": "LMP",
                    "AirportName": "Lampedusa",
                    "CityCode": "LMP"
                },
                {
                    "AirportCode": "LMT",
                    "AirportName": "Kinsley Field",
                    "CityCode": "LMT"
                },
                {
                    "AirportCode": "LMX",
                    "AirportName": "Lopez De Micay",
                    "CityCode": "LMX"
                },
                {
                    "AirportCode": "LMY",
                    "AirportName": "Lake Murray",
                    "CityCode": "LMY"
                },
                {
                    "AirportCode": "LNB",
                    "AirportName": "Lamen Bay",
                    "CityCode": "LNB"
                },
                {
                    "AirportCode": "LNE",
                    "AirportName": "Lonorore",
                    "CityCode": "LNE"
                },
                {
                    "AirportCode": "LNF",
                    "AirportName": "Munbil",
                    "CityCode": "LNF"
                },
                {
                    "AirportCode": "LNK",
                    "AirportName": "Lincoln Municipal",
                    "CityCode": "LNK"
                },
                {
                    "AirportCode": "LNO",
                    "AirportName": "Leonora",
                    "CityCode": "LNO"
                },
                {
                    "AirportCode": "LNS",
                    "AirportName": "Lancaster",
                    "CityCode": "LNS"
                },
                {
                    "AirportCode": "LNY",
                    "AirportName": "Lanai City",
                    "CityCode": "LNY"
                },
                {
                    "AirportCode": "LNZ",
                    "AirportName": "Hoersching",
                    "CityCode": "LNZ"
                },
                {
                    "AirportCode": "LOD",
                    "AirportName": "Longana",
                    "CityCode": "LOD"
                },
                {
                    "AirportCode": "LOE",
                    "AirportName": "Loei",
                    "CityCode": "LOE"
                },
                {
                    "AirportCode": "LOF",
                    "AirportName": "Loen",
                    "CityCode": "LOF"
                },
                {
                    "AirportCode": "LOH",
                    "AirportName": "Loja",
                    "CityCode": "LOH"
                },
                {
                    "AirportCode": "LOK",
                    "AirportName": "Lodwar",
                    "CityCode": "LOK"
                },
                {
                    "AirportCode": "LOS",
                    "AirportName": "Murtala Muhammed",
                    "CityCode": "LOS"
                },
                {
                    "AirportCode": "LOW",
                    "AirportName": "LOUISA",
                    "CityCode": "LOW"
                },
                {
                    "AirportCode": "LOY",
                    "AirportName": "Loyangalani",
                    "CityCode": "LOY"
                },
                {
                    "AirportCode": "LPA",
                    "AirportName": "Las Palmas",
                    "CityCode": "LPA"
                },
                {
                    "AirportCode": "LPB",
                    "AirportName": "El Alto",
                    "CityCode": "LPB"
                },
                {
                    "AirportCode": "LPD",
                    "AirportName": "La Pedrera",
                    "CityCode": "LPD"
                },
                {
                    "AirportCode": "LPE",
                    "AirportName": "La Primavera",
                    "CityCode": "LPE"
                },
                {
                    "AirportCode": "LPG",
                    "AirportName": "La Plata",
                    "CityCode": "LPG"
                },
                {
                    "AirportCode": "LPI",
                    "AirportName": "Linkoping",
                    "CityCode": "LPI"
                },
                {
                    "AirportCode": "LPL",
                    "AirportName": "Liverpool Int'l",
                    "CityCode": "LPL"
                },
                {
                    "AirportCode": "LPM",
                    "AirportName": "Lamap",
                    "CityCode": "LPM"
                },
                {
                    "AirportCode": "LPP",
                    "AirportName": "Lappeenranta",
                    "CityCode": "LPP"
                },
                {
                    "AirportCode": "LPQ",
                    "AirportName": "Luang Prabang",
                    "CityCode": "LPQ"
                },
                {
                    "AirportCode": "LPS",
                    "AirportName": "Lopez Island",
                    "CityCode": "LPS"
                },
                {
                    "AirportCode": "LPT",
                    "AirportName": "Lampang",
                    "CityCode": "LPT"
                },
                {
                    "AirportCode": "LPU",
                    "AirportName": "Long Apung",
                    "CityCode": "LPU"
                },
                {
                    "AirportCode": "LPW",
                    "AirportName": "Little Port Walte",
                    "CityCode": "LPW"
                },
                {
                    "AirportCode": "LPY",
                    "AirportName": "Loudes",
                    "CityCode": "LPY"
                },
                {
                    "AirportCode": "LQN",
                    "AirportName": "Qala Nau",
                    "CityCode": "LQN"
                },
                {
                    "AirportCode": "LRA",
                    "AirportName": "Larisa",
                    "CityCode": "LRA"
                },
                {
                    "AirportCode": "LRB",
                    "AirportName": "Leribe",
                    "CityCode": "LRB"
                },
                {
                    "AirportCode": "LRD",
                    "AirportName": "Laredo Int'l",
                    "CityCode": "LRD"
                },
                {
                    "AirportCode": "LRE",
                    "AirportName": "Longreach",
                    "CityCode": "LRE"
                },
                {
                    "AirportCode": "LRH",
                    "AirportName": "Laleu",
                    "CityCode": "LRH"
                },
                {
                    "AirportCode": "LRM",
                    "AirportName": "La Romana",
                    "CityCode": "LRM"
                },
                {
                    "AirportCode": "LRS",
                    "AirportName": "Leros",
                    "CityCode": "LRS"
                },
                {
                    "AirportCode": "LRT",
                    "AirportName": "Lann Bihoue",
                    "CityCode": "LRT"
                },
                {
                    "AirportCode": "LRU",
                    "AirportName": "Las Cruces Municipal",
                    "CityCode": "LRU"
                },
                {
                    "AirportCode": "LRV",
                    "AirportName": "Los Roques",
                    "CityCode": "LRV"
                },
                {
                    "AirportCode": "LSA",
                    "AirportName": "Losuia",
                    "CityCode": "LSA"
                },
                {
                    "AirportCode": "LSC",
                    "AirportName": "La Florida",
                    "CityCode": "LSC"
                },
                {
                    "AirportCode": "LSE",
                    "AirportName": "La Crosse Municipal",
                    "CityCode": "LSE"
                },
                {
                    "AirportCode": "LSH",
                    "AirportName": "Lashio",
                    "CityCode": "LSH"
                },
                {
                    "AirportCode": "LSI",
                    "AirportName": "Sumburgh",
                    "CityCode": "SDZ"
                },
                {
                    "AirportCode": "LSM",
                    "AirportName": "Lawas",
                    "CityCode": "LSM"
                },
                {
                    "AirportCode": "LSP",
                    "AirportName": "Josefa Camejo",
                    "CityCode": "LSP"
                },
                {
                    "AirportCode": "LSQ",
                    "AirportName": "Los Angeles",
                    "CityCode": "LSQ"
                },
                {
                    "AirportCode": "LSS",
                    "AirportName": "Terre De Haut",
                    "CityCode": "LSS"
                },
                {
                    "AirportCode": "LST",
                    "AirportName": "Launceston",
                    "CityCode": "LST"
                },
                {
                    "AirportCode": "LSW",
                    "AirportName": "Lhoksumawe",
                    "CityCode": "LSW"
                },
                {
                    "AirportCode": "LSY",
                    "AirportName": "Lismore",
                    "CityCode": "LSY"
                },
                {
                    "AirportCode": "LTD",
                    "AirportName": "Ghadames",
                    "CityCode": "LTD"
                },
                {
                    "AirportCode": "LTK",
                    "AirportName": "Latakia",
                    "CityCode": "LTK"
                },
                {
                    "AirportCode": "LTL",
                    "AirportName": "Lastourville",
                    "CityCode": "LTL"
                },
                {
                    "AirportCode": "LTN",
                    "AirportName": "Luton Airport",
                    "CityCode": "LON"
                },
                {
                    "AirportCode": "LTO",
                    "AirportName": "Loreto",
                    "CityCode": "LTO"
                },
                {
                    "AirportCode": "LTQ",
                    "AirportName": "Le Touquet",
                    "CityCode": "LTQ"
                },
                {
                    "AirportCode": "ltu",
                    "AirportName": "LATUR",
                    "CityCode": "ltu"
                },
                {
                    "AirportCode": "LUA",
                    "AirportName": "Lukla",
                    "CityCode": "LUA"
                },
                {
                    "AirportCode": "LUD",
                    "AirportName": "Luderitz",
                    "CityCode": "LUD"
                },
                {
                    "AirportCode": "LUG",
                    "AirportName": "Lugano",
                    "CityCode": "LUG"
                },
                {
                    "AirportCode": "LUH",
                    "AirportName": "Ludhiana",
                    "CityCode": "LUH"
                },
                {
                    "AirportCode": "LUL",
                    "AirportName": "Hesler-Noble Field",
                    "CityCode": "LUL"
                },
                {
                    "AirportCode": "LUN",
                    "AirportName": "Lusaka",
                    "CityCode": "LUN"
                },
                {
                    "AirportCode": "LUO",
                    "AirportName": "Luena",
                    "CityCode": "LUO"
                },
                {
                    "AirportCode": "LUP",
                    "AirportName": "Kalaupapa",
                    "CityCode": "LUP"
                },
                {
                    "AirportCode": "LUQ",
                    "AirportName": "San Luis",
                    "CityCode": "LUQ"
                },
                {
                    "AirportCode": "LUV",
                    "AirportName": "Langgur",
                    "CityCode": "LUV"
                },
                {
                    "AirportCode": "LUW",
                    "AirportName": "Luwuk",
                    "CityCode": "LUW"
                },
                {
                    "AirportCode": "LUX",
                    "AirportName": "Luxembourg",
                    "CityCode": "LUX"
                },
                {
                    "AirportCode": "LVB",
                    "AirportName": "Dos Galpoes",
                    "CityCode": "LVB"
                },
                {
                    "AirportCode": "LVD",
                    "AirportName": "Lime Village",
                    "CityCode": "LVD"
                },
                {
                    "AirportCode": "LVI",
                    "AirportName": "Livingstone",
                    "CityCode": "LVI"
                },
                {
                    "AirportCode": "LVO",
                    "AirportName": "Laverton",
                    "CityCode": "LVO"
                },
                {
                    "AirportCode": "LVS",
                    "AirportName": "Las Vegas",
                    "CityCode": "LVS"
                },
                {
                    "AirportCode": "LWB",
                    "AirportName": "Greenbrier Valley",
                    "CityCode": "LWB"
                },
                {
                    "AirportCode": "LWE",
                    "AirportName": "Lewoleba",
                    "CityCode": "LWE"
                },
                {
                    "AirportCode": "LWK",
                    "AirportName": "Lerwick/Tingwall",
                    "CityCode": "SDZ"
                },
                {
                    "AirportCode": "LWN",
                    "AirportName": "Leninakan",
                    "CityCode": "LWN"
                },
                {
                    "AirportCode": "LWO",
                    "AirportName": "Snilow",
                    "CityCode": "LWO"
                },
                {
                    "AirportCode": "LWS",
                    "AirportName": "Nez Perce County Regional",
                    "CityCode": "LWS"
                },
                {
                    "AirportCode": "LWT",
                    "AirportName": "Lewistown Municipal",
                    "CityCode": "LWT"
                },
                {
                    "AirportCode": "LXA",
                    "AirportName": "Lhasa",
                    "CityCode": "LXA"
                },
                {
                    "AirportCode": "LXG",
                    "AirportName": "Luang Namtha",
                    "CityCode": "LXG"
                },
                {
                    "AirportCode": "LXR",
                    "AirportName": "Luxor",
                    "CityCode": "LXR"
                },
                {
                    "AirportCode": "LXS",
                    "AirportName": "Lemnos",
                    "CityCode": "LXS"
                },
                {
                    "AirportCode": "LYA",
                    "AirportName": "Luoyang",
                    "CityCode": "LYA"
                },
                {
                    "AirportCode": "LYB",
                    "AirportName": "Little Cayman",
                    "CityCode": "LYB"
                },
                {
                    "AirportCode": "LYC",
                    "AirportName": "Lycksele",
                    "CityCode": "LYC"
                },
                {
                    "AirportCode": "LYG",
                    "AirportName": "Lianyungang",
                    "CityCode": "LYG"
                },
                {
                    "AirportCode": "LYH",
                    "AirportName": "Preston-Glenn Field",
                    "CityCode": "LYH"
                },
                {
                    "AirportCode": "LYN",
                    "AirportName": "Bron",
                    "CityCode": "LYS"
                },
                {
                    "AirportCode": "LYP",
                    "AirportName": "Faisalabad",
                    "CityCode": "LYP"
                },
                {
                    "AirportCode": "LYR",
                    "AirportName": "Svalbard",
                    "CityCode": "LYR"
                },
                {
                    "AirportCode": "LYS",
                    "AirportName": "St Exupery",
                    "CityCode": "LYS"
                },
                {
                    "AirportCode": "LYX",
                    "AirportName": "Lydd",
                    "CityCode": "LYX"
                },
                {
                    "AirportCode": "LZC",
                    "AirportName": "Lazaro Cardenas",
                    "CityCode": "LZC"
                },
                {
                    "AirportCode": "LZH",
                    "AirportName": "Liuzhou",
                    "CityCode": "LZH"
                },
                {
                    "AirportCode": "LZR",
                    "AirportName": "Lizard Island",
                    "CityCode": "LZR"
                },
                {
                    "AirportCode": "MAA",
                    "AirportName": "Chennai",
                    "CityCode": "MAA"
                },
                {
                    "AirportCode": "MAB",
                    "AirportName": "Maraba",
                    "CityCode": "MAB"
                },
                {
                    "AirportCode": "MAD",
                    "AirportName": "Barajas",
                    "CityCode": "MAD"
                },
                {
                    "AirportCode": "MAE",
                    "AirportName": "Madera",
                    "CityCode": "MAE"
                },
                {
                    "AirportCode": "MAF",
                    "AirportName": "Odessa Regional",
                    "CityCode": "MAF"
                },
                {
                    "AirportCode": "MAG",
                    "AirportName": "Madang",
                    "CityCode": "MAG"
                },
                {
                    "AirportCode": "MAH",
                    "AirportName": "Menorca",
                    "CityCode": "MAH"
                },
                {
                    "AirportCode": "MAJ",
                    "AirportName": "Amata Kabua Int'l",
                    "CityCode": "MAJ"
                },
                {
                    "AirportCode": "MAL",
                    "AirportName": "Mangole",
                    "CityCode": "MAL"
                },
                {
                    "AirportCode": "MAN",
                    "AirportName": "Manchester Int'l",
                    "CityCode": "MAN"
                },
                {
                    "AirportCode": "MAO",
                    "AirportName": "Eduardo Gomes Int'l",
                    "CityCode": "MAO"
                },
                {
                    "AirportCode": "MAP",
                    "AirportName": "Mamai",
                    "CityCode": "MAP"
                },
                {
                    "AirportCode": "MAQ",
                    "AirportName": "Mae Sot",
                    "CityCode": "MAQ"
                },
                {
                    "AirportCode": "MAR",
                    "AirportName": "La Chinita",
                    "CityCode": "MAR"
                },
                {
                    "AirportCode": "MAS",
                    "AirportName": "Momote",
                    "CityCode": "MAS"
                },
                {
                    "AirportCode": "MAU",
                    "AirportName": "Maupiti",
                    "CityCode": "MAU"
                },
                {
                    "AirportCode": "MAV",
                    "AirportName": "Maloelap Island",
                    "CityCode": "MAV"
                },
                {
                    "AirportCode": "MAX",
                    "AirportName": "Matam",
                    "CityCode": "MAX"
                },
                {
                    "AirportCode": "MAY",
                    "AirportName": "Mangrove Cay",
                    "CityCode": "MAY"
                },
                {
                    "AirportCode": "MAZ",
                    "AirportName": "Eugenio M De Hostos",
                    "CityCode": "MAZ"
                },
                {
                    "AirportCode": "MBA",
                    "AirportName": "Moi Int'l",
                    "CityCode": "MBA"
                },
                {
                    "AirportCode": "MBB",
                    "AirportName": "Marble Bar",
                    "CityCode": "MBB"
                },
                {
                    "AirportCode": "MBC",
                    "AirportName": "Mbigou",
                    "CityCode": "MBC"
                },
                {
                    "AirportCode": "MBD",
                    "AirportName": "Mmabatho Int'l",
                    "CityCode": "MBD"
                },
                {
                    "AirportCode": "MBE",
                    "AirportName": "Monbetsu",
                    "CityCode": "MBE"
                },
                {
                    "AirportCode": "MBH",
                    "AirportName": "Maryborough",
                    "CityCode": "MBH"
                },
                {
                    "AirportCode": "MBJ",
                    "AirportName": "Sangster Int'l",
                    "CityCode": "MBJ"
                },
                {
                    "AirportCode": "MBL",
                    "AirportName": "Blacker",
                    "CityCode": "MBL"
                },
                {
                    "AirportCode": "MBS",
                    "AirportName": "Tri City",
                    "CityCode": "MBS"
                },
                {
                    "AirportCode": "MBU",
                    "AirportName": "Mbambanakira",
                    "CityCode": "MBU"
                },
                {
                    "AirportCode": "MBW",
                    "AirportName": "Moorabbin",
                    "CityCode": "MBW"
                },
                {
                    "AirportCode": "MBX",
                    "AirportName": "Maribor",
                    "CityCode": "MBX"
                },
                {
                    "AirportCode": "MCA",
                    "AirportName": "Macenta",
                    "CityCode": "MCA"
                },
                {
                    "AirportCode": "MCE",
                    "AirportName": "Merced Municipal",
                    "CityCode": "MCE"
                },
                {
                    "AirportCode": "MCG",
                    "AirportName": "Mcgrath",
                    "CityCode": "MCG"
                },
                {
                    "AirportCode": "MCH",
                    "AirportName": "Machala",
                    "CityCode": "MCH"
                },
                {
                    "AirportCode": "MCI",
                    "AirportName": "Kansas City Int'l",
                    "CityCode": "MKC"
                },
                {
                    "AirportCode": "MCK",
                    "AirportName": "Mccook",
                    "CityCode": "MCK"
                },
                {
                    "AirportCode": "MCM",
                    "AirportName": "Monaco",
                    "CityCode": "MCM"
                },
                {
                    "AirportCode": "MCN",
                    "AirportName": "Lewis B Wilson",
                    "CityCode": "MCN"
                },
                {
                    "AirportCode": "MCO",
                    "AirportName": "Orlando Int'l",
                    "CityCode": "ORL"
                },
                {
                    "AirportCode": "MCP",
                    "AirportName": "Macapa Int'l",
                    "CityCode": "MCP"
                },
                {
                    "AirportCode": "MCT",
                    "AirportName": "Seeb",
                    "CityCode": "MCT"
                },
                {
                    "AirportCode": "MCU",
                    "AirportName": "Gueret (Lepaud)",
                    "CityCode": "MCU"
                },
                {
                    "AirportCode": "MCW",
                    "AirportName": "Mason City",
                    "CityCode": "MCW"
                },
                {
                    "AirportCode": "MCX",
                    "AirportName": "Makhachkala",
                    "CityCode": "MCX"
                },
                {
                    "AirportCode": "MCY",
                    "AirportName": "Maroochydore",
                    "CityCode": "MCY"
                },
                {
                    "AirportCode": "MCZ",
                    "AirportName": "Palmares",
                    "CityCode": "MCZ"
                },
                {
                    "AirportCode": "MDC",
                    "AirportName": "Samratulangi",
                    "CityCode": "MDC"
                },
                {
                    "AirportCode": "MDE",
                    "AirportName": "Jose Marie Cordova",
                    "CityCode": "MDE"
                },
                {
                    "AirportCode": "MDF",
                    "AirportName": "Medford",
                    "CityCode": "MDF"
                },
                {
                    "AirportCode": "MDI",
                    "AirportName": "Makurdi",
                    "CityCode": "MDI"
                },
                {
                    "AirportCode": "MDK",
                    "AirportName": "Mbandaka",
                    "CityCode": "MDK"
                },
                {
                    "AirportCode": "MDL",
                    "AirportName": "Annisaton",
                    "CityCode": "MDL"
                },
                {
                    "AirportCode": "MDP",
                    "AirportName": "Mindiptana",
                    "CityCode": "MDP"
                },
                {
                    "AirportCode": "MDQ",
                    "AirportName": "Mar Del Plata",
                    "CityCode": "MDQ"
                },
                {
                    "AirportCode": "MDS",
                    "AirportName": "Middle Caicos",
                    "CityCode": "MDS"
                },
                {
                    "AirportCode": "MDT",
                    "AirportName": "Harrisburg Int'l",
                    "CityCode": "HAR"
                },
                {
                    "AirportCode": "MDU",
                    "AirportName": "Mendi",
                    "CityCode": "MDU"
                },
                {
                    "AirportCode": "MDV",
                    "AirportName": "Medouneu",
                    "CityCode": "MDV"
                },
                {
                    "AirportCode": "MDW",
                    "AirportName": "Midway",
                    "CityCode": "CHI"
                },
                {
                    "AirportCode": "MDZ",
                    "AirportName": "El Plumerillo",
                    "CityCode": "MDZ"
                },
                {
                    "AirportCode": "MEB",
                    "AirportName": "Essendon",
                    "CityCode": "MEL"
                },
                {
                    "AirportCode": "MEC",
                    "AirportName": "Manta",
                    "CityCode": "MEC"
                },
                {
                    "AirportCode": "MED",
                    "AirportName": "MADINAH",
                    "CityCode": "MED"
                },
                {
                    "AirportCode": "MEE",
                    "AirportName": "Mare",
                    "CityCode": "MEE"
                },
                {
                    "AirportCode": "MEF",
                    "AirportName": "Melfi",
                    "CityCode": "MEF"
                },
                {
                    "AirportCode": "MEG",
                    "AirportName": "Malange",
                    "CityCode": "MEG"
                },
                {
                    "AirportCode": "MEH",
                    "AirportName": "Mehamn",
                    "CityCode": "MEH"
                },
                {
                    "AirportCode": "MEL",
                    "AirportName": "Tullamarine",
                    "CityCode": "MEL"
                },
                {
                    "AirportCode": "MEM",
                    "AirportName": "Memphis Int'l",
                    "CityCode": "MEM"
                },
                {
                    "AirportCode": "MES",
                    "AirportName": "Polania",
                    "CityCode": "MES"
                },
                {
                    "AirportCode": "MEX",
                    "AirportName": "Juarez Int'l",
                    "CityCode": "MEX"
                },
                {
                    "AirportCode": "MEY",
                    "AirportName": "Meghauli",
                    "CityCode": "MEY"
                },
                {
                    "AirportCode": "MEZ",
                    "AirportName": "Messina",
                    "CityCode": "MEZ"
                },
                {
                    "AirportCode": "MFA",
                    "AirportName": "Mafia",
                    "CityCode": "MFA"
                },
                {
                    "AirportCode": "MFC",
                    "AirportName": "Mafeteng",
                    "CityCode": "MFC"
                },
                {
                    "AirportCode": "MFE",
                    "AirportName": "Miller Int'l",
                    "CityCode": "MFE"
                },
                {
                    "AirportCode": "MFF",
                    "AirportName": "Moanda",
                    "CityCode": "MFF"
                },
                {
                    "AirportCode": "MFG",
                    "AirportName": "Muzaffarabad",
                    "CityCode": "MFG"
                },
                {
                    "AirportCode": "MFJ",
                    "AirportName": "Moala",
                    "CityCode": "MFJ"
                },
                {
                    "AirportCode": "MFM",
                    "AirportName": "Macau",
                    "CityCode": "MFM"
                },
                {
                    "AirportCode": "MFN",
                    "AirportName": "Milford Sound",
                    "CityCode": "MFN"
                },
                {
                    "AirportCode": "MFQ",
                    "AirportName": "Maradi",
                    "CityCode": "MFQ"
                },
                {
                    "AirportCode": "MFR",
                    "AirportName": "Jackson County",
                    "CityCode": "MFR"
                },
                {
                    "AirportCode": "MFU",
                    "AirportName": "Mfuwe",
                    "CityCode": "MFU"
                },
                {
                    "AirportCode": "MGA",
                    "AirportName": "Augusto C Sandino",
                    "CityCode": "MGA"
                },
                {
                    "AirportCode": "MGB",
                    "AirportName": "Mount Gambier",
                    "CityCode": "MGB"
                },
                {
                    "AirportCode": "MGD",
                    "AirportName": "Magdalena",
                    "CityCode": "MGD"
                },
                {
                    "AirportCode": "MGF",
                    "AirportName": "Maringa",
                    "CityCode": "MGF"
                },
                {
                    "AirportCode": "MGH",
                    "AirportName": "Margate",
                    "CityCode": "MGH"
                },
                {
                    "AirportCode": "MGL",
                    "AirportName": "Monchengladbach",
                    "CityCode": "MGL"
                },
                {
                    "AirportCode": "MGM",
                    "AirportName": "Dannelly Field",
                    "CityCode": "MGM"
                },
                {
                    "AirportCode": "MGQ",
                    "AirportName": "Mogadishu Int'l",
                    "CityCode": "MGQ"
                },
                {
                    "AirportCode": "MGS",
                    "AirportName": "Mangaia Island",
                    "CityCode": "MGS"
                },
                {
                    "AirportCode": "MGT",
                    "AirportName": "Millingimbi",
                    "CityCode": "MGT"
                },
                {
                    "AirportCode": "MGW",
                    "AirportName": "Morgantown",
                    "CityCode": "MGW"
                },
                {
                    "AirportCode": "MGX",
                    "AirportName": "Moabi",
                    "CityCode": "MGX"
                },
                {
                    "AirportCode": "MGY",
                    "AirportName": "Montgomery Co",
                    "CityCode": "DAY"
                },
                {
                    "AirportCode": "MGZ",
                    "AirportName": "Myeik",
                    "CityCode": "MGZ"
                },
                {
                    "AirportCode": "MHD",
                    "AirportName": "Mashad",
                    "CityCode": "MHD"
                },
                {
                    "AirportCode": "MHE",
                    "AirportName": "Mitchell Municipal",
                    "CityCode": "MHE"
                },
                {
                    "AirportCode": "MHH",
                    "AirportName": "Marsh Harbour Int'l",
                    "CityCode": "MHH"
                },
                {
                    "AirportCode": "MHK",
                    "AirportName": "Manhattan Municipal",
                    "CityCode": "MHK"
                },
                {
                    "AirportCode": "MHQ",
                    "AirportName": "Mariehamn",
                    "CityCode": "MHQ"
                },
                {
                    "AirportCode": "MHT",
                    "AirportName": "Manchester",
                    "CityCode": "MHT"
                },
                {
                    "AirportCode": "MHV",
                    "AirportName": "Kern County",
                    "CityCode": "MHV"
                },
                {
                    "AirportCode": "MHX",
                    "AirportName": "Manihiki Island",
                    "CityCode": "MHX"
                },
                {
                    "AirportCode": "MHY",
                    "AirportName": "Morehead",
                    "CityCode": "MHY"
                },
                {
                    "AirportCode": "MIA",
                    "AirportName": "Miami Int'l",
                    "CityCode": "MIA"
                },
                {
                    "AirportCode": "MID",
                    "AirportName": "Rejon",
                    "CityCode": "MID"
                },
                {
                    "AirportCode": "MIE",
                    "AirportName": "Delaware County",
                    "CityCode": "MIE"
                },
                {
                    "AirportCode": "MII",
                    "AirportName": "Dr Gasto Vidigal",
                    "CityCode": "MII"
                },
                {
                    "AirportCode": "MIK",
                    "AirportName": "Mikkeli",
                    "CityCode": "MIK"
                },
                {
                    "AirportCode": "MIM",
                    "AirportName": "Merimbula",
                    "CityCode": "MIM"
                },
                {
                    "AirportCode": "MIR",
                    "AirportName": "Habib Bourguiba Int'l",
                    "CityCode": "MIR"
                },
                {
                    "AirportCode": "MIS",
                    "AirportName": "Misima Island",
                    "CityCode": "MIS"
                },
                {
                    "AirportCode": "MIU",
                    "AirportName": "Maiduguri",
                    "CityCode": "MIU"
                },
                {
                    "AirportCode": "MJA",
                    "AirportName": "Manja",
                    "CityCode": "MJA"
                },
                {
                    "AirportCode": "MJB",
                    "AirportName": "Mejit Island",
                    "CityCode": "MJB"
                },
                {
                    "AirportCode": "MJC",
                    "AirportName": "Man",
                    "CityCode": "MJC"
                },
                {
                    "AirportCode": "MJD",
                    "AirportName": "Mohenjodaro",
                    "CityCode": "MJD"
                },
                {
                    "AirportCode": "MJE",
                    "AirportName": "Majkin",
                    "CityCode": "MJE"
                },
                {
                    "AirportCode": "MJF",
                    "AirportName": "Kjaerstad",
                    "CityCode": "MJF"
                },
                {
                    "AirportCode": "MJL",
                    "AirportName": "Mouila",
                    "CityCode": "MJL"
                },
                {
                    "AirportCode": "MJM",
                    "AirportName": "Mbuji Mayi",
                    "CityCode": "MJM"
                },
                {
                    "AirportCode": "MJN",
                    "AirportName": "Amborovy",
                    "CityCode": "MJN"
                },
                {
                    "AirportCode": "MJT",
                    "AirportName": "Mytilene",
                    "CityCode": "MJT"
                },
                {
                    "AirportCode": "MJU",
                    "AirportName": "Mamuju",
                    "CityCode": "MJU"
                },
                {
                    "AirportCode": "MJV",
                    "AirportName": "San Javier",
                    "CityCode": "MJV"
                },
                {
                    "AirportCode": "MJZ",
                    "AirportName": "Mirnyj",
                    "CityCode": "MJZ"
                },
                {
                    "AirportCode": "MKB",
                    "AirportName": "Mekambo",
                    "CityCode": "MKB"
                },
                {
                    "AirportCode": "MKE",
                    "AirportName": "General Mitchell",
                    "CityCode": "MKE"
                },
                {
                    "AirportCode": "MKG",
                    "AirportName": "Muskegon",
                    "CityCode": "MKG"
                },
                {
                    "AirportCode": "MKH",
                    "AirportName": "Mokhotlong",
                    "CityCode": "MKH"
                },
                {
                    "AirportCode": "MKI",
                    "AirportName": "M'Boki",
                    "CityCode": "MKI"
                },
                {
                    "AirportCode": "MKJ",
                    "AirportName": "Makoua",
                    "CityCode": "MKJ"
                },
                {
                    "AirportCode": "MKK",
                    "AirportName": "Molokai",
                    "CityCode": "MKK"
                },
                {
                    "AirportCode": "MKL",
                    "AirportName": "Mckellar",
                    "CityCode": "MKL"
                },
                {
                    "AirportCode": "MKM",
                    "AirportName": "Mukah",
                    "CityCode": "MKM"
                },
                {
                    "AirportCode": "MKP",
                    "AirportName": "Makemo",
                    "CityCode": "MKP"
                },
                {
                    "AirportCode": "MKQ",
                    "AirportName": "Mopah",
                    "CityCode": "MKQ"
                },
                {
                    "AirportCode": "MKR",
                    "AirportName": "Meekatharra",
                    "CityCode": "MKR"
                },
                {
                    "AirportCode": "MKS",
                    "AirportName": "Mekane Selam",
                    "CityCode": "MKS"
                },
                {
                    "AirportCode": "MKU",
                    "AirportName": "Makokou",
                    "CityCode": "MKU"
                },
                {
                    "AirportCode": "MKW",
                    "AirportName": "Rendani",
                    "CityCode": "MKW"
                },
                {
                    "AirportCode": "MKY",
                    "AirportName": "Mackay",
                    "CityCode": "MKY"
                },
                {
                    "AirportCode": "MKZ",
                    "AirportName": "Batu Berendum",
                    "CityCode": "MKZ"
                },
                {
                    "AirportCode": "MLA",
                    "AirportName": "Luqa",
                    "CityCode": "MLA"
                },
                {
                    "AirportCode": "MLB",
                    "AirportName": "Melbourne Int'l",
                    "CityCode": "MLB"
                },
                {
                    "AirportCode": "MLE",
                    "AirportName": "Male Int'l",
                    "CityCode": "MLE"
                },
                {
                    "AirportCode": "MLG",
                    "AirportName": "Malang",
                    "CityCode": "MLG"
                },
                {
                    "AirportCode": "MLH",
                    "AirportName": "Mulhouse Euroairport",
                    "CityCode": "EAP"
                },
                {
                    "AirportCode": "MLI",
                    "AirportName": "Quad-City",
                    "CityCode": "MLI"
                },
                {
                    "AirportCode": "MLL",
                    "AirportName": "Marshall Fortuna",
                    "CityCode": "MLL"
                },
                {
                    "AirportCode": "MLM",
                    "AirportName": "Morelia",
                    "CityCode": "MLM"
                },
                {
                    "AirportCode": "MLN",
                    "AirportName": "Melilla",
                    "CityCode": "MLN"
                },
                {
                    "AirportCode": "MLO",
                    "AirportName": "Milos",
                    "CityCode": "MLO"
                },
                {
                    "AirportCode": "MLQ",
                    "AirportName": "Malalaua",
                    "CityCode": "MLQ"
                },
                {
                    "AirportCode": "MLS",
                    "AirportName": "Miles City Municipal",
                    "CityCode": "MLS"
                },
                {
                    "AirportCode": "MLU",
                    "AirportName": "Monroe Municipal",
                    "CityCode": "MLU"
                },
                {
                    "AirportCode": "MLW",
                    "AirportName": "Sprigg Payne",
                    "CityCode": "MLW"
                },
                {
                    "AirportCode": "MLX",
                    "AirportName": "Malatya",
                    "CityCode": "MLX"
                },
                {
                    "AirportCode": "MLY",
                    "AirportName": "Manley Hot Spring",
                    "CityCode": "MLY"
                },
                {
                    "AirportCode": "MLZ",
                    "AirportName": "Melo",
                    "CityCode": "MLZ"
                },
                {
                    "AirportCode": "MMB",
                    "AirportName": "Memanbetsu",
                    "CityCode": "MMB"
                },
                {
                    "AirportCode": "MMD",
                    "AirportName": "Maridor",
                    "CityCode": "MMD"
                },
                {
                    "AirportCode": "MME",
                    "AirportName": "Teesside int'l",
                    "CityCode": "MME"
                },
                {
                    "AirportCode": "MMF",
                    "AirportName": "Mamfe",
                    "CityCode": "MMF"
                },
                {
                    "AirportCode": "MMG",
                    "AirportName": "Mount Magnet",
                    "CityCode": "MMG"
                },
                {
                    "AirportCode": "MMH",
                    "AirportName": "Mammoth Lakes",
                    "CityCode": "MMH"
                },
                {
                    "AirportCode": "MMJ",
                    "AirportName": "Matsumoto",
                    "CityCode": "MMJ"
                },
                {
                    "AirportCode": "MMK",
                    "AirportName": "Murmansk",
                    "CityCode": "MMK"
                },
                {
                    "AirportCode": "MML",
                    "AirportName": "Marshall Municipal-Ryan Field",
                    "CityCode": "MML"
                },
                {
                    "AirportCode": "MMM",
                    "AirportName": "Middlemount",
                    "CityCode": "MMM"
                },
                {
                    "AirportCode": "MMO",
                    "AirportName": "Vila Do Maio",
                    "CityCode": "MMO"
                },
                {
                    "AirportCode": "MMP",
                    "AirportName": "Mompos",
                    "CityCode": "MMP"
                },
                {
                    "AirportCode": "MMU",
                    "AirportName": "Morristown Municipal",
                    "CityCode": "MMU"
                },
                {
                    "AirportCode": "MMX",
                    "AirportName": "Sturup",
                    "CityCode": "MMA"
                },
                {
                    "AirportCode": "MMY",
                    "AirportName": "Hirara",
                    "CityCode": "MMY"
                },
                {
                    "AirportCode": "MMZ",
                    "AirportName": "Maimana",
                    "CityCode": "MMZ"
                },
                {
                    "AirportCode": "MNA",
                    "AirportName": "Melangguane",
                    "CityCode": "MNA"
                },
                {
                    "AirportCode": "MNB",
                    "AirportName": "Moanda",
                    "CityCode": "MNB"
                },
                {
                    "AirportCode": "MNC",
                    "AirportName": "Nacala",
                    "CityCode": "MNC"
                },
                {
                    "AirportCode": "MNF",
                    "AirportName": "Mana Islands",
                    "CityCode": "MNF"
                },
                {
                    "AirportCode": "MNI",
                    "AirportName": "Blackburne",
                    "CityCode": "MNI"
                },
                {
                    "AirportCode": "MNJ",
                    "AirportName": "Mananjary",
                    "CityCode": "MNJ"
                },
                {
                    "AirportCode": "MNK",
                    "AirportName": "Maiana",
                    "CityCode": "MNK"
                },
                {
                    "AirportCode": "MNL",
                    "AirportName": "Ninoy Aquino Int'l",
                    "CityCode": "MNL"
                },
                {
                    "AirportCode": "MNM",
                    "AirportName": "Marinette Menomin",
                    "CityCode": "MNM"
                },
                {
                    "AirportCode": "MNT",
                    "AirportName": "Minto",
                    "CityCode": "MNT"
                },
                {
                    "AirportCode": "MNU",
                    "AirportName": "Maulmyine",
                    "CityCode": "MNU"
                },
                {
                    "AirportCode": "MNY",
                    "AirportName": "Mono",
                    "CityCode": "MNY"
                },
                {
                    "AirportCode": "MOA",
                    "AirportName": "Orestes Acosta",
                    "CityCode": "MOA"
                },
                {
                    "AirportCode": "MOB",
                    "AirportName": "Mobile Municipal",
                    "CityCode": "MOB"
                },
                {
                    "AirportCode": "MOC",
                    "AirportName": "Montes Claros",
                    "CityCode": "MOC"
                },
                {
                    "AirportCode": "MOD",
                    "AirportName": "Modesto Municipal",
                    "CityCode": "MOD"
                },
                {
                    "AirportCode": "MOF",
                    "AirportName": "Waioti",
                    "CityCode": "MOF"
                },
                {
                    "AirportCode": "MOG",
                    "AirportName": "Mong Hsat",
                    "CityCode": "MOG"
                },
                {
                    "AirportCode": "MOI",
                    "AirportName": "Mitiaro Island",
                    "CityCode": "MOI"
                },
                {
                    "AirportCode": "MOL",
                    "AirportName": "Aro",
                    "CityCode": "MOL"
                },
                {
                    "AirportCode": "MOM",
                    "AirportName": "Moudjeria",
                    "CityCode": "MOM"
                },
                {
                    "AirportCode": "MON",
                    "AirportName": "Mount Cook",
                    "CityCode": "MON"
                },
                {
                    "AirportCode": "MOQ",
                    "AirportName": "Morondava",
                    "CityCode": "MOQ"
                },
                {
                    "AirportCode": "MOT",
                    "AirportName": "Minot Int'l",
                    "CityCode": "MOT"
                },
                {
                    "AirportCode": "MOU",
                    "AirportName": "Mountain Village",
                    "CityCode": "MOU"
                },
                {
                    "AirportCode": "MOV",
                    "AirportName": "Moranbah",
                    "CityCode": "MOV"
                },
                {
                    "AirportCode": "MOZ",
                    "AirportName": "Temae",
                    "CityCode": "MOZ"
                },
                {
                    "AirportCode": "MPA",
                    "AirportName": "Mpacha",
                    "CityCode": "MPA"
                },
                {
                    "AirportCode": "MPD",
                    "AirportName": "Mirpur Khas",
                    "CityCode": "MPD"
                },
                {
                    "AirportCode": "MPL",
                    "AirportName": "Frejorgues",
                    "CityCode": "MPL"
                },
                {
                    "AirportCode": "MPM",
                    "AirportName": "Maputo Int'l",
                    "CityCode": "MPM"
                },
                {
                    "AirportCode": "MPN",
                    "AirportName": "Mount Pleasant",
                    "CityCode": "MPN"
                },
                {
                    "AirportCode": "MPT",
                    "AirportName": "Maliana",
                    "CityCode": "MPT"
                },
                {
                    "AirportCode": "MPW",
                    "AirportName": "Mariupol",
                    "CityCode": "MPW"
                },
                {
                    "AirportCode": "MQF",
                    "AirportName": "Magnitogorsk",
                    "CityCode": "MQF"
                },
                {
                    "AirportCode": "MQL",
                    "AirportName": "Mildura",
                    "CityCode": "MQL"
                },
                {
                    "AirportCode": "MQN",
                    "AirportName": "Mo I Rana",
                    "CityCode": "MQN"
                },
                {
                    "AirportCode": "MQQ",
                    "AirportName": "Moundou",
                    "CityCode": "MQQ"
                },
                {
                    "AirportCode": "MQS",
                    "AirportName": "Mustique Island",
                    "CityCode": "MQS"
                },
                {
                    "AirportCode": "MQT",
                    "AirportName": "Marquette County",
                    "CityCode": "MQT"
                },
                {
                    "AirportCode": "MQX",
                    "AirportName": "Makale",
                    "CityCode": "MQX"
                },
                {
                    "AirportCode": "MRA",
                    "AirportName": "Misurata",
                    "CityCode": "MRA"
                },
                {
                    "AirportCode": "MRD",
                    "AirportName": "A Carnevalli",
                    "CityCode": "MRD"
                },
                {
                    "AirportCode": "MRE",
                    "AirportName": "Mara Lodges",
                    "CityCode": "MRE"
                },
                {
                    "AirportCode": "MRI",
                    "AirportName": "Merrill Field",
                    "CityCode": "ANC"
                },
                {
                    "AirportCode": "MRK",
                    "AirportName": "Marco Island",
                    "CityCode": "MRK"
                },
                {
                    "AirportCode": "MRO",
                    "AirportName": "Masterton",
                    "CityCode": "MRO"
                },
                {
                    "AirportCode": "MRS",
                    "AirportName": "Marseille",
                    "CityCode": "MRS"
                },
                {
                    "AirportCode": "MRU",
                    "AirportName": "Sir Seewoosagur",
                    "CityCode": "MRU"
                },
                {
                    "AirportCode": "MRV",
                    "AirportName": "Mineralnye Vody",
                    "CityCode": "MRV"
                },
                {
                    "AirportCode": "MRY",
                    "AirportName": "Monterey Peninsula",
                    "CityCode": "MRY"
                },
                {
                    "AirportCode": "MRZ",
                    "AirportName": "Moree",
                    "CityCode": "MRZ"
                },
                {
                    "AirportCode": "MSA",
                    "AirportName": "Muskrat Dam",
                    "CityCode": "MSA"
                },
                {
                    "AirportCode": "MSC",
                    "AirportName": "Falcon Field",
                    "CityCode": "MSC"
                },
                {
                    "AirportCode": "MSD",
                    "AirportName": "Mt Pleasant",
                    "CityCode": "MSD"
                },
                {
                    "AirportCode": "MSE",
                    "AirportName": "Kent Int'l",
                    "CityCode": "MSE"
                },
                {
                    "AirportCode": "MSH",
                    "AirportName": "Masirah",
                    "CityCode": "MSH"
                },
                {
                    "AirportCode": "MSJ",
                    "AirportName": "Misawa",
                    "CityCode": "MSJ"
                },
                {
                    "AirportCode": "MSL",
                    "AirportName": "Muscle Shoals",
                    "CityCode": "MSL"
                },
                {
                    "AirportCode": "MSN",
                    "AirportName": "Dane County Regional",
                    "CityCode": "MSN"
                },
                {
                    "AirportCode": "MSO",
                    "AirportName": "Johnson Bell Field",
                    "CityCode": "MSO"
                },
                {
                    "AirportCode": "MSP",
                    "AirportName": "St Paul Int'l",
                    "CityCode": "MSP"
                },
                {
                    "AirportCode": "MSQ",
                    "AirportName": "Minsk",
                    "CityCode": "MSQ"
                },
                {
                    "AirportCode": "MSS",
                    "AirportName": "Richards Field",
                    "CityCode": "MSS"
                },
                {
                    "AirportCode": "MST",
                    "AirportName": "Maastricht/Aachen",
                    "CityCode": "MST"
                },
                {
                    "AirportCode": "MSU",
                    "AirportName": "Moshoeshoe Int'l",
                    "CityCode": "MSU"
                },
                {
                    "AirportCode": "MSV",
                    "AirportName": "Sullivan County Int'l",
                    "CityCode": "MSV"
                },
                {
                    "AirportCode": "MSW",
                    "AirportName": "Massawa",
                    "CityCode": "MSW"
                },
                {
                    "AirportCode": "MSY",
                    "AirportName": "New Orleans Int'l",
                    "CityCode": "MSY"
                },
                {
                    "AirportCode": "MSZ",
                    "AirportName": "Namibe",
                    "CityCode": "MSZ"
                },
                {
                    "AirportCode": "MTF",
                    "AirportName": "Mizan Teferi",
                    "CityCode": "MTF"
                },
                {
                    "AirportCode": "MTH",
                    "AirportName": "Marathon Flight Strip",
                    "CityCode": "MTH"
                },
                {
                    "AirportCode": "MTJ",
                    "AirportName": "Montrose County",
                    "CityCode": "MTJ"
                },
                {
                    "AirportCode": "MTK",
                    "AirportName": "Makin Island",
                    "CityCode": "MTK"
                },
                {
                    "AirportCode": "MTL",
                    "AirportName": "Maitland",
                    "CityCode": "MTL"
                },
                {
                    "AirportCode": "MTO",
                    "AirportName": "Coles County Memorial",
                    "CityCode": "MTO"
                },
                {
                    "AirportCode": "MTR",
                    "AirportName": "S. Jeronimo",
                    "CityCode": "MTR"
                },
                {
                    "AirportCode": "MTS",
                    "AirportName": "Matsapha Int'l",
                    "CityCode": "MTS"
                },
                {
                    "AirportCode": "MTT",
                    "AirportName": "Minatitlan",
                    "CityCode": "MTT"
                },
                {
                    "AirportCode": "MTV",
                    "AirportName": "Mota Lava",
                    "CityCode": "MTV"
                },
                {
                    "AirportCode": "MTY",
                    "AirportName": "Gen Mariano Escobedo",
                    "CityCode": "MTY"
                },
                {
                    "AirportCode": "MTZ",
                    "AirportName": "Masada",
                    "CityCode": "MTZ"
                },
                {
                    "AirportCode": "MUA",
                    "AirportName": "Munda",
                    "CityCode": "MUA"
                },
                {
                    "AirportCode": "MUB",
                    "AirportName": "Maun",
                    "CityCode": "MUB"
                },
                {
                    "AirportCode": "MUC",
                    "AirportName": "Franz Josef Strauss",
                    "CityCode": "MUC"
                },
                {
                    "AirportCode": "MUE",
                    "AirportName": "Kamuela",
                    "CityCode": "MUE"
                },
                {
                    "AirportCode": "MUF",
                    "AirportName": "Muting",
                    "CityCode": "MUF"
                },
                {
                    "AirportCode": "MUJ",
                    "AirportName": "Mui",
                    "CityCode": "MUJ"
                },
                {
                    "AirportCode": "MUK",
                    "AirportName": "Mauke Island",
                    "CityCode": "MUK"
                },
                {
                    "AirportCode": "MUM",
                    "AirportName": "MUMIAS",
                    "CityCode": "MUM"
                },
                {
                    "AirportCode": "MUN",
                    "AirportName": "Quiriquire",
                    "CityCode": "MUN"
                },
                {
                    "AirportCode": "MUR",
                    "AirportName": "Marudi",
                    "CityCode": "MUR"
                },
                {
                    "AirportCode": "MUX",
                    "AirportName": "Multan",
                    "CityCode": "MUX"
                },
                {
                    "AirportCode": "MUY",
                    "AirportName": "Mouyondzi",
                    "CityCode": "MUY"
                },
                {
                    "AirportCode": "MUZ",
                    "AirportName": "Musoma",
                    "CityCode": "MUZ"
                },
                {
                    "AirportCode": "MVB",
                    "AirportName": "Franceville/Mvengue",
                    "CityCode": "MVB"
                },
                {
                    "AirportCode": "MVD",
                    "AirportName": "Carrasco",
                    "CityCode": "MVD"
                },
                {
                    "AirportCode": "MVN",
                    "AirportName": "Mt Vernon",
                    "CityCode": "MVN"
                },
                {
                    "AirportCode": "MVO",
                    "AirportName": "Mongo",
                    "CityCode": "MVO"
                },
                {
                    "AirportCode": "MVP",
                    "AirportName": "Mitu",
                    "CityCode": "MVP"
                },
                {
                    "AirportCode": "MVQ",
                    "AirportName": "Mogilev",
                    "CityCode": "MVQ"
                },
                {
                    "AirportCode": "MVR",
                    "AirportName": "Salam",
                    "CityCode": "MVR"
                },
                {
                    "AirportCode": "MVT",
                    "AirportName": "Mataiva",
                    "CityCode": "MVT"
                },
                {
                    "AirportCode": "MVX",
                    "AirportName": "Minvoul",
                    "CityCode": "MVX"
                },
                {
                    "AirportCode": "MVY",
                    "AirportName": "Marthas Vineyard",
                    "CityCode": "MVY"
                },
                {
                    "AirportCode": "MVZ",
                    "AirportName": "Masvingo",
                    "CityCode": "MVZ"
                },
                {
                    "AirportCode": "MWA",
                    "AirportName": "Williamson County",
                    "CityCode": "MWA"
                },
                {
                    "AirportCode": "MWD",
                    "AirportName": "Mianwali",
                    "CityCode": "MWD"
                },
                {
                    "AirportCode": "MWE",
                    "AirportName": "Merowe",
                    "CityCode": "MWE"
                },
                {
                    "AirportCode": "MWF",
                    "AirportName": "Maewo",
                    "CityCode": "MWF"
                },
                {
                    "AirportCode": "MWH",
                    "AirportName": "Grant County",
                    "CityCode": "MWH"
                },
                {
                    "AirportCode": "MWZ",
                    "AirportName": "Mwanza",
                    "CityCode": "MWZ"
                },
                {
                    "AirportCode": "MXJ",
                    "AirportName": "Minna",
                    "CityCode": "MXJ"
                },
                {
                    "AirportCode": "MXL",
                    "AirportName": "Mexicali",
                    "CityCode": "MXL"
                },
                {
                    "AirportCode": "MXM",
                    "AirportName": "Morombe",
                    "CityCode": "MXM"
                },
                {
                    "AirportCode": "MXP",
                    "AirportName": "Malpensa",
                    "CityCode": "MIL"
                },
                {
                    "AirportCode": "MXS",
                    "AirportName": "Maota Savaii Island",
                    "CityCode": "MXS"
                },
                {
                    "AirportCode": "MXT",
                    "AirportName": "Maintirano",
                    "CityCode": "MXT"
                },
                {
                    "AirportCode": "MXX",
                    "AirportName": "Mora",
                    "CityCode": "MXX"
                },
                {
                    "AirportCode": "MXZ",
                    "AirportName": "Meixian",
                    "CityCode": "MXZ"
                },
                {
                    "AirportCode": "MYA",
                    "AirportName": "Moruya",
                    "CityCode": "MYA"
                },
                {
                    "AirportCode": "MYB",
                    "AirportName": "Mayoumba",
                    "CityCode": "MYB"
                },
                {
                    "AirportCode": "MYD",
                    "AirportName": "Malindi",
                    "CityCode": "MYD"
                },
                {
                    "AirportCode": "MYE",
                    "AirportName": "Miyake Jima",
                    "CityCode": "MYE"
                },
                {
                    "AirportCode": "MYF",
                    "AirportName": "Montgomery Field",
                    "CityCode": "SAN"
                },
                {
                    "AirportCode": "MYG",
                    "AirportName": "Mayaguana",
                    "CityCode": "MYG"
                },
                {
                    "AirportCode": "MYI",
                    "AirportName": "Murray Island",
                    "CityCode": "MYI"
                },
                {
                    "AirportCode": "MYJ",
                    "AirportName": "Matsuyama",
                    "CityCode": "MYJ"
                },
                {
                    "AirportCode": "MYQ",
                    "AirportName": "Mysore",
                    "CityCode": "MYQ"
                },
                {
                    "AirportCode": "MYR",
                    "AirportName": "Myrtle AFB",
                    "CityCode": "MYR"
                },
                {
                    "AirportCode": "MYT",
                    "AirportName": "Myitkyina",
                    "CityCode": "MYT"
                },
                {
                    "AirportCode": "MYU",
                    "AirportName": "Ellis Field",
                    "CityCode": "MYU"
                },
                {
                    "AirportCode": "MYW",
                    "AirportName": "Mtwara",
                    "CityCode": "MYW"
                },
                {
                    "AirportCode": "MYY",
                    "AirportName": "Miri",
                    "CityCode": "MYY"
                },
                {
                    "AirportCode": "MYZ",
                    "AirportName": "Monkey Bay",
                    "CityCode": "MYZ"
                },
                {
                    "AirportCode": "MZB",
                    "AirportName": "Mocimboa Praia",
                    "CityCode": "MZB"
                },
                {
                    "AirportCode": "MZC",
                    "AirportName": "Mitzic",
                    "CityCode": "MZC"
                },
                {
                    "AirportCode": "MZF",
                    "AirportName": "Mzamba (Wild Coas",
                    "CityCode": "MZF"
                },
                {
                    "AirportCode": "MZG",
                    "AirportName": "Makung",
                    "CityCode": "MZG"
                },
                {
                    "AirportCode": "MZI",
                    "AirportName": "Mopti",
                    "CityCode": "MZI"
                },
                {
                    "AirportCode": "MZK",
                    "AirportName": "Marakei",
                    "CityCode": "MZK"
                },
                {
                    "AirportCode": "MZL",
                    "AirportName": "Manizales",
                    "CityCode": "MZL"
                },
                {
                    "AirportCode": "MZO",
                    "AirportName": "Sierra Maestra",
                    "CityCode": "MZO"
                },
                {
                    "AirportCode": "MZP",
                    "AirportName": "Motueka",
                    "CityCode": "MZP"
                },
                {
                    "AirportCode": "MZR",
                    "AirportName": "Mazar I Sharif",
                    "CityCode": "MZR"
                },
                {
                    "AirportCode": "MZT",
                    "AirportName": "Gen Rafael Buelna",
                    "CityCode": "MZT"
                },
                {
                    "AirportCode": "MZX",
                    "AirportName": "Mena",
                    "CityCode": "MZX"
                },
                {
                    "AirportCode": "NAA",
                    "AirportName": "Narrabri",
                    "CityCode": "NAA"
                },
                {
                    "AirportCode": "NAD",
                    "AirportName": "MACANAL",
                    "CityCode": "NAD"
                },
                {
                    "AirportCode": "NAE",
                    "AirportName": "Natitingou",
                    "CityCode": "NAE"
                },
                {
                    "AirportCode": "NAG",
                    "AirportName": "Sonegaon",
                    "CityCode": "NAG"
                },
                {
                    "AirportCode": "NAH",
                    "AirportName": "Naha",
                    "CityCode": "NAH"
                },
                {
                    "AirportCode": "NAK",
                    "AirportName": "Nakhon Ratchasima",
                    "CityCode": "NAK"
                },
                {
                    "AirportCode": "NAL",
                    "AirportName": "Nalchik",
                    "CityCode": "NAL"
                },
                {
                    "AirportCode": "NAN",
                    "AirportName": "Nadi Int'l",
                    "CityCode": "NAN"
                },
                {
                    "AirportCode": "NAP",
                    "AirportName": "Naples",
                    "CityCode": "NAP"
                },
                {
                    "AirportCode": "NAR",
                    "AirportName": "Nare",
                    "CityCode": "NAR"
                },
                {
                    "AirportCode": "NAS",
                    "AirportName": "Nassau Int'l",
                    "CityCode": "NAS"
                },
                {
                    "AirportCode": "NAT",
                    "AirportName": "Augusto Severo",
                    "CityCode": "NAT"
                },
                {
                    "AirportCode": "NAU",
                    "AirportName": "Napuka Island",
                    "CityCode": "NAU"
                },
                {
                    "AirportCode": "NAW",
                    "AirportName": "Narathiwat",
                    "CityCode": "NAW"
                },
                {
                    "AirportCode": "NBB",
                    "AirportName": "Barrancominas",
                    "CityCode": "NBB"
                },
                {
                    "AirportCode": "NBC",
                    "AirportName": "Naberevnye Chelny",
                    "CityCode": "NBC"
                },
                {
                    "AirportCode": "NBE",
                    "AirportName": "Hammamet",
                    "CityCode": "NBE"
                },
                {
                    "AirportCode": "NBO",
                    "AirportName": "Jomo Kenyatta Int'l",
                    "CityCode": "NBO"
                },
                {
                    "AirportCode": "NBX",
                    "AirportName": "Nabire",
                    "CityCode": "NBX"
                },
                {
                    "AirportCode": "NCA",
                    "AirportName": "North Caicos",
                    "CityCode": "NCA"
                },
                {
                    "AirportCode": "NCE",
                    "AirportName": "Cote D'Azur",
                    "CityCode": "NCE"
                },
                {
                    "AirportCode": "NCH",
                    "AirportName": "Nachingwea",
                    "CityCode": "NCH"
                },
                {
                    "AirportCode": "NCI",
                    "AirportName": "Necocli",
                    "CityCode": "NCI"
                },
                {
                    "AirportCode": "NCL",
                    "AirportName": "Newcastle Int'l",
                    "CityCode": "NCL"
                },
                {
                    "AirportCode": "NCS",
                    "AirportName": "Newcastle",
                    "CityCode": "NCS"
                },
                {
                    "AirportCode": "NCU",
                    "AirportName": "Nukus",
                    "CityCode": "NCU"
                },
                {
                    "AirportCode": "NCY",
                    "AirportName": "Annecy-Meythe",
                    "CityCode": "NCY"
                },
                {
                    "AirportCode": "NDB",
                    "AirportName": "Nouadhibou",
                    "CityCode": "NDB"
                },
                {
                    "AirportCode": "NDC",
                    "AirportName": "Nanded",
                    "CityCode": "NDC"
                },
                {
                    "AirportCode": "NDE",
                    "AirportName": "Mandera",
                    "CityCode": "NDE"
                },
                {
                    "AirportCode": "NDJ",
                    "AirportName": "Ndjamena",
                    "CityCode": "NDJ"
                },
                {
                    "AirportCode": "NDK",
                    "AirportName": "Namdrik Island",
                    "CityCode": "NDK"
                },
                {
                    "AirportCode": "NDL",
                    "AirportName": "Ndele",
                    "CityCode": "NDL"
                },
                {
                    "AirportCode": "NDM",
                    "AirportName": "Mendi",
                    "CityCode": "NDM"
                },
                {
                    "AirportCode": "NDR",
                    "AirportName": "El Aroui",
                    "CityCode": "NDR"
                },
                {
                    "AirportCode": "NDU",
                    "AirportName": "Rundu",
                    "CityCode": "NDU"
                },
                {
                    "AirportCode": "NDY",
                    "AirportName": "Sanday",
                    "CityCode": "NDY"
                },
                {
                    "AirportCode": "NEG",
                    "AirportName": "Negril",
                    "CityCode": "NEG"
                },
                {
                    "AirportCode": "NEK",
                    "AirportName": "Nekemt",
                    "CityCode": "NEK"
                },
                {
                    "AirportCode": "NER",
                    "AirportName": "Neryungri",
                    "CityCode": "NER"
                },
                {
                    "AirportCode": "NEV",
                    "AirportName": "Newcastle",
                    "CityCode": "NEV"
                },
                {
                    "AirportCode": "NFO",
                    "AirportName": "Mataaho",
                    "CityCode": "NFO"
                },
                {
                    "AirportCode": "NGB",
                    "AirportName": "Ningbo",
                    "CityCode": "NGB"
                },
                {
                    "AirportCode": "NGD",
                    "AirportName": "Anegada",
                    "CityCode": "NGD"
                },
                {
                    "AirportCode": "NGE",
                    "AirportName": "Ngaoundere",
                    "CityCode": "NGE"
                },
                {
                    "AirportCode": "NGO",
                    "AirportName": "Komaki AFB",
                    "CityCode": "NGO"
                },
                {
                    "AirportCode": "NGS",
                    "AirportName": "Nagasaki",
                    "CityCode": "NGS"
                },
                {
                    "AirportCode": "NGV",
                    "AirportName": "Ngiva",
                    "CityCode": "NGV"
                },
                {
                    "AirportCode": "NHV",
                    "AirportName": "Nuku Hiva",
                    "CityCode": "NHV"
                },
                {
                    "AirportCode": "NIA",
                    "AirportName": "Nimba",
                    "CityCode": "NIA"
                },
                {
                    "AirportCode": "NIB",
                    "AirportName": "Nikolai",
                    "CityCode": "NIB"
                },
                {
                    "AirportCode": "NIG",
                    "AirportName": "Nikunau",
                    "CityCode": "NIG"
                },
                {
                    "AirportCode": "NIM",
                    "AirportName": "Niamey",
                    "CityCode": "NIM"
                },
                {
                    "AirportCode": "NIX",
                    "AirportName": "Nioro",
                    "CityCode": "NIX"
                },
                {
                    "AirportCode": "NJF",
                    "AirportName": "Najaf",
                    "CityCode": "NJF"
                },
                {
                    "AirportCode": "NKC",
                    "AirportName": "Nouakchott",
                    "CityCode": "NKC"
                },
                {
                    "AirportCode": "NKG",
                    "AirportName": "Nanjing",
                    "CityCode": "NKG"
                },
                {
                    "AirportCode": "NKI",
                    "AirportName": "Naukiti",
                    "CityCode": "NKI"
                },
                {
                    "AirportCode": "NKU",
                    "AirportName": "Nkaus",
                    "CityCode": "NKU"
                },
                {
                    "AirportCode": "NKY",
                    "AirportName": "Nkayi",
                    "CityCode": "NKY"
                },
                {
                    "AirportCode": "NLA",
                    "AirportName": "Ndola",
                    "CityCode": "NLA"
                },
                {
                    "AirportCode": "NLD",
                    "AirportName": "Nuevo Laredo Intl",
                    "CityCode": "NLD"
                },
                {
                    "AirportCode": "NLF",
                    "AirportName": "Darnley Island",
                    "CityCode": "NLF"
                },
                {
                    "AirportCode": "NLG",
                    "AirportName": "Nelson Lagoon",
                    "CityCode": "NLG"
                },
                {
                    "AirportCode": "NLK",
                    "AirportName": "Norfolk Island",
                    "CityCode": "NLK"
                },
                {
                    "AirportCode": "NLL",
                    "AirportName": "Nullagine",
                    "CityCode": "NLL"
                },
                {
                    "AirportCode": "NLP",
                    "AirportName": "Nelspruit",
                    "CityCode": "NLP"
                },
                {
                    "AirportCode": "NMB",
                    "AirportName": "Daman",
                    "CityCode": "NMB"
                },
                {
                    "AirportCode": "NME",
                    "AirportName": "Nightmute",
                    "CityCode": "NME"
                },
                {
                    "AirportCode": "NMG",
                    "AirportName": "San Miguel",
                    "CityCode": "NMG"
                },
                {
                    "AirportCode": "NNB",
                    "AirportName": "Santa Ana",
                    "CityCode": "NNB"
                },
                {
                    "AirportCode": "NNI",
                    "AirportName": "Namutoni",
                    "CityCode": "NNI"
                },
                {
                    "AirportCode": "NNK",
                    "AirportName": "Naknek",
                    "CityCode": "NNK"
                },
                {
                    "AirportCode": "NNL",
                    "AirportName": "Nondalton",
                    "CityCode": "NNL"
                },
                {
                    "AirportCode": "NOA",
                    "AirportName": "Nowra",
                    "CityCode": "NOA"
                },
                {
                    "AirportCode": "NOB",
                    "AirportName": "Nosara Beach",
                    "CityCode": "NOB"
                },
                {
                    "AirportCode": "NOC",
                    "AirportName": "Knock Int'l",
                    "CityCode": "NOC"
                },
                {
                    "AirportCode": "NOM",
                    "AirportName": "Nomad River",
                    "CityCode": "NOM"
                },
                {
                    "AirportCode": "NON",
                    "AirportName": "Nonouti",
                    "CityCode": "NON"
                },
                {
                    "AirportCode": "NOR",
                    "AirportName": "Nordfjordur",
                    "CityCode": "NOR"
                },
                {
                    "AirportCode": "NOS",
                    "AirportName": "Fascene",
                    "CityCode": "NOS"
                },
                {
                    "AirportCode": "NOU",
                    "AirportName": "Tontouta",
                    "CityCode": "NOU"
                },
                {
                    "AirportCode": "NOV",
                    "AirportName": "Huambo",
                    "CityCode": "NOV"
                },
                {
                    "AirportCode": "NOZ",
                    "AirportName": "Novokuznetsk",
                    "CityCode": "NOZ"
                },
                {
                    "AirportCode": "NPE",
                    "AirportName": "Hawkes Bay",
                    "CityCode": "NPE"
                },
                {
                    "AirportCode": "NPH",
                    "AirportName": "Nephi",
                    "CityCode": "NPH"
                },
                {
                    "AirportCode": "NPL",
                    "AirportName": "New Plymouth",
                    "CityCode": "NPL"
                },
                {
                    "AirportCode": "NQN",
                    "AirportName": "Neuquen",
                    "CityCode": "NQN"
                },
                {
                    "AirportCode": "NQU",
                    "AirportName": "Nuqui",
                    "CityCode": "NQU"
                },
                {
                    "AirportCode": "NQY",
                    "AirportName": "Newquay",
                    "CityCode": "NQY"
                },
                {
                    "AirportCode": "NRA",
                    "AirportName": "Narrandera",
                    "CityCode": "NRA"
                },
                {
                    "AirportCode": "NRD",
                    "AirportName": "Norderney",
                    "CityCode": "NRD"
                },
                {
                    "AirportCode": "NRK",
                    "AirportName": "Kungsangen",
                    "CityCode": "NRK"
                },
                {
                    "AirportCode": "NRL",
                    "AirportName": "North Ronaldsay",
                    "CityCode": "NRL"
                },
                {
                    "AirportCode": "NRM",
                    "AirportName": "Nara",
                    "CityCode": "NRM"
                },
                {
                    "AirportCode": "NRN",
                    "AirportName": "Weeze",
                    "CityCode": "DUS"
                },
                {
                    "AirportCode": "NRT",
                    "AirportName": "Narita",
                    "CityCode": "TYO"
                },
                {
                    "AirportCode": "NSA",
                    "AirportName": "Noosa",
                    "CityCode": "NSA"
                },
                {
                    "AirportCode": "NSB",
                    "AirportName": "North Sea Plan Base",
                    "CityCode": "BIM"
                },
                {
                    "AirportCode": "NSK",
                    "AirportName": "Norilsk",
                    "CityCode": "NSK"
                },
                {
                    "AirportCode": "NSM",
                    "AirportName": "Norseman",
                    "CityCode": "NSM"
                },
                {
                    "AirportCode": "NSN",
                    "AirportName": "Nelson",
                    "CityCode": "NSN"
                },
                {
                    "AirportCode": "NSO",
                    "AirportName": "Scone",
                    "CityCode": "NSO"
                },
                {
                    "AirportCode": "NST",
                    "AirportName": "Nakon Si Thammarat",
                    "CityCode": "NST"
                },
                {
                    "AirportCode": "NTE",
                    "AirportName": "Nantes Atlantique",
                    "CityCode": "NTE"
                },
                {
                    "AirportCode": "NTI",
                    "AirportName": "Bintuni",
                    "CityCode": "NTI"
                },
                {
                    "AirportCode": "NTL",
                    "AirportName": "Williamtown",
                    "CityCode": "NTL"
                },
                {
                    "AirportCode": "NTM",
                    "AirportName": "Miracema Do Norte",
                    "CityCode": "NTM"
                },
                {
                    "AirportCode": "NTN",
                    "AirportName": "Normanton",
                    "CityCode": "NTN"
                },
                {
                    "AirportCode": "NTT",
                    "AirportName": "Kuini Lavenia",
                    "CityCode": "NTT"
                },
                {
                    "AirportCode": "NTX",
                    "AirportName": "Natuna Ranai",
                    "CityCode": "NTX"
                },
                {
                    "AirportCode": "NTY",
                    "AirportName": "Pilansberg",
                    "CityCode": "NTY"
                },
                {
                    "AirportCode": "NUB",
                    "AirportName": "Numbulwar",
                    "CityCode": "NUB"
                },
                {
                    "AirportCode": "NUE",
                    "AirportName": "Nuremberg",
                    "CityCode": "NUE"
                },
                {
                    "AirportCode": "NUI",
                    "AirportName": "Nuiqsut",
                    "CityCode": "NUI"
                },
                {
                    "AirportCode": "NUK",
                    "AirportName": "Nukutavake",
                    "CityCode": "NUK"
                },
                {
                    "AirportCode": "NUL",
                    "AirportName": "Nulato",
                    "CityCode": "NUL"
                },
                {
                    "AirportCode": "NUP",
                    "AirportName": "Nunapitchuk",
                    "CityCode": "NUP"
                },
                {
                    "AirportCode": "NUS",
                    "AirportName": "Norsup",
                    "CityCode": "NUS"
                },
                {
                    "AirportCode": "NUU",
                    "AirportName": "Nakuru",
                    "CityCode": "NUU"
                },
                {
                    "AirportCode": "NVA",
                    "AirportName": "La Marguita",
                    "CityCode": "NVA"
                },
                {
                    "AirportCode": "NVK",
                    "AirportName": "Framnes",
                    "CityCode": "NVK"
                },
                {
                    "AirportCode": "NVS",
                    "AirportName": "FOURCHAMBAULT",
                    "CityCode": "NVS"
                },
                {
                    "AirportCode": "NVT",
                    "AirportName": "Navegantes",
                    "CityCode": "NVT"
                },
                {
                    "AirportCode": "NVY",
                    "AirportName": "Neyveli",
                    "CityCode": "NVY"
                },
                {
                    "AirportCode": "NWA",
                    "AirportName": "Moheli",
                    "CityCode": "NWA"
                },
                {
                    "AirportCode": "NWI",
                    "AirportName": "Norwich",
                    "CityCode": "NWI"
                },
                {
                    "AirportCode": "NWT",
                    "AirportName": "Nowata",
                    "CityCode": "NWT"
                },
                {
                    "AirportCode": "NYE",
                    "AirportName": "Nyeri",
                    "CityCode": "NYE"
                },
                {
                    "AirportCode": "NYI",
                    "AirportName": "Sunyani",
                    "CityCode": "NYI"
                },
                {
                    "AirportCode": "NYK",
                    "AirportName": "Nanyuki",
                    "CityCode": "NYK"
                },
                {
                    "AirportCode": "NYO",
                    "AirportName": "Skavsta",
                    "CityCode": "STO"
                },
                {
                    "AirportCode": "NYU",
                    "AirportName": "Nyaung U",
                    "CityCode": "NYU"
                },
                {
                    "AirportCode": "NZE",
                    "AirportName": "Nzerekore",
                    "CityCode": "NZE"
                },
                {
                    "AirportCode": "OAG",
                    "AirportName": "Orange Springhill Spr",
                    "CityCode": "OAG"
                },
                {
                    "AirportCode": "OAJ",
                    "AirportName": "Albert J Ellis",
                    "CityCode": "OAJ"
                },
                {
                    "AirportCode": "OAK",
                    "AirportName": "Oakland Int'l",
                    "CityCode": "OAK"
                },
                {
                    "AirportCode": "OAM",
                    "AirportName": "Oamaru",
                    "CityCode": "OAM"
                },
                {
                    "AirportCode": "OAX",
                    "AirportName": "Xoxocotlan",
                    "CityCode": "OAX"
                },
                {
                    "AirportCode": "OBC",
                    "AirportName": "Obock",
                    "CityCode": "OBC"
                },
                {
                    "AirportCode": "OBD",
                    "AirportName": "Obano",
                    "CityCode": "OBD"
                },
                {
                    "AirportCode": "OBF",
                    "AirportName": "Oberpfaffenhofen",
                    "CityCode": "OBF"
                },
                {
                    "AirportCode": "OBM",
                    "AirportName": "Morobe",
                    "CityCode": "OBM"
                },
                {
                    "AirportCode": "OBO",
                    "AirportName": "Obihiro",
                    "CityCode": "OBO"
                },
                {
                    "AirportCode": "OBU",
                    "AirportName": "Kobuk/Wien",
                    "CityCode": "OBU"
                },
                {
                    "AirportCode": "OBX",
                    "AirportName": "Obo",
                    "CityCode": "OBX"
                },
                {
                    "AirportCode": "OCA",
                    "AirportName": "Ocean Reef",
                    "CityCode": "OCA"
                },
                {
                    "AirportCode": "OCC",
                    "AirportName": "Coca",
                    "CityCode": "OCC"
                },
                {
                    "AirportCode": "OCH",
                    "AirportName": "Nacogdoches",
                    "CityCode": "OCH"
                },
                {
                    "AirportCode": "OCJ",
                    "AirportName": "Boscobel",
                    "CityCode": "OCJ"
                },
                {
                    "AirportCode": "OCV",
                    "AirportName": "Ocana",
                    "CityCode": "OCV"
                },
                {
                    "AirportCode": "ODA",
                    "AirportName": "Ouadda",
                    "CityCode": "ODA"
                },
                {
                    "AirportCode": "ODE",
                    "AirportName": "Beldringe",
                    "CityCode": "ODE"
                },
                {
                    "AirportCode": "ODJ",
                    "AirportName": "Ouanda Djalle",
                    "CityCode": "ODJ"
                },
                {
                    "AirportCode": "ODN",
                    "AirportName": "Long Seridan",
                    "CityCode": "ODN"
                },
                {
                    "AirportCode": "ODR",
                    "AirportName": "ORD RIVER",
                    "CityCode": "ODR"
                },
                {
                    "AirportCode": "ODS",
                    "AirportName": "Odessa Central",
                    "CityCode": "ODS"
                },
                {
                    "AirportCode": "ODW",
                    "AirportName": "Oak Harbor",
                    "CityCode": "ODW"
                },
                {
                    "AirportCode": "ODY",
                    "AirportName": "Oudomxay",
                    "CityCode": "ODY"
                },
                {
                    "AirportCode": "OEC",
                    "AirportName": "Ocussi",
                    "CityCode": "OEC"
                },
                {
                    "AirportCode": "OER",
                    "AirportName": "Ornskoldsvik",
                    "CityCode": "OER"
                },
                {
                    "AirportCode": "OES",
                    "AirportName": "San Antonio Oeste",
                    "CityCode": "OES"
                },
                {
                    "AirportCode": "OFI",
                    "AirportName": "Ouango Fitini",
                    "CityCode": "OFI"
                },
                {
                    "AirportCode": "OFJ",
                    "AirportName": "Olafsfjordur",
                    "CityCode": "OFJ"
                },
                {
                    "AirportCode": "OFK",
                    "AirportName": "Stefan Field",
                    "CityCode": "OFK"
                },
                {
                    "AirportCode": "OFU",
                    "AirportName": "Ofu",
                    "CityCode": "OFU"
                },
                {
                    "AirportCode": "OGG",
                    "AirportName": "Kahului",
                    "CityCode": "OGG"
                },
                {
                    "AirportCode": "OGN",
                    "AirportName": "Yonaguni Jima",
                    "CityCode": "OGN"
                },
                {
                    "AirportCode": "OGO",
                    "AirportName": "Abengourou",
                    "CityCode": "OGO"
                },
                {
                    "AirportCode": "OGR",
                    "AirportName": "Bongor",
                    "CityCode": "OGR"
                },
                {
                    "AirportCode": "OGS",
                    "AirportName": "Ogdensburg",
                    "CityCode": "OGS"
                },
                {
                    "AirportCode": "OGX",
                    "AirportName": "Ain Beida",
                    "CityCode": "OGX"
                },
                {
                    "AirportCode": "OGZ",
                    "AirportName": "Vladikavkaz",
                    "CityCode": "OGZ"
                },
                {
                    "AirportCode": "OHD",
                    "AirportName": "Ohrid",
                    "CityCode": "OHD"
                },
                {
                    "AirportCode": "OHI",
                    "AirportName": "Oshakati",
                    "CityCode": "OHI"
                },
                {
                    "AirportCode": "OHR",
                    "AirportName": "Wyk Auf Foehr",
                    "CityCode": "OHR"
                },
                {
                    "AirportCode": "OHT",
                    "AirportName": "Kohat",
                    "CityCode": "OHT"
                },
                {
                    "AirportCode": "OIM",
                    "AirportName": "Oshima",
                    "CityCode": "OIM"
                },
                {
                    "AirportCode": "OIR",
                    "AirportName": "Okushiri",
                    "CityCode": "OIR"
                },
                {
                    "AirportCode": "OIT",
                    "AirportName": "Oita",
                    "CityCode": "OIT"
                },
                {
                    "AirportCode": "OJC",
                    "AirportName": "Johnson Executive",
                    "CityCode": "MKC"
                },
                {
                    "AirportCode": "OKA",
                    "AirportName": "Naha",
                    "CityCode": "OKA"
                },
                {
                    "AirportCode": "OKC",
                    "AirportName": "Will Rogers World",
                    "CityCode": "OKC"
                },
                {
                    "AirportCode": "OKD",
                    "AirportName": "Okadama",
                    "CityCode": "SPK"
                },
                {
                    "AirportCode": "OKE",
                    "AirportName": "Okino Erabu",
                    "CityCode": "OKE"
                },
                {
                    "AirportCode": "OKF",
                    "AirportName": "Okaukuejo",
                    "CityCode": "OKF"
                },
                {
                    "AirportCode": "OKI",
                    "AirportName": "Oki Island",
                    "CityCode": "OKI"
                },
                {
                    "AirportCode": "OKJ",
                    "AirportName": "Okayama",
                    "CityCode": "OKJ"
                },
                {
                    "AirportCode": "OKL",
                    "AirportName": "Oksibil",
                    "CityCode": "OKL"
                },
                {
                    "AirportCode": "OKN",
                    "AirportName": "Okondja",
                    "CityCode": "OKN"
                },
                {
                    "AirportCode": "OKP",
                    "AirportName": "Oksapmin",
                    "CityCode": "OKP"
                },
                {
                    "AirportCode": "OKQ",
                    "AirportName": "Okaba",
                    "CityCode": "OKQ"
                },
                {
                    "AirportCode": "OKR",
                    "AirportName": "Yorke Island",
                    "CityCode": "OKR"
                },
                {
                    "AirportCode": "OLB",
                    "AirportName": "Costa Smeralda",
                    "CityCode": "OLB"
                },
                {
                    "AirportCode": "OLF",
                    "AirportName": "Wolf Point Int'l",
                    "CityCode": "OLF"
                },
                {
                    "AirportCode": "OLJ",
                    "AirportName": "Olpoi",
                    "CityCode": "OLJ"
                },
                {
                    "AirportCode": "OLM",
                    "AirportName": "Olympia",
                    "CityCode": "OLM"
                },
                {
                    "AirportCode": "OLP",
                    "AirportName": "Olympic Dam",
                    "CityCode": "OLP"
                },
                {
                    "AirportCode": "OLQ",
                    "AirportName": "Olsobip",
                    "CityCode": "OLQ"
                },
                {
                    "AirportCode": "OMA",
                    "AirportName": "Eppley Airfield",
                    "CityCode": "OMA"
                },
                {
                    "AirportCode": "OMB",
                    "AirportName": "Omboue",
                    "CityCode": "OMB"
                },
                {
                    "AirportCode": "OMD",
                    "AirportName": "Oranjemund",
                    "CityCode": "OMD"
                },
                {
                    "AirportCode": "OME",
                    "AirportName": "Nome",
                    "CityCode": "OME"
                },
                {
                    "AirportCode": "OMH",
                    "AirportName": "Urmieh",
                    "CityCode": "OMH"
                },
                {
                    "AirportCode": "OMO",
                    "AirportName": "Mostar",
                    "CityCode": "OMO"
                },
                {
                    "AirportCode": "OMR",
                    "AirportName": "Oradea",
                    "CityCode": "OMR"
                },
                {
                    "AirportCode": "OMS",
                    "AirportName": "Omsk",
                    "CityCode": "OMS"
                },
                {
                    "AirportCode": "OND",
                    "AirportName": "Ondangwa",
                    "CityCode": "OND"
                },
                {
                    "AirportCode": "ONG",
                    "AirportName": "Mornington",
                    "CityCode": "ONG"
                },
                {
                    "AirportCode": "ONI",
                    "AirportName": "Moanamani",
                    "CityCode": "ONI"
                },
                {
                    "AirportCode": "ONP",
                    "AirportName": "NEWPORT",
                    "CityCode": "ONP"
                },
                {
                    "AirportCode": "ONS",
                    "AirportName": "Onslow",
                    "CityCode": "ONS"
                },
                {
                    "AirportCode": "ONT",
                    "AirportName": "Ontario Internationa",
                    "CityCode": "ONT"
                },
                {
                    "AirportCode": "ONX",
                    "AirportName": "Colon",
                    "CityCode": "ONX"
                },
                {
                    "AirportCode": "OOK",
                    "AirportName": "Toksook Bay",
                    "CityCode": "OOK"
                },
                {
                    "AirportCode": "OOL",
                    "AirportName": "Coolangatta",
                    "CityCode": "OOL"
                },
                {
                    "AirportCode": "OOM",
                    "AirportName": "Cooma",
                    "CityCode": "OOM"
                },
                {
                    "AirportCode": "OOT",
                    "AirportName": "Onotoa",
                    "CityCode": "OOT"
                },
                {
                    "AirportCode": "OPA",
                    "AirportName": "Kopasker",
                    "CityCode": "OPA"
                },
                {
                    "AirportCode": "OPO",
                    "AirportName": "Porto",
                    "CityCode": "OPO"
                },
                {
                    "AirportCode": "OPU",
                    "AirportName": "Balimo",
                    "CityCode": "OPU"
                },
                {
                    "AirportCode": "ORB",
                    "AirportName": "Orebro-Bofors",
                    "CityCode": "ORB"
                },
                {
                    "AirportCode": "ORC",
                    "AirportName": "Orocue",
                    "CityCode": "ORC"
                },
                {
                    "AirportCode": "ORD",
                    "AirportName": "O Hare Int'l",
                    "CityCode": "CHI"
                },
                {
                    "AirportCode": "ORF",
                    "AirportName": "Norfolk Int'l",
                    "CityCode": "ORF"
                },
                {
                    "AirportCode": "ORG",
                    "AirportName": "Zorg En Hoop",
                    "CityCode": "PBM"
                },
                {
                    "AirportCode": "ORH",
                    "AirportName": "Worcester",
                    "CityCode": "ORH"
                },
                {
                    "AirportCode": "ORK",
                    "AirportName": "Cork",
                    "CityCode": "ORK"
                },
                {
                    "AirportCode": "ORN",
                    "AirportName": "Es Senia",
                    "CityCode": "ORN"
                },
                {
                    "AirportCode": "ORP",
                    "AirportName": "Orapa",
                    "CityCode": "ORP"
                },
                {
                    "AirportCode": "ORV",
                    "AirportName": "Curtis Memorial",
                    "CityCode": "ORV"
                },
                {
                    "AirportCode": "ORW",
                    "AirportName": "Ormara",
                    "CityCode": "ORW"
                },
                {
                    "AirportCode": "ORY",
                    "AirportName": "Orly",
                    "CityCode": "PAR"
                },
                {
                    "AirportCode": "OSD",
                    "AirportName": "Froesoe",
                    "CityCode": "OSD"
                },
                {
                    "AirportCode": "OSH",
                    "AirportName": "Wittman Field",
                    "CityCode": "OSH"
                },
                {
                    "AirportCode": "OSK",
                    "AirportName": "Oskarshamn",
                    "CityCode": "OSK"
                },
                {
                    "AirportCode": "OSL",
                    "AirportName": "Oslo Airport",
                    "CityCode": "OSL"
                },
                {
                    "AirportCode": "OSS",
                    "AirportName": "Osh",
                    "CityCode": "OSS"
                },
                {
                    "AirportCode": "OST",
                    "AirportName": "Ostend",
                    "CityCode": "OST"
                },
                {
                    "AirportCode": "OSU",
                    "AirportName": "Ohio State University",
                    "CityCode": "CMH"
                },
                {
                    "AirportCode": "OSY",
                    "AirportName": "Namsos",
                    "CityCode": "OSY"
                },
                {
                    "AirportCode": "OTA",
                    "AirportName": "Mota",
                    "CityCode": "OTA"
                },
                {
                    "AirportCode": "OTC",
                    "AirportName": "Bol",
                    "CityCode": "OTC"
                },
                {
                    "AirportCode": "OTD",
                    "AirportName": "Contadora",
                    "CityCode": "OTD"
                },
                {
                    "AirportCode": "OTH",
                    "AirportName": "N Bend Coosbay",
                    "CityCode": "OTH"
                },
                {
                    "AirportCode": "OTI",
                    "AirportName": "Morotai Island",
                    "CityCode": "OTI"
                },
                {
                    "AirportCode": "OTL",
                    "AirportName": "Boutilimit",
                    "CityCode": "OTL"
                },
                {
                    "AirportCode": "OTM",
                    "AirportName": "Ottumwa Industrial",
                    "CityCode": "OTM"
                },
                {
                    "AirportCode": "OTP",
                    "AirportName": "Otopeni Int'l",
                    "CityCode": "BUH"
                },
                {
                    "AirportCode": "OTR",
                    "AirportName": "Coto 47",
                    "CityCode": "OTR"
                },
                {
                    "AirportCode": "OTS",
                    "AirportName": "Anacortes",
                    "CityCode": "OTS"
                },
                {
                    "AirportCode": "OTU",
                    "AirportName": "Otu",
                    "CityCode": "OTU"
                },
                {
                    "AirportCode": "OTZ",
                    "AirportName": "Kotzebue",
                    "CityCode": "OTZ"
                },
                {
                    "AirportCode": "OUA",
                    "AirportName": "Ouagadougou",
                    "CityCode": "OUA"
                },
                {
                    "AirportCode": "OUD",
                    "AirportName": "Les Angades",
                    "CityCode": "OUD"
                },
                {
                    "AirportCode": "OUE",
                    "AirportName": "Ouesso",
                    "CityCode": "OUE"
                },
                {
                    "AirportCode": "OUG",
                    "AirportName": "Ouahigouya",
                    "CityCode": "OUG"
                },
                {
                    "AirportCode": "OUL",
                    "AirportName": "Oulu",
                    "CityCode": "OUL"
                },
                {
                    "AirportCode": "OUM",
                    "AirportName": "Oum Hadjer",
                    "CityCode": "OUM"
                },
                {
                    "AirportCode": "OUR",
                    "AirportName": "Batouri",
                    "CityCode": "OUR"
                },
                {
                    "AirportCode": "OUS",
                    "AirportName": "Ourinhos",
                    "CityCode": "OUS"
                },
                {
                    "AirportCode": "OUT",
                    "AirportName": "Bousso",
                    "CityCode": "OUT"
                },
                {
                    "AirportCode": "OUZ",
                    "AirportName": "Zouerate",
                    "CityCode": "OUZ"
                },
                {
                    "AirportCode": "OVA",
                    "AirportName": "Bekily",
                    "CityCode": "OVA"
                },
                {
                    "AirportCode": "OVB",
                    "AirportName": "Tolmachevo",
                    "CityCode": "OVB"
                },
                {
                    "AirportCode": "OVD",
                    "AirportName": "Asturias",
                    "CityCode": "OVD"
                },
                {
                    "AirportCode": "OWB",
                    "AirportName": "Daviess County",
                    "CityCode": "OWB"
                },
                {
                    "AirportCode": "OXF",
                    "AirportName": "London Oxford",
                    "CityCode": "OXF"
                },
                {
                    "AirportCode": "OXR",
                    "AirportName": "Oxnard",
                    "CityCode": "OXR"
                },
                {
                    "AirportCode": "OYE",
                    "AirportName": "Oyem",
                    "CityCode": "OYE"
                },
                {
                    "AirportCode": "OYL",
                    "AirportName": "Moyale",
                    "CityCode": "OYL"
                },
                {
                    "AirportCode": "OZH",
                    "AirportName": "Zaporozhye",
                    "CityCode": "OZH"
                },
                {
                    "AirportCode": "OZZ",
                    "AirportName": "Ouarzazate",
                    "CityCode": "OZZ"
                },
                {
                    "AirportCode": "PAB",
                    "AirportName": "Bilaspur",
                    "CityCode": "PAB"
                },
                {
                    "AirportCode": "PAC",
                    "AirportName": "Paitilla",
                    "CityCode": "PTY"
                },
                {
                    "AirportCode": "PAD",
                    "AirportName": "Paderborn",
                    "CityCode": "PAD"
                },
                {
                    "AirportCode": "PAE",
                    "AirportName": "Snohomish County",
                    "CityCode": "PAE"
                },
                {
                    "AirportCode": "PAH",
                    "AirportName": "Barkley Regional",
                    "CityCode": "PAH"
                },
                {
                    "AirportCode": "PAN",
                    "AirportName": "Pattani",
                    "CityCode": "PAN"
                },
                {
                    "AirportCode": "PAP",
                    "AirportName": "Mais Gate",
                    "CityCode": "PAP"
                },
                {
                    "AirportCode": "PAQ",
                    "AirportName": "Palmer Municipal",
                    "CityCode": "PAQ"
                },
                {
                    "AirportCode": "PAS",
                    "AirportName": "Paros",
                    "CityCode": "PAS"
                },
                {
                    "AirportCode": "PAT",
                    "AirportName": "Patna",
                    "CityCode": "PAT"
                },
                {
                    "AirportCode": "PAV",
                    "AirportName": "Paulo Afonso",
                    "CityCode": "PAV"
                },
                {
                    "AirportCode": "PAY",
                    "AirportName": "Pamol",
                    "CityCode": "PAY"
                },
                {
                    "AirportCode": "PAZ",
                    "AirportName": "Tajin",
                    "CityCode": "PAZ"
                },
                {
                    "AirportCode": "PBC",
                    "AirportName": "Huejotsingo",
                    "CityCode": "PBC"
                },
                {
                    "AirportCode": "PBD",
                    "AirportName": "Porbandar",
                    "CityCode": "PBD"
                },
                {
                    "AirportCode": "PBE",
                    "AirportName": "Puerto Berrio",
                    "CityCode": "PBE"
                },
                {
                    "AirportCode": "PBH",
                    "AirportName": "Paro",
                    "CityCode": "PBH"
                },
                {
                    "AirportCode": "PBI",
                    "AirportName": "Palm Beach Intl",
                    "CityCode": "PBI"
                },
                {
                    "AirportCode": "PBL",
                    "AirportName": "Puerto Cabello",
                    "CityCode": "PBL"
                },
                {
                    "AirportCode": "PBM",
                    "AirportName": "Zanderij Internatiional",
                    "CityCode": "PBM"
                },
                {
                    "AirportCode": "PBN",
                    "AirportName": "Porto Amboim",
                    "CityCode": "PBN"
                },
                {
                    "AirportCode": "PBO",
                    "AirportName": "Paraburdoo",
                    "CityCode": "PBO"
                },
                {
                    "AirportCode": "PBU",
                    "AirportName": "Putao",
                    "CityCode": "PBU"
                },
                {
                    "AirportCode": "PCA",
                    "AirportName": "Portage Creek",
                    "CityCode": "PCA"
                },
                {
                    "AirportCode": "PCL",
                    "AirportName": "Capitan Rolden",
                    "CityCode": "PCL"
                },
                {
                    "AirportCode": "PCN",
                    "AirportName": "Koromiko",
                    "CityCode": "PCN"
                },
                {
                    "AirportCode": "PCP",
                    "AirportName": "Principe",
                    "CityCode": "PCP"
                },
                {
                    "AirportCode": "PCR",
                    "AirportName": "Puerto Carreno",
                    "CityCode": "PCR"
                },
                {
                    "AirportCode": "PDA",
                    "AirportName": "Puerto Inirida",
                    "CityCode": "PDA"
                },
                {
                    "AirportCode": "PDB",
                    "AirportName": "Pedro Bay",
                    "CityCode": "PDB"
                },
                {
                    "AirportCode": "PDF",
                    "AirportName": "Prado Airport",
                    "CityCode": "PDF"
                },
                {
                    "AirportCode": "PDG",
                    "AirportName": "Tabing",
                    "CityCode": "PDG"
                },
                {
                    "AirportCode": "PDL",
                    "AirportName": "Nordela",
                    "CityCode": "PDL"
                },
                {
                    "AirportCode": "PDN",
                    "AirportName": "Parndana",
                    "CityCode": "PDN"
                },
                {
                    "AirportCode": "PDP",
                    "AirportName": "Punta Del Este",
                    "CityCode": "PDP"
                },
                {
                    "AirportCode": "PDT",
                    "AirportName": "Pendleton",
                    "CityCode": "PDT"
                },
                {
                    "AirportCode": "PDU",
                    "AirportName": "Paysandu",
                    "CityCode": "PDU"
                },
                {
                    "AirportCode": "PDV",
                    "AirportName": "Plovdiv",
                    "CityCode": "PDV"
                },
                {
                    "AirportCode": "PDX",
                    "AirportName": "Portland Int'l",
                    "CityCode": "PDX"
                },
                {
                    "AirportCode": "PEA",
                    "AirportName": "Penneshaw",
                    "CityCode": "PEA"
                },
                {
                    "AirportCode": "PEE",
                    "AirportName": "Perm",
                    "CityCode": "PEE"
                },
                {
                    "AirportCode": "PEG",
                    "AirportName": "Sant Egidio",
                    "CityCode": "PEG"
                },
                {
                    "AirportCode": "PEI",
                    "AirportName": "Pereira",
                    "CityCode": "PEI"
                },
                {
                    "AirportCode": "PEK",
                    "AirportName": "Beijing Capital",
                    "CityCode": "BJS"
                },
                {
                    "AirportCode": "PEM",
                    "AirportName": "Puerto Maldonado",
                    "CityCode": "PEM"
                },
                {
                    "AirportCode": "PEN",
                    "AirportName": "Penang Int'l",
                    "CityCode": "PEN"
                },
                {
                    "AirportCode": "PER",
                    "AirportName": "Perth",
                    "CityCode": "PER"
                },
                {
                    "AirportCode": "PET",
                    "AirportName": "Pelotas",
                    "CityCode": "PET"
                },
                {
                    "AirportCode": "PEU",
                    "AirportName": "Puerto Lempira",
                    "CityCode": "PEU"
                },
                {
                    "AirportCode": "PEW",
                    "AirportName": "Peshawar",
                    "CityCode": "PEW"
                },
                {
                    "AirportCode": "PFB",
                    "AirportName": "Passo Fundo",
                    "CityCode": "PFB"
                },
                {
                    "AirportCode": "PFJ",
                    "AirportName": "Patreksfjordur",
                    "CityCode": "PFJ"
                },
                {
                    "AirportCode": "PFN",
                    "AirportName": "Bay County",
                    "CityCode": "PFN"
                },
                {
                    "AirportCode": "PFO",
                    "AirportName": "Paphos Int'l",
                    "CityCode": "PFO"
                },
                {
                    "AirportCode": "PGA",
                    "AirportName": "Page",
                    "CityCode": "PGA"
                },
                {
                    "AirportCode": "PGF",
                    "AirportName": "Rivesaltes",
                    "CityCode": "PGF"
                },
                {
                    "AirportCode": "PGH",
                    "AirportName": "Pantnagar",
                    "CityCode": "PGH"
                },
                {
                    "AirportCode": "PGI",
                    "AirportName": "Chitato",
                    "CityCode": "PGI"
                },
                {
                    "AirportCode": "PGK",
                    "AirportName": "Pangkalpinang",
                    "CityCode": "PGK"
                },
                {
                    "AirportCode": "PGM",
                    "AirportName": "Port Graham",
                    "CityCode": "PGM"
                },
                {
                    "AirportCode": "PGV",
                    "AirportName": "Pitt-Greenville",
                    "CityCode": "PGV"
                },
                {
                    "AirportCode": "PGX",
                    "AirportName": "Perigueux",
                    "CityCode": "PGX"
                },
                {
                    "AirportCode": "PHC",
                    "AirportName": "Port Harcourt",
                    "CityCode": "PHC"
                },
                {
                    "AirportCode": "PHE",
                    "AirportName": "Port Hedland",
                    "CityCode": "PHE"
                },
                {
                    "AirportCode": "PHF",
                    "AirportName": "Newportnews/Williamsburg",
                    "CityCode": "PHF"
                },
                {
                    "AirportCode": "PHJ",
                    "AirportName": "Port Hunter",
                    "CityCode": "PHJ"
                },
                {
                    "AirportCode": "PHL",
                    "AirportName": "Philadelphia Int'l",
                    "CityCode": "PHL"
                },
                {
                    "AirportCode": "PHN",
                    "AirportName": "SAINT CLAIR INTL",
                    "CityCode": "PHN"
                },
                {
                    "AirportCode": "PHO",
                    "AirportName": "Point Hope",
                    "CityCode": "PHO"
                },
                {
                    "AirportCode": "PHR",
                    "AirportName": "Pacific Harbor",
                    "CityCode": "PHR"
                },
                {
                    "AirportCode": "PHS",
                    "AirportName": "Phitsanulok",
                    "CityCode": "PHS"
                },
                {
                    "AirportCode": "PHW",
                    "AirportName": "H Van Eck",
                    "CityCode": "PHW"
                },
                {
                    "AirportCode": "PHX",
                    "AirportName": "Sky Harbor Int'l",
                    "CityCode": "PHX"
                },
                {
                    "AirportCode": "PIA",
                    "AirportName": "Greater Peoria",
                    "CityCode": "PIA"
                },
                {
                    "AirportCode": "PIB",
                    "AirportName": "Hattisburg-Laurel Regional",
                    "CityCode": "LUL"
                },
                {
                    "AirportCode": "PID",
                    "AirportName": "Paradise Island",
                    "CityCode": "NAS"
                },
                {
                    "AirportCode": "PIE",
                    "AirportName": "St Petersburg Int'l",
                    "CityCode": "PIE"
                },
                {
                    "AirportCode": "PIH",
                    "AirportName": "Pocatello",
                    "CityCode": "PIH"
                },
                {
                    "AirportCode": "PIK",
                    "AirportName": "Prestwick",
                    "CityCode": "GLA"
                },
                {
                    "AirportCode": "PIP",
                    "AirportName": "Pilot Point",
                    "CityCode": "PIP"
                },
                {
                    "AirportCode": "PIR",
                    "AirportName": "Pierre",
                    "CityCode": "PIR"
                },
                {
                    "AirportCode": "PIS",
                    "AirportName": "Biard",
                    "CityCode": "PIS"
                },
                {
                    "AirportCode": "PIT",
                    "AirportName": "Pittsburgh Int'l",
                    "CityCode": "PIT"
                },
                {
                    "AirportCode": "PIU",
                    "AirportName": "Piura",
                    "CityCode": "PIU"
                },
                {
                    "AirportCode": "PIX",
                    "AirportName": "Pico Island",
                    "CityCode": "PIX"
                },
                {
                    "AirportCode": "PIZ",
                    "AirportName": "Dew Station",
                    "CityCode": "PIZ"
                },
                {
                    "AirportCode": "PJG",
                    "AirportName": "Panjgur",
                    "CityCode": "PJG"
                },
                {
                    "AirportCode": "PKA",
                    "AirportName": "Napaiskakspb",
                    "CityCode": "PKA"
                },
                {
                    "AirportCode": "PKB",
                    "AirportName": "Wood County",
                    "CityCode": "PKB"
                },
                {
                    "AirportCode": "PKC",
                    "AirportName": "Petropavlovsk Kam",
                    "CityCode": "PKC"
                },
                {
                    "AirportCode": "PKE",
                    "AirportName": "Parkes",
                    "CityCode": "PKE"
                },
                {
                    "AirportCode": "PKN",
                    "AirportName": "Pangkalanbuun",
                    "CityCode": "PKN"
                },
                {
                    "AirportCode": "PKO",
                    "AirportName": "Parakou",
                    "CityCode": "PKO"
                },
                {
                    "AirportCode": "PKP",
                    "AirportName": "Puka Puka",
                    "CityCode": "PKP"
                },
                {
                    "AirportCode": "PKR",
                    "AirportName": "Pokhara",
                    "CityCode": "PKR"
                },
                {
                    "AirportCode": "PKU",
                    "AirportName": "Simpang Tiga",
                    "CityCode": "PKU"
                },
                {
                    "AirportCode": "PKW",
                    "AirportName": "Selebi Phikwe",
                    "CityCode": "PKW"
                },
                {
                    "AirportCode": "PKY",
                    "AirportName": "Palangkaraya",
                    "CityCode": "PKY"
                },
                {
                    "AirportCode": "PKZ",
                    "AirportName": "Pakse",
                    "CityCode": "PKZ"
                },
                {
                    "AirportCode": "PLB",
                    "AirportName": "Clinton Country",
                    "CityCode": "PLB"
                },
                {
                    "AirportCode": "PLD",
                    "AirportName": "Playa Samara",
                    "CityCode": "PLD"
                },
                {
                    "AirportCode": "PLF",
                    "AirportName": "Pala",
                    "CityCode": "PLF"
                },
                {
                    "AirportCode": "PLH",
                    "AirportName": "Plymouth",
                    "CityCode": "PLH"
                },
                {
                    "AirportCode": "PLM",
                    "AirportName": "Mahmud Badaruddin Ii",
                    "CityCode": "PLM"
                },
                {
                    "AirportCode": "PLN",
                    "AirportName": "Emmet County",
                    "CityCode": "PLN"
                },
                {
                    "AirportCode": "PLO",
                    "AirportName": "Port Lincoln",
                    "CityCode": "PLO"
                },
                {
                    "AirportCode": "PLQ",
                    "AirportName": "Palanga",
                    "CityCode": "PLQ"
                },
                {
                    "AirportCode": "PLS",
                    "AirportName": "Providenciales",
                    "CityCode": "PLS"
                },
                {
                    "AirportCode": "PLU",
                    "AirportName": "Pampulha",
                    "CityCode": "BHZ"
                },
                {
                    "AirportCode": "PLW",
                    "AirportName": "Mutiara",
                    "CityCode": "PLW"
                },
                {
                    "AirportCode": "PLX",
                    "AirportName": "Semipalatinsk",
                    "CityCode": "PLX"
                },
                {
                    "AirportCode": "PLZ",
                    "AirportName": "Port Elizabeth Airport",
                    "CityCode": "PLZ"
                },
                {
                    "AirportCode": "PMA",
                    "AirportName": "Wawi",
                    "CityCode": "PMA"
                },
                {
                    "AirportCode": "PMC",
                    "AirportName": "Tepual",
                    "CityCode": "PMC"
                },
                {
                    "AirportCode": "PMF",
                    "AirportName": "Parma",
                    "CityCode": "PMF"
                },
                {
                    "AirportCode": "PMG",
                    "AirportName": "Ponta Pora Int'l",
                    "CityCode": "PMG"
                },
                {
                    "AirportCode": "PMI",
                    "AirportName": "Palma Mallorca",
                    "CityCode": "PMI"
                },
                {
                    "AirportCode": "PMN",
                    "AirportName": "Pumani",
                    "CityCode": "PMN"
                },
                {
                    "AirportCode": "PMO",
                    "AirportName": "Punta Raisi",
                    "CityCode": "PMO"
                },
                {
                    "AirportCode": "PMQ",
                    "AirportName": "Perito Moreno",
                    "CityCode": "PMQ"
                },
                {
                    "AirportCode": "PMR",
                    "AirportName": "Palmerston North",
                    "CityCode": "PMR"
                },
                {
                    "AirportCode": "PMV",
                    "AirportName": "Delcaribe General S Marino",
                    "CityCode": "PMV"
                },
                {
                    "AirportCode": "PMW",
                    "AirportName": "Palmas",
                    "CityCode": "PMW"
                },
                {
                    "AirportCode": "PMZ",
                    "AirportName": "Palmar Sur",
                    "CityCode": "PMZ"
                },
                {
                    "AirportCode": "PNA",
                    "AirportName": "Pamplona",
                    "CityCode": "PNA"
                },
                {
                    "AirportCode": "PNB",
                    "AirportName": "Porto Nacional",
                    "CityCode": "PNB"
                },
                {
                    "AirportCode": "PNC",
                    "AirportName": "Ponca City",
                    "CityCode": "PNC"
                },
                {
                    "AirportCode": "PND",
                    "AirportName": "Punta Gorda",
                    "CityCode": "PND"
                },
                {
                    "AirportCode": "PNE",
                    "AirportName": "North Philadelphia",
                    "CityCode": "PHL"
                },
                {
                    "AirportCode": "PNH",
                    "AirportName": "POCHENTONG",
                    "CityCode": "PNH"
                },
                {
                    "AirportCode": "PNI",
                    "AirportName": "Pohnpei",
                    "CityCode": "PNI"
                },
                {
                    "AirportCode": "PNK",
                    "AirportName": "Supadio",
                    "CityCode": "PNK"
                },
                {
                    "AirportCode": "PNL",
                    "AirportName": "Pantelleria",
                    "CityCode": "PNL"
                },
                {
                    "AirportCode": "PNP",
                    "AirportName": "Girua",
                    "CityCode": "PNP"
                },
                {
                    "AirportCode": "PNQ",
                    "AirportName": "Lohegaon",
                    "CityCode": "PNQ"
                },
                {
                    "AirportCode": "PNR",
                    "AirportName": "Pointe Noire",
                    "CityCode": "PNR"
                },
                {
                    "AirportCode": "PNS",
                    "AirportName": "Pensacola Regional",
                    "CityCode": "PNS"
                },
                {
                    "AirportCode": "PNY",
                    "AirportName": "PONDICHERRY",
                    "CityCode": "PNY"
                },
                {
                    "AirportCode": "PNZ",
                    "AirportName": "Petrolina Internacional",
                    "CityCode": "PNZ"
                },
                {
                    "AirportCode": "POA",
                    "AirportName": "Salgado Filho",
                    "CityCode": "POA"
                },
                {
                    "AirportCode": "POD",
                    "AirportName": "Podor",
                    "CityCode": "POD"
                },
                {
                    "AirportCode": "POG",
                    "AirportName": "Port Gentil",
                    "CityCode": "POG"
                },
                {
                    "AirportCode": "POL",
                    "AirportName": "Pemba",
                    "CityCode": "POL"
                },
                {
                    "AirportCode": "POM",
                    "AirportName": "Jackson Field",
                    "CityCode": "POM"
                },
                {
                    "AirportCode": "POO",
                    "AirportName": "Pocos De Caldas",
                    "CityCode": "POO"
                },
                {
                    "AirportCode": "POP",
                    "AirportName": "La Union",
                    "CityCode": "POP"
                },
                {
                    "AirportCode": "POQ",
                    "AirportName": "Polk Inlet",
                    "CityCode": "POQ"
                },
                {
                    "AirportCode": "POR",
                    "AirportName": "Pori",
                    "CityCode": "POR"
                },
                {
                    "AirportCode": "POS",
                    "AirportName": "Port Of Spain",
                    "CityCode": "POS"
                },
                {
                    "AirportCode": "POT",
                    "AirportName": "Ken Jones",
                    "CityCode": "POT"
                },
                {
                    "AirportCode": "POU",
                    "AirportName": "Dutchess County",
                    "CityCode": "POU"
                },
                {
                    "AirportCode": "POW",
                    "AirportName": "Portoroz",
                    "CityCode": "POW"
                },
                {
                    "AirportCode": "POZ",
                    "AirportName": "Poznan",
                    "CityCode": "POZ"
                },
                {
                    "AirportCode": "PPB",
                    "AirportName": "A. De Barros",
                    "CityCode": "PPB"
                },
                {
                    "AirportCode": "PPE",
                    "AirportName": "Puerto Penasco",
                    "CityCode": "PPE"
                },
                {
                    "AirportCode": "PPG",
                    "AirportName": "Pago Pago Int'l",
                    "CityCode": "PPG"
                },
                {
                    "AirportCode": "PPM",
                    "AirportName": "Pompano Beach",
                    "CityCode": "PPM"
                },
                {
                    "AirportCode": "PPN",
                    "AirportName": "Machangara",
                    "CityCode": "PPN"
                },
                {
                    "AirportCode": "PPP",
                    "AirportName": "Proserpine",
                    "CityCode": "PPP"
                },
                {
                    "AirportCode": "PPQ",
                    "AirportName": "Paraparaumu",
                    "CityCode": "PPQ"
                },
                {
                    "AirportCode": "PPS",
                    "AirportName": "Puerto Princesa",
                    "CityCode": "PPS"
                },
                {
                    "AirportCode": "PPT",
                    "AirportName": "Faaa",
                    "CityCode": "PPT"
                },
                {
                    "AirportCode": "PPV",
                    "AirportName": "Port Protection",
                    "CityCode": "PPV"
                },
                {
                    "AirportCode": "PPW",
                    "AirportName": "Papa Westray",
                    "CityCode": "PPW"
                },
                {
                    "AirportCode": "PQI",
                    "AirportName": "Presque Isle Municipal",
                    "CityCode": "PQI"
                },
                {
                    "AirportCode": "PQQ",
                    "AirportName": "Port Macquarie",
                    "CityCode": "PQQ"
                },
                {
                    "AirportCode": "PRC",
                    "AirportName": "Prescott",
                    "CityCode": "PRC"
                },
                {
                    "AirportCode": "PRG",
                    "AirportName": "Ruzyne",
                    "CityCode": "PRG"
                },
                {
                    "AirportCode": "PRH",
                    "AirportName": "Phrae",
                    "CityCode": "PRH"
                },
                {
                    "AirportCode": "PRI",
                    "AirportName": "Praslin Island",
                    "CityCode": "PRI"
                },
                {
                    "AirportCode": "PRN",
                    "AirportName": "Pristina",
                    "CityCode": "PRN"
                },
                {
                    "AirportCode": "PRS",
                    "AirportName": "Parasi",
                    "CityCode": "PRS"
                },
                {
                    "AirportCode": "PRX",
                    "AirportName": "Cox Field",
                    "CityCode": "PRX"
                },
                {
                    "AirportCode": "PRY",
                    "AirportName": "Wonderboom",
                    "CityCode": "PRY"
                },
                {
                    "AirportCode": "PSA",
                    "AirportName": "Galileo Galilei",
                    "CityCode": "PSA"
                },
                {
                    "AirportCode": "PSC",
                    "AirportName": "Tri-Cities",
                    "CityCode": "PSC"
                },
                {
                    "AirportCode": "PSE",
                    "AirportName": "Mercedita",
                    "CityCode": "PSE"
                },
                {
                    "AirportCode": "PSG",
                    "AirportName": "Petersburg Municipal",
                    "CityCode": "PSG"
                },
                {
                    "AirportCode": "PSI",
                    "AirportName": "Pasni",
                    "CityCode": "PSI"
                },
                {
                    "AirportCode": "PSJ",
                    "AirportName": "Poso",
                    "CityCode": "PSJ"
                },
                {
                    "AirportCode": "PSP",
                    "AirportName": "Palm Springs Municipal",
                    "CityCode": "PSP"
                },
                {
                    "AirportCode": "PSR",
                    "AirportName": "Liberi",
                    "CityCode": "PSR"
                },
                {
                    "AirportCode": "PSS",
                    "AirportName": "Posadas",
                    "CityCode": "PSS"
                },
                {
                    "AirportCode": "PSZ",
                    "AirportName": "Puerto Suarez",
                    "CityCode": "PSZ"
                },
                {
                    "AirportCode": "PTA",
                    "AirportName": "Port Alsworth",
                    "CityCode": "PTA"
                },
                {
                    "AirportCode": "PTC",
                    "AirportName": "Port Alice",
                    "CityCode": "PTC"
                },
                {
                    "AirportCode": "PTD",
                    "AirportName": "Port Alexander",
                    "CityCode": "PTD"
                },
                {
                    "AirportCode": "PTF",
                    "AirportName": "Malololailai",
                    "CityCode": "PTF"
                },
                {
                    "AirportCode": "PTG",
                    "AirportName": "Pietersburg",
                    "CityCode": "PTG"
                },
                {
                    "AirportCode": "PTH",
                    "AirportName": "Port Heiden",
                    "CityCode": "PTH"
                },
                {
                    "AirportCode": "PTI",
                    "AirportName": "Port Douglas",
                    "CityCode": "PTI"
                },
                {
                    "AirportCode": "PTJ",
                    "AirportName": "Portland",
                    "CityCode": "PTJ"
                },
                {
                    "AirportCode": "PTL",
                    "AirportName": "Port Armstrong",
                    "CityCode": "PTL"
                },
                {
                    "AirportCode": "PTP",
                    "AirportName": "Le Raizet",
                    "CityCode": "PTP"
                },
                {
                    "AirportCode": "PTU",
                    "AirportName": "Platinum",
                    "CityCode": "PTU"
                },
                {
                    "AirportCode": "PTY",
                    "AirportName": "Tocumen Int'l",
                    "CityCode": "PTY"
                },
                {
                    "AirportCode": "PUC",
                    "AirportName": "Carbon County",
                    "CityCode": "PUC"
                },
                {
                    "AirportCode": "PUD",
                    "AirportName": "Puerto Deseado",
                    "CityCode": "PUD"
                },
                {
                    "AirportCode": "PUF",
                    "AirportName": "Uzein",
                    "CityCode": "PUF"
                },
                {
                    "AirportCode": "PUG",
                    "AirportName": "Port Augusta",
                    "CityCode": "PUG"
                },
                {
                    "AirportCode": "PUJ",
                    "AirportName": "Punta Cana",
                    "CityCode": "PUJ"
                },
                {
                    "AirportCode": "PUK",
                    "AirportName": "Pukarua",
                    "CityCode": "PUK"
                },
                {
                    "AirportCode": "PUM",
                    "AirportName": "Pomala",
                    "CityCode": "PUM"
                },
                {
                    "AirportCode": "PUQ",
                    "AirportName": "Pres Ibanez",
                    "CityCode": "PUQ"
                },
                {
                    "AirportCode": "PUS",
                    "AirportName": "Kimhae",
                    "CityCode": "PUS"
                },
                {
                    "AirportCode": "PUU",
                    "AirportName": "Puerto Asis",
                    "CityCode": "PUU"
                },
                {
                    "AirportCode": "PUW",
                    "AirportName": "Moscow Regional",
                    "CityCode": "PUW"
                },
                {
                    "AirportCode": "PUY",
                    "AirportName": "Pula",
                    "CityCode": "PUY"
                },
                {
                    "AirportCode": "PUZ",
                    "AirportName": "Puerto Cabezas",
                    "CityCode": "PUZ"
                },
                {
                    "AirportCode": "PVA",
                    "AirportName": "Providencia",
                    "CityCode": "PVA"
                },
                {
                    "AirportCode": "PVC",
                    "AirportName": "Provincetown",
                    "CityCode": "PVC"
                },
                {
                    "AirportCode": "PVD",
                    "AirportName": "Theodore Francis",
                    "CityCode": "PVD"
                },
                {
                    "AirportCode": "PVG",
                    "AirportName": "Pu Dong Airport",
                    "CityCode": "PVG"
                },
                {
                    "AirportCode": "PVH",
                    "AirportName": "Belmonte",
                    "CityCode": "PVH"
                },
                {
                    "AirportCode": "PVK",
                    "AirportName": "Preveza Lefkas",
                    "CityCode": "PVK"
                },
                {
                    "AirportCode": "PVO",
                    "AirportName": "Portoviejo",
                    "CityCode": "PVO"
                },
                {
                    "AirportCode": "PVR",
                    "AirportName": "Ordaz",
                    "CityCode": "PVR"
                },
                {
                    "AirportCode": "PVU",
                    "AirportName": "Provo",
                    "CityCode": "PVU"
                },
                {
                    "AirportCode": "PWI",
                    "AirportName": "Beles",
                    "CityCode": "PWI"
                },
                {
                    "AirportCode": "PWM",
                    "AirportName": "Portland Int'l Jetport",
                    "CityCode": "PWM"
                },
                {
                    "AirportCode": "PWQ",
                    "AirportName": "Pavlodar",
                    "CityCode": "PWQ"
                },
                {
                    "AirportCode": "PXM",
                    "AirportName": "Puerto Escondido",
                    "CityCode": "PXM"
                },
                {
                    "AirportCode": "PXO",
                    "AirportName": "Porto Santo",
                    "CityCode": "PXO"
                },
                {
                    "AirportCode": "PYE",
                    "AirportName": "Penrhyn Island",
                    "CityCode": "PYE"
                },
                {
                    "AirportCode": "PYH",
                    "AirportName": "Puerto Ayacucho",
                    "CityCode": "PYH"
                },
                {
                    "AirportCode": "PYR",
                    "AirportName": "Andravida",
                    "CityCode": "PYR"
                },
                {
                    "AirportCode": "PYX",
                    "AirportName": "Pattaya",
                    "CityCode": "PYX"
                },
                {
                    "AirportCode": "PZA",
                    "AirportName": "Paz De Ariporo",
                    "CityCode": "PZA"
                },
                {
                    "AirportCode": "PZB",
                    "AirportName": "Pietermaritzburg",
                    "CityCode": "PZB"
                },
                {
                    "AirportCode": "PZE",
                    "AirportName": "Penzance",
                    "CityCode": "PZE"
                },
                {
                    "AirportCode": "PZH",
                    "AirportName": "Zhob",
                    "CityCode": "PZH"
                },
                {
                    "AirportCode": "PZO",
                    "AirportName": "Puerto Ordaz",
                    "CityCode": "PZO"
                },
                {
                    "AirportCode": "PZU",
                    "AirportName": "Port Sudan",
                    "CityCode": "PZU"
                },
                {
                    "AirportCode": "PZY",
                    "AirportName": "Piestany",
                    "CityCode": "PZY"
                },
                {
                    "AirportCode": "QBC",
                    "AirportName": "Bella Coola",
                    "CityCode": "QBC"
                },
                {
                    "AirportCode": "QPG",
                    "AirportName": "Paya Lebar",
                    "CityCode": "SIN"
                },
                {
                    "AirportCode": "QPR",
                    "AirportName": "PRATO",
                    "CityCode": "QPR"
                },
                {
                    "AirportCode": "RAB",
                    "AirportName": "Lakunai",
                    "CityCode": "RAB"
                },
                {
                    "AirportCode": "RAE",
                    "AirportName": "ARAR",
                    "CityCode": "RAE"
                },
                {
                    "AirportCode": "RAF",
                    "AirportName": "Ras An Naqb",
                    "CityCode": "RAF"
                },
                {
                    "AirportCode": "RAI",
                    "AirportName": "Francisco Mendes",
                    "CityCode": "RAI"
                },
                {
                    "AirportCode": "RAJ",
                    "AirportName": "Rajkot Civil",
                    "CityCode": "RAJ"
                },
                {
                    "AirportCode": "RAK",
                    "AirportName": "Menara",
                    "CityCode": "RAK"
                },
                {
                    "AirportCode": "RAL",
                    "AirportName": "Riverside Municipal",
                    "CityCode": "RAL"
                },
                {
                    "AirportCode": "RAM",
                    "AirportName": "Ramingining",
                    "CityCode": "RAM"
                },
                {
                    "AirportCode": "RAO",
                    "AirportName": "Leite Lopes",
                    "CityCode": "RAO"
                },
                {
                    "AirportCode": "RAP",
                    "AirportName": "Rapid City Regional",
                    "CityCode": "RAP"
                },
                {
                    "AirportCode": "RAR",
                    "AirportName": "Rarotonga",
                    "CityCode": "RAR"
                },
                {
                    "AirportCode": "RAS",
                    "AirportName": "Rasht",
                    "CityCode": "RAS"
                },
                {
                    "AirportCode": "RAV",
                    "AirportName": "Cravo Norte",
                    "CityCode": "RAV"
                },
                {
                    "AirportCode": "RAZ",
                    "AirportName": "Rawala Kot",
                    "CityCode": "RAZ"
                },
                {
                    "AirportCode": "RBA",
                    "AirportName": "Sale",
                    "CityCode": "RBA"
                },
                {
                    "AirportCode": "RBJ",
                    "AirportName": "Rebun",
                    "CityCode": "RBJ"
                },
                {
                    "AirportCode": "RBP",
                    "AirportName": "Rabaraba",
                    "CityCode": "RBP"
                },
                {
                    "AirportCode": "RBQ",
                    "AirportName": "Rurrenabaque",
                    "CityCode": "RBQ"
                },
                {
                    "AirportCode": "RBR",
                    "AirportName": "Pres. Medici",
                    "CityCode": "RBR"
                },
                {
                    "AirportCode": "RBS",
                    "AirportName": "Orbost",
                    "CityCode": "RBS"
                },
                {
                    "AirportCode": "RBT",
                    "AirportName": "Marsabit",
                    "CityCode": "RBT"
                },
                {
                    "AirportCode": "RBY",
                    "AirportName": "Ruby",
                    "CityCode": "RBY"
                },
                {
                    "AirportCode": "RCB",
                    "AirportName": "Richards Bay",
                    "CityCode": "RCB"
                },
                {
                    "AirportCode": "RCE",
                    "AirportName": "Roche Harbor",
                    "CityCode": "RCE"
                },
                {
                    "AirportCode": "RCH",
                    "AirportName": "Riohacha",
                    "CityCode": "RCH"
                },
                {
                    "AirportCode": "RCM",
                    "AirportName": "Richmond",
                    "CityCode": "RCM"
                },
                {
                    "AirportCode": "RCN",
                    "AirportName": "American River",
                    "CityCode": "RCN"
                },
                {
                    "AirportCode": "RCU",
                    "AirportName": "Rio Cuarto",
                    "CityCode": "RCU"
                },
                {
                    "AirportCode": "RDC",
                    "AirportName": "Redencao",
                    "CityCode": "RDC"
                },
                {
                    "AirportCode": "RDD",
                    "AirportName": "Redding",
                    "CityCode": "RDD"
                },
                {
                    "AirportCode": "RDE",
                    "AirportName": "Merdey",
                    "CityCode": "RDE"
                },
                {
                    "AirportCode": "RDG",
                    "AirportName": "Reading Municipal/Spaatz Field",
                    "CityCode": "RDG"
                },
                {
                    "AirportCode": "RDM",
                    "AirportName": "Roberts Field",
                    "CityCode": "RDM"
                },
                {
                    "AirportCode": "RDT",
                    "AirportName": "Richard Toll",
                    "CityCode": "RDT"
                },
                {
                    "AirportCode": "RDU",
                    "AirportName": "Raleigh Durham",
                    "CityCode": "RDU"
                },
                {
                    "AirportCode": "RDV",
                    "AirportName": "Red Devil",
                    "CityCode": "RDV"
                },
                {
                    "AirportCode": "RDZ",
                    "AirportName": "Marcillac",
                    "CityCode": "RDZ"
                },
                {
                    "AirportCode": "REA",
                    "AirportName": "Reao",
                    "CityCode": "REA"
                },
                {
                    "AirportCode": "REC",
                    "AirportName": "Guararapes Int'l",
                    "CityCode": "REC"
                },
                {
                    "AirportCode": "REG",
                    "AirportName": "Tito Menniti",
                    "CityCode": "REG"
                },
                {
                    "AirportCode": "REL",
                    "AirportName": "Trelew",
                    "CityCode": "REL"
                },
                {
                    "AirportCode": "REN",
                    "AirportName": "Orenburg",
                    "CityCode": "REN"
                },
                {
                    "AirportCode": "RES",
                    "AirportName": "Resistencia",
                    "CityCode": "RES"
                },
                {
                    "AirportCode": "RET",
                    "AirportName": "Stolport",
                    "CityCode": "RET"
                },
                {
                    "AirportCode": "REU",
                    "AirportName": "Reus",
                    "CityCode": "REU"
                },
                {
                    "AirportCode": "REW",
                    "AirportName": "Rewa",
                    "CityCode": "REW"
                },
                {
                    "AirportCode": "REX",
                    "AirportName": "Gen Lucio Blanco",
                    "CityCode": "REX"
                },
                {
                    "AirportCode": "RFA",
                    "AirportName": "Rafai",
                    "CityCode": "RFA"
                },
                {
                    "AirportCode": "RFD",
                    "AirportName": "Greater Rockford",
                    "CityCode": "RFD"
                },
                {
                    "AirportCode": "RFN",
                    "AirportName": "Raufarhofn",
                    "CityCode": "RFN"
                },
                {
                    "AirportCode": "RFP",
                    "AirportName": "Raiatea",
                    "CityCode": "RFP"
                },
                {
                    "AirportCode": "RGA",
                    "AirportName": "Rio Grande",
                    "CityCode": "RGA"
                },
                {
                    "AirportCode": "RGE",
                    "AirportName": "Porgera",
                    "CityCode": "RGE"
                },
                {
                    "AirportCode": "RGI",
                    "AirportName": "Rangiroa",
                    "CityCode": "RGI"
                },
                {
                    "AirportCode": "RGL",
                    "AirportName": "Rio Gallegos Int'l",
                    "CityCode": "RGL"
                },
                {
                    "AirportCode": "RGN",
                    "AirportName": "Mingaladon",
                    "CityCode": "RGN"
                },
                {
                    "AirportCode": "RGT",
                    "AirportName": "Japura",
                    "CityCode": "RGT"
                },
                {
                    "AirportCode": "RHE",
                    "AirportName": "Reims",
                    "CityCode": "RHE"
                },
                {
                    "AirportCode": "RHG",
                    "AirportName": "Ruhengeri",
                    "CityCode": "RHG"
                },
                {
                    "AirportCode": "RHI",
                    "AirportName": "Oneide County",
                    "CityCode": "RHI"
                },
                {
                    "AirportCode": "RHO",
                    "AirportName": "Diagoras",
                    "CityCode": "RHO"
                },
                {
                    "AirportCode": "RIA",
                    "AirportName": "Base Aerea",
                    "CityCode": "RIA"
                },
                {
                    "AirportCode": "RIB",
                    "AirportName": "Gen Buech",
                    "CityCode": "RIB"
                },
                {
                    "AirportCode": "RIC",
                    "AirportName": "Richmond Int'l",
                    "CityCode": "RIC"
                },
                {
                    "AirportCode": "RIF",
                    "AirportName": "Reynolds",
                    "CityCode": "RIF"
                },
                {
                    "AirportCode": "RIG",
                    "AirportName": "Rio Grande",
                    "CityCode": "RIG"
                },
                {
                    "AirportCode": "RIJ",
                    "AirportName": "Rioja",
                    "CityCode": "RIJ"
                },
                {
                    "AirportCode": "RIN",
                    "AirportName": "Ringi Cove",
                    "CityCode": "RIN"
                },
                {
                    "AirportCode": "RIR",
                    "AirportName": "Riverside Fla-Bob",
                    "CityCode": "RAL"
                },
                {
                    "AirportCode": "RIS",
                    "AirportName": "Rishiri",
                    "CityCode": "RIS"
                },
                {
                    "AirportCode": "RIW",
                    "AirportName": "Riverton",
                    "CityCode": "RIW"
                },
                {
                    "AirportCode": "RIX",
                    "AirportName": "Riga",
                    "CityCode": "RIX"
                },
                {
                    "AirportCode": "RIY",
                    "AirportName": "Riyan",
                    "CityCode": "RIY"
                },
                {
                    "AirportCode": "RJA",
                    "AirportName": "Rajahmundry",
                    "CityCode": "RJA"
                },
                {
                    "AirportCode": "RJH",
                    "AirportName": "Rajshahi",
                    "CityCode": "RJH"
                },
                {
                    "AirportCode": "RJI",
                    "AirportName": "Rajouri",
                    "CityCode": "RJI"
                },
                {
                    "AirportCode": "RJK",
                    "AirportName": "Rijeka",
                    "CityCode": "RJK"
                },
                {
                    "AirportCode": "RKD",
                    "AirportName": "Knox County Regional",
                    "CityCode": "RKD"
                },
                {
                    "AirportCode": "RKE",
                    "AirportName": "Roskilde",
                    "CityCode": "CPH"
                },
                {
                    "AirportCode": "RKS",
                    "AirportName": "Sweetwater County",
                    "CityCode": "RKS"
                },
                {
                    "AirportCode": "RKT",
                    "AirportName": "Ras Al Khaimah",
                    "CityCode": "RKT"
                },
                {
                    "AirportCode": "RMA",
                    "AirportName": "Roma",
                    "CityCode": "RMA"
                },
                {
                    "AirportCode": "RMF",
                    "AirportName": "Marsa Alam International",
                    "CityCode": "RMF"
                },
                {
                    "AirportCode": "RMI",
                    "AirportName": "Miramare",
                    "CityCode": "RMI"
                },
                {
                    "AirportCode": "RNB",
                    "AirportName": "Kallinge",
                    "CityCode": "RNB"
                },
                {
                    "AirportCode": "RNC",
                    "AirportName": "WARREN CNTY",
                    "CityCode": "RNC"
                },
                {
                    "AirportCode": "RNE",
                    "AirportName": "Renaison",
                    "CityCode": "RNE"
                },
                {
                    "AirportCode": "RNJ",
                    "AirportName": "Yoronjima",
                    "CityCode": "RNJ"
                },
                {
                    "AirportCode": "RNL",
                    "AirportName": "Rennell",
                    "CityCode": "RNL"
                },
                {
                    "AirportCode": "RNN",
                    "AirportName": "Bornholm",
                    "CityCode": "RNN"
                },
                {
                    "AirportCode": "RNO",
                    "AirportName": "Tahoe Intl.",
                    "CityCode": "RNO"
                },
                {
                    "AirportCode": "RNR",
                    "AirportName": "Robinson River",
                    "CityCode": "RNR"
                },
                {
                    "AirportCode": "RNS",
                    "AirportName": "St Jacques",
                    "CityCode": "RNS"
                },
                {
                    "AirportCode": "RNT",
                    "AirportName": "Renton",
                    "CityCode": "RNT"
                },
                {
                    "AirportCode": "ROA",
                    "AirportName": "Roanoke Municipal",
                    "CityCode": "ROA"
                },
                {
                    "AirportCode": "ROB",
                    "AirportName": "Roberts Int'l",
                    "CityCode": "MLW"
                },
                {
                    "AirportCode": "ROC",
                    "AirportName": "Monroe County",
                    "CityCode": "ROC"
                },
                {
                    "AirportCode": "ROK",
                    "AirportName": "Rockhampton",
                    "CityCode": "ROK"
                },
                {
                    "AirportCode": "RON",
                    "AirportName": "Rondon",
                    "CityCode": "RON"
                },
                {
                    "AirportCode": "ROO",
                    "AirportName": "Rondonopolis",
                    "CityCode": "ROO"
                },
                {
                    "AirportCode": "ROP",
                    "AirportName": "Rota",
                    "CityCode": "ROP"
                },
                {
                    "AirportCode": "ROR",
                    "AirportName": "Airai",
                    "CityCode": "ROR"
                },
                {
                    "AirportCode": "ROS",
                    "AirportName": "Fisherton",
                    "CityCode": "ROS"
                },
                {
                    "AirportCode": "ROT",
                    "AirportName": "Rotorua",
                    "CityCode": "ROT"
                },
                {
                    "AirportCode": "ROU",
                    "AirportName": "Rousse",
                    "CityCode": "ROU"
                },
                {
                    "AirportCode": "ROV",
                    "AirportName": "Rostov",
                    "CityCode": "ROV"
                },
                {
                    "AirportCode": "ROW",
                    "AirportName": "Roswell Industrial",
                    "CityCode": "ROW"
                },
                {
                    "AirportCode": "ROY",
                    "AirportName": "Rio Mayo",
                    "CityCode": "ROY"
                },
                {
                    "AirportCode": "RPM",
                    "AirportName": "Ngukurr",
                    "CityCode": "RPM"
                },
                {
                    "AirportCode": "RPN",
                    "AirportName": "Rosh Pina",
                    "CityCode": "RPN"
                },
                {
                    "AirportCode": "RPR",
                    "AirportName": "Raipur",
                    "CityCode": "RPR"
                },
                {
                    "AirportCode": "RRG",
                    "AirportName": "Rodrigues Island",
                    "CityCode": "RRG"
                },
                {
                    "AirportCode": "RRK",
                    "AirportName": "Rourkela",
                    "CityCode": "RRK"
                },
                {
                    "AirportCode": "RRS",
                    "AirportName": "Roros",
                    "CityCode": "RRS"
                },
                {
                    "AirportCode": "RSA",
                    "AirportName": "Santa Rosa",
                    "CityCode": "RSA"
                },
                {
                    "AirportCode": "RSD",
                    "AirportName": "S Eleuther",
                    "CityCode": "RSD"
                },
                {
                    "AirportCode": "RSH",
                    "AirportName": "Russian Mission",
                    "CityCode": "RSH"
                },
                {
                    "AirportCode": "RSS",
                    "AirportName": "Roseires",
                    "CityCode": "RSS"
                },
                {
                    "AirportCode": "RST",
                    "AirportName": "Rochester Municipal",
                    "CityCode": "RST"
                },
                {
                    "AirportCode": "RSU",
                    "AirportName": "Yosu",
                    "CityCode": "RSU"
                },
                {
                    "AirportCode": "RSW",
                    "AirportName": "Southwest Florida Regional",
                    "CityCode": "FMY"
                },
                {
                    "AirportCode": "RTA",
                    "AirportName": "Rotuma Island",
                    "CityCode": "RTA"
                },
                {
                    "AirportCode": "RTB",
                    "AirportName": "Roatan",
                    "CityCode": "RTB"
                },
                {
                    "AirportCode": "RTG",
                    "AirportName": "Ruteng",
                    "CityCode": "RTG"
                },
                {
                    "AirportCode": "RTI",
                    "AirportName": "Roti",
                    "CityCode": "RTI"
                },
                {
                    "AirportCode": "RTM",
                    "AirportName": "Rotterdam",
                    "CityCode": "RTM"
                },
                {
                    "AirportCode": "RTS",
                    "AirportName": "Rottnest Island",
                    "CityCode": "RTS"
                },
                {
                    "AirportCode": "RTW",
                    "AirportName": "Saratov",
                    "CityCode": "RTW"
                },
                {
                    "AirportCode": "RUA",
                    "AirportName": "Arua",
                    "CityCode": "RUA"
                },
                {
                    "AirportCode": "RUH",
                    "AirportName": "King Khaled Int'l",
                    "CityCode": "RUH"
                },
                {
                    "AirportCode": "RUN",
                    "AirportName": "Gillot",
                    "CityCode": "RUN"
                },
                {
                    "AirportCode": "RUR",
                    "AirportName": "Rurutu",
                    "CityCode": "RUR"
                },
                {
                    "AirportCode": "RUS",
                    "AirportName": "Marau Sound",
                    "CityCode": "RUS"
                },
                {
                    "AirportCode": "RVA",
                    "AirportName": "Farafangana",
                    "CityCode": "RVA"
                },
                {
                    "AirportCode": "RVE",
                    "AirportName": "Saravena",
                    "CityCode": "RVE"
                },
                {
                    "AirportCode": "RVK",
                    "AirportName": "Ryumsjoen",
                    "CityCode": "RVK"
                },
                {
                    "AirportCode": "RVN",
                    "AirportName": "Rovaniemi",
                    "CityCode": "RVN"
                },
                {
                    "AirportCode": "RVY",
                    "AirportName": "Rivera",
                    "CityCode": "RVY"
                },
                {
                    "AirportCode": "RWB",
                    "AirportName": "Rowan Bay",
                    "CityCode": "RWB"
                },
                {
                    "AirportCode": "RWI",
                    "AirportName": "Rocky Mount-Wilson",
                    "CityCode": "RWI"
                },
                {
                    "AirportCode": "RYG",
                    "AirportName": "Moss-Rygge",
                    "CityCode": "OSL"
                },
                {
                    "AirportCode": "RYK",
                    "AirportName": "Rahim Yar Khan",
                    "CityCode": "RYK"
                },
                {
                    "AirportCode": "RYO",
                    "AirportName": "Rio Turbio",
                    "CityCode": "RYO"
                },
                {
                    "AirportCode": "RZA",
                    "AirportName": "Santa Cruz",
                    "CityCode": "RZA"
                },
                {
                    "AirportCode": "RZE",
                    "AirportName": "Jasionka",
                    "CityCode": "RZE"
                },
                {
                    "AirportCode": "SAB",
                    "AirportName": "J. Yrausquin",
                    "CityCode": "SAB"
                },
                {
                    "AirportCode": "SAC",
                    "AirportName": "Sacramento Executive",
                    "CityCode": "SAC"
                },
                {
                    "AirportCode": "SAF",
                    "AirportName": "Santa Fe",
                    "CityCode": "SAF"
                },
                {
                    "AirportCode": "SAH",
                    "AirportName": "Sanaa Int'l",
                    "CityCode": "SAH"
                },
                {
                    "AirportCode": "SAK",
                    "AirportName": "Saudarkrokur",
                    "CityCode": "SAK"
                },
                {
                    "AirportCode": "SAL",
                    "AirportName": "Comalapa Int'l",
                    "CityCode": "SAL"
                },
                {
                    "AirportCode": "SAM",
                    "AirportName": "Salamo",
                    "CityCode": "SAM"
                },
                {
                    "AirportCode": "SAN",
                    "AirportName": "Lindberg Field S. Diego",
                    "CityCode": "SAN"
                },
                {
                    "AirportCode": "SAP",
                    "AirportName": "Ramon Villeda Morales",
                    "CityCode": "SAP"
                },
                {
                    "AirportCode": "SAQ",
                    "AirportName": "San Andros",
                    "CityCode": "SAQ"
                },
                {
                    "AirportCode": "SAT",
                    "AirportName": "San Antonio Int'l",
                    "CityCode": "SAT"
                },
                {
                    "AirportCode": "SAU",
                    "AirportName": "Sawu",
                    "CityCode": "SAU"
                },
                {
                    "AirportCode": "SAV",
                    "AirportName": "Savannah Int'l",
                    "CityCode": "SAV"
                },
                {
                    "AirportCode": "SAW",
                    "AirportName": "Sabiha Gokcen",
                    "CityCode": "IST"
                },
                {
                    "AirportCode": "SBA",
                    "AirportName": "St Ba Municipal",
                    "CityCode": "SBA"
                },
                {
                    "AirportCode": "SBC",
                    "AirportName": "SELBANG",
                    "CityCode": "SBC"
                },
                {
                    "AirportCode": "SBE",
                    "AirportName": "Suabi",
                    "CityCode": "SBE"
                },
                {
                    "AirportCode": "SBH",
                    "AirportName": "St Barthelemy",
                    "CityCode": "SBH"
                },
                {
                    "AirportCode": "SBI",
                    "AirportName": "Sambailo",
                    "CityCode": "SBI"
                },
                {
                    "AirportCode": "SBK",
                    "AirportName": "Tremuson",
                    "CityCode": "SBK"
                },
                {
                    "AirportCode": "SBN",
                    "AirportName": "St Joseph Co",
                    "CityCode": "SBN"
                },
                {
                    "AirportCode": "SBO",
                    "AirportName": "Salina",
                    "CityCode": "SBO"
                },
                {
                    "AirportCode": "SBP",
                    "AirportName": "San Luis County",
                    "CityCode": "CSL"
                },
                {
                    "AirportCode": "SBR",
                    "AirportName": "Saibai Island",
                    "CityCode": "SBR"
                },
                {
                    "AirportCode": "SBS",
                    "AirportName": "Steamboat Springs",
                    "CityCode": "SBS"
                },
                {
                    "AirportCode": "SBU",
                    "AirportName": "Springbok",
                    "CityCode": "SBU"
                },
                {
                    "AirportCode": "SBW",
                    "AirportName": "Sibu",
                    "CityCode": "SBW"
                },
                {
                    "AirportCode": "SBY",
                    "AirportName": "Wicomico County",
                    "CityCode": "SBY"
                },
                {
                    "AirportCode": "SBZ",
                    "AirportName": "Sibiu",
                    "CityCode": "SBZ"
                },
                {
                    "AirportCode": "SCC",
                    "AirportName": "Prudhoe Bay Deadh",
                    "CityCode": "SCC"
                },
                {
                    "AirportCode": "SCE",
                    "AirportName": "State College",
                    "CityCode": "SCE"
                },
                {
                    "AirportCode": "SCF",
                    "AirportName": "Scottsdale Municipal",
                    "CityCode": "PHX"
                },
                {
                    "AirportCode": "SCJ",
                    "AirportName": "Smith Cove",
                    "CityCode": "SCJ"
                },
                {
                    "AirportCode": "SCK",
                    "AirportName": "Stockton",
                    "CityCode": "SCK"
                },
                {
                    "AirportCode": "SCL",
                    "AirportName": "Arturo Merino Benitez",
                    "CityCode": "SCL"
                },
                {
                    "AirportCode": "SCN",
                    "AirportName": "Ensheim",
                    "CityCode": "SCN"
                },
                {
                    "AirportCode": "SCO",
                    "AirportName": "Aktau",
                    "CityCode": "SCO"
                },
                {
                    "AirportCode": "SCQ",
                    "AirportName": "Santiago",
                    "CityCode": "SCQ"
                },
                {
                    "AirportCode": "SCT",
                    "AirportName": "Socotra",
                    "CityCode": "SCT"
                },
                {
                    "AirportCode": "SCU",
                    "AirportName": "Antonio Maceo",
                    "CityCode": "SCU"
                },
                {
                    "AirportCode": "SCV",
                    "AirportName": "Salcea",
                    "CityCode": "SCV"
                },
                {
                    "AirportCode": "SCW",
                    "AirportName": "Syktyvkar",
                    "CityCode": "SCW"
                },
                {
                    "AirportCode": "SCZ",
                    "AirportName": "Santa Cruz Is",
                    "CityCode": "SCZ"
                },
                {
                    "AirportCode": "SDA",
                    "AirportName": "Saddam Int'l",
                    "CityCode": "BGW"
                },
                {
                    "AirportCode": "SDD",
                    "AirportName": "Lubango",
                    "CityCode": "SDD"
                },
                {
                    "AirportCode": "SDE",
                    "AirportName": "Sgo  Del Estero",
                    "CityCode": "SDE"
                },
                {
                    "AirportCode": "SDF",
                    "AirportName": "Standiford Field",
                    "CityCode": "SDF"
                },
                {
                    "AirportCode": "SDJ",
                    "AirportName": "Sendai",
                    "CityCode": "SDJ"
                },
                {
                    "AirportCode": "SDK",
                    "AirportName": "Sandakan",
                    "CityCode": "SDK"
                },
                {
                    "AirportCode": "SDL",
                    "AirportName": "Sundsvall Harnosa",
                    "CityCode": "SDL"
                },
                {
                    "AirportCode": "SDM",
                    "AirportName": "Brown Field",
                    "CityCode": "SAN"
                },
                {
                    "AirportCode": "SDN",
                    "AirportName": "Sandane",
                    "CityCode": "SDN"
                },
                {
                    "AirportCode": "SDP",
                    "AirportName": "Sand Point Municipal",
                    "CityCode": "SDP"
                },
                {
                    "AirportCode": "SDQ",
                    "AirportName": "Las Americas",
                    "CityCode": "SDQ"
                },
                {
                    "AirportCode": "SDR",
                    "AirportName": "Santander",
                    "CityCode": "SDR"
                },
                {
                    "AirportCode": "SDT",
                    "AirportName": "Saidu Sharif",
                    "CityCode": "SDT"
                },
                {
                    "AirportCode": "SDU",
                    "AirportName": "Santos Dumont",
                    "CityCode": "RIO"
                },
                {
                    "AirportCode": "SDV",
                    "AirportName": "Sde Dov",
                    "CityCode": "TLV"
                },
                {
                    "AirportCode": "SDX",
                    "AirportName": "Sedona",
                    "CityCode": "SDX"
                },
                {
                    "AirportCode": "SDY",
                    "AirportName": "Richland Municipal",
                    "CityCode": "SDY"
                },
                {
                    "AirportCode": "SEA",
                    "AirportName": "Seattle/Tacoma Int'l",
                    "CityCode": "SEA"
                },
                {
                    "AirportCode": "SEB",
                    "AirportName": "Sebha",
                    "CityCode": "SEB"
                },
                {
                    "AirportCode": "SEH",
                    "AirportName": "Senggeh",
                    "CityCode": "SEH"
                },
                {
                    "AirportCode": "SEN",
                    "AirportName": "Southend Municipal",
                    "CityCode": "SEN"
                },
                {
                    "AirportCode": "SEO",
                    "AirportName": "Seguela",
                    "CityCode": "SEO"
                },
                {
                    "AirportCode": "SEY",
                    "AirportName": "Selibaby",
                    "CityCode": "SEY"
                },
                {
                    "AirportCode": "SEZ",
                    "AirportName": "Seychelles Int'l",
                    "CityCode": "SEZ"
                },
                {
                    "AirportCode": "SFA",
                    "AirportName": "Sfax El Maou",
                    "CityCode": "SFA"
                },
                {
                    "AirportCode": "SFB",
                    "AirportName": "Orlando Sanford Intl",
                    "CityCode": "ORL"
                },
                {
                    "AirportCode": "SFD",
                    "AirportName": "Las Flecheras",
                    "CityCode": "SFD"
                },
                {
                    "AirportCode": "SFF",
                    "AirportName": "Felts Field",
                    "CityCode": "GEG"
                },
                {
                    "AirportCode": "SFG",
                    "AirportName": "Esperance",
                    "CityCode": "SFG"
                },
                {
                    "AirportCode": "SFH",
                    "AirportName": "San Felipe",
                    "CityCode": "SFH"
                },
                {
                    "AirportCode": "SFI",
                    "AirportName": "Safi",
                    "CityCode": "SFI"
                },
                {
                    "AirportCode": "SFJ",
                    "AirportName": "Kangerlussuaq",
                    "CityCode": "SFJ"
                },
                {
                    "AirportCode": "SFO",
                    "AirportName": "San Francisco Int'l",
                    "CityCode": "SFO"
                },
                {
                    "AirportCode": "SFS",
                    "AirportName": "Subic Bay Int'l",
                    "CityCode": "SFS"
                },
                {
                    "AirportCode": "SFT",
                    "AirportName": "Skelleftea",
                    "CityCode": "SFT"
                },
                {
                    "AirportCode": "SFU",
                    "AirportName": "Safia",
                    "CityCode": "SFU"
                },
                {
                    "AirportCode": "SGA",
                    "AirportName": "Sheghnan",
                    "CityCode": "SGA"
                },
                {
                    "AirportCode": "SGC",
                    "AirportName": "Surgut",
                    "CityCode": "SGC"
                },
                {
                    "AirportCode": "SGD",
                    "AirportName": "Sonderborg",
                    "CityCode": "SGD"
                },
                {
                    "AirportCode": "SGF",
                    "AirportName": "Springfield-Branson Regional",
                    "CityCode": "SGF"
                },
                {
                    "AirportCode": "SGN",
                    "AirportName": "Ho Chi Minh",
                    "CityCode": "SGN"
                },
                {
                    "AirportCode": "SGU",
                    "AirportName": "Saint George Municipal",
                    "CityCode": "SGU"
                },
                {
                    "AirportCode": "SGV",
                    "AirportName": "Sierra Grande",
                    "CityCode": "SGV"
                },
                {
                    "AirportCode": "SGX",
                    "AirportName": "Songea",
                    "CityCode": "SGX"
                },
                {
                    "AirportCode": "SGY",
                    "AirportName": "Skagway Municipal",
                    "CityCode": "SGY"
                },
                {
                    "AirportCode": "SHA",
                    "AirportName": "Hongqiao",
                    "CityCode": "SHA"
                },
                {
                    "AirportCode": "SHB",
                    "AirportName": "Nakashibetsu",
                    "CityCode": "SHB"
                },
                {
                    "AirportCode": "SHC",
                    "AirportName": "Indaselassie",
                    "CityCode": "SHC"
                },
                {
                    "AirportCode": "SHD",
                    "AirportName": "Shenandoah Valley",
                    "CityCode": "SHD"
                },
                {
                    "AirportCode": "SHE",
                    "AirportName": "Shenyang",
                    "CityCode": "SHE"
                },
                {
                    "AirportCode": "SHG",
                    "AirportName": "Shungnak",
                    "CityCode": "SHG"
                },
                {
                    "AirportCode": "SHH",
                    "AirportName": "Shishmaref",
                    "CityCode": "SHH"
                },
                {
                    "AirportCode": "SHI",
                    "AirportName": "Shimojishima",
                    "CityCode": "SHI"
                },
                {
                    "AirportCode": "SHJ",
                    "AirportName": "Sharjah",
                    "CityCode": "SHJ"
                },
                {
                    "AirportCode": "SHK",
                    "AirportName": "Sehonghong",
                    "CityCode": "SHK"
                },
                {
                    "AirportCode": "SHL",
                    "AirportName": "Shillong",
                    "CityCode": "SHL"
                },
                {
                    "AirportCode": "SHM",
                    "AirportName": "Shirahama",
                    "CityCode": "SHM"
                },
                {
                    "AirportCode": "SHO",
                    "AirportName": "Solak",
                    "CityCode": "SHO"
                },
                {
                    "AirportCode": "SHP",
                    "AirportName": "Qinhuangdao",
                    "CityCode": "SHP"
                },
                {
                    "AirportCode": "SHR",
                    "AirportName": "Sheridan",
                    "CityCode": "SHR"
                },
                {
                    "AirportCode": "SHS",
                    "AirportName": "Shashi",
                    "CityCode": "SHS"
                },
                {
                    "AirportCode": "SHV",
                    "AirportName": "Shreveport Regional",
                    "CityCode": "SHV"
                },
                {
                    "AirportCode": "SHX",
                    "AirportName": "Shageluk",
                    "CityCode": "SHX"
                },
                {
                    "AirportCode": "SHY",
                    "AirportName": "Shinyanga",
                    "CityCode": "SHY"
                },
                {
                    "AirportCode": "SIA",
                    "AirportName": "Xiguan",
                    "CityCode": "SIA"
                },
                {
                    "AirportCode": "SIB",
                    "AirportName": "Sibiti",
                    "CityCode": "SIB"
                },
                {
                    "AirportCode": "SID",
                    "AirportName": "Amilcar Cabral Int'l",
                    "CityCode": "SID"
                },
                {
                    "AirportCode": "SIG",
                    "AirportName": "Isla Grande",
                    "CityCode": "SJU"
                },
                {
                    "AirportCode": "SIJ",
                    "AirportName": "Siglufjordur",
                    "CityCode": "SIJ"
                },
                {
                    "AirportCode": "SIN",
                    "AirportName": "Changi",
                    "CityCode": "SIN"
                },
                {
                    "AirportCode": "SIO",
                    "AirportName": "Smithton",
                    "CityCode": "SIO"
                },
                {
                    "AirportCode": "SIP",
                    "AirportName": "Simferopol",
                    "CityCode": "SIP"
                },
                {
                    "AirportCode": "SIQ",
                    "AirportName": "Dabo",
                    "CityCode": "SIQ"
                },
                {
                    "AirportCode": "SIR",
                    "AirportName": "Sion",
                    "CityCode": "SIR"
                },
                {
                    "AirportCode": "SIS",
                    "AirportName": "Sishen",
                    "CityCode": "SIS"
                },
                {
                    "AirportCode": "SIT",
                    "AirportName": "Sitka",
                    "CityCode": "SIT"
                },
                {
                    "AirportCode": "SIU",
                    "AirportName": "Siuna",
                    "CityCode": "SIU"
                },
                {
                    "AirportCode": "SJB",
                    "AirportName": "San Joaquin",
                    "CityCode": "SJB"
                },
                {
                    "AirportCode": "SJC",
                    "AirportName": "San Jose Municipal",
                    "CityCode": "SJC"
                },
                {
                    "AirportCode": "SJD",
                    "AirportName": "CABO SAN LUCAS",
                    "CityCode": "SJD"
                },
                {
                    "AirportCode": "SJE",
                    "AirportName": "San Jose Del Gua",
                    "CityCode": "SJE"
                },
                {
                    "AirportCode": "SJI",
                    "AirportName": "Mcguire Field",
                    "CityCode": "SJI"
                },
                {
                    "AirportCode": "SJJ",
                    "AirportName": "Butmir",
                    "CityCode": "SJJ"
                },
                {
                    "AirportCode": "SJK",
                    "AirportName": "Sao Jose Dos Campos",
                    "CityCode": "SJK"
                },
                {
                    "AirportCode": "SJO",
                    "AirportName": "Juan Santamaria Int'l",
                    "CityCode": "SJO"
                },
                {
                    "AirportCode": "SJP",
                    "AirportName": "Sao Jose Do Rio Preto",
                    "CityCode": "SJP"
                },
                {
                    "AirportCode": "SJT",
                    "AirportName": "Mathis Field",
                    "CityCode": "SJT"
                },
                {
                    "AirportCode": "SJU",
                    "AirportName": "Luis Munoz Marin",
                    "CityCode": "SJU"
                },
                {
                    "AirportCode": "SJZ",
                    "AirportName": "Sao Jorge Island",
                    "CityCode": "SJZ"
                },
                {
                    "AirportCode": "SKB",
                    "AirportName": "Robert L Bradshaw",
                    "CityCode": "SKB"
                },
                {
                    "AirportCode": "SKC",
                    "AirportName": "Suki",
                    "CityCode": "SKC"
                },
                {
                    "AirportCode": "SKD",
                    "AirportName": "Samarkand",
                    "CityCode": "SKD"
                },
                {
                    "AirportCode": "SKE",
                    "AirportName": "Skien",
                    "CityCode": "SKE"
                },
                {
                    "AirportCode": "SKG",
                    "AirportName": "Makedonia",
                    "CityCode": "SKG"
                },
                {
                    "AirportCode": "SKK",
                    "AirportName": "Shaktoolik",
                    "CityCode": "SKK"
                },
                {
                    "AirportCode": "SKN",
                    "AirportName": "Skagen",
                    "CityCode": "SKN"
                },
                {
                    "AirportCode": "SKO",
                    "AirportName": "Sokoto",
                    "CityCode": "SKO"
                },
                {
                    "AirportCode": "SKP",
                    "AirportName": "Skopje",
                    "CityCode": "SKP"
                },
                {
                    "AirportCode": "SKR",
                    "AirportName": "Shakiso",
                    "CityCode": "SKR"
                },
                {
                    "AirportCode": "SKS",
                    "AirportName": "Vojens",
                    "CityCode": "SKS"
                },
                {
                    "AirportCode": "SKU",
                    "AirportName": "Skiros",
                    "CityCode": "SKU"
                },
                {
                    "AirportCode": "SKV",
                    "AirportName": "Mount Sinai",
                    "CityCode": "SKV"
                },
                {
                    "AirportCode": "SKZ",
                    "AirportName": "Sukkur",
                    "CityCode": "SKZ"
                },
                {
                    "AirportCode": "SLA",
                    "AirportName": "Gen Belgrano",
                    "CityCode": "SLA"
                },
                {
                    "AirportCode": "SLC",
                    "AirportName": "Salt Lake City Int'l",
                    "CityCode": "SLC"
                },
                {
                    "AirportCode": "SLD",
                    "AirportName": "Sliac",
                    "CityCode": "SLD"
                },
                {
                    "AirportCode": "SLE",
                    "AirportName": "Mcnary Field",
                    "CityCode": "SLE"
                },
                {
                    "AirportCode": "SLH",
                    "AirportName": "Sola",
                    "CityCode": "SLH"
                },
                {
                    "AirportCode": "SLJ",
                    "AirportName": "Stellar Air Park",
                    "CityCode": "CHD"
                },
                {
                    "AirportCode": "SLK",
                    "AirportName": "Adirondack",
                    "CityCode": "SLK"
                },
                {
                    "AirportCode": "SLL",
                    "AirportName": "Salalah",
                    "CityCode": "SLL"
                },
                {
                    "AirportCode": "SLN",
                    "AirportName": "Salina",
                    "CityCode": "SLN"
                },
                {
                    "AirportCode": "SLP",
                    "AirportName": "San Luis Potosi",
                    "CityCode": "SLP"
                },
                {
                    "AirportCode": "SLQ",
                    "AirportName": "Sleetmute",
                    "CityCode": "SLQ"
                },
                {
                    "AirportCode": "SLS",
                    "AirportName": "Silistra",
                    "CityCode": "SLS"
                },
                {
                    "AirportCode": "SLU",
                    "AirportName": "George F.L.Charles",
                    "CityCode": "SLU"
                },
                {
                    "AirportCode": "SLV",
                    "AirportName": "Simla",
                    "CityCode": "SLV"
                },
                {
                    "AirportCode": "SLX",
                    "AirportName": "Salt Cay",
                    "CityCode": "SLX"
                },
                {
                    "AirportCode": "SLZ",
                    "AirportName": "Sao Luiz",
                    "CityCode": "SLZ"
                },
                {
                    "AirportCode": "SMA",
                    "AirportName": "Vila Do Porto",
                    "CityCode": "SMA"
                },
                {
                    "AirportCode": "SMF",
                    "AirportName": "Sacramento",
                    "CityCode": "SAC"
                },
                {
                    "AirportCode": "SMI",
                    "AirportName": "Samos",
                    "CityCode": "SMI"
                },
                {
                    "AirportCode": "SMK",
                    "AirportName": "St Michael",
                    "CityCode": "SMK"
                },
                {
                    "AirportCode": "SML",
                    "AirportName": "Stella Maris Estate Airstrip",
                    "CityCode": "SML"
                },
                {
                    "AirportCode": "SMM",
                    "AirportName": "Semporna",
                    "CityCode": "SMM"
                },
                {
                    "AirportCode": "SMO",
                    "AirportName": "Santa Monica",
                    "CityCode": "SMO"
                },
                {
                    "AirportCode": "SMR",
                    "AirportName": "Simon Bolivar",
                    "CityCode": "SMR"
                },
                {
                    "AirportCode": "SMS",
                    "AirportName": "Sainte Marie",
                    "CityCode": "SMS"
                },
                {
                    "AirportCode": "SMV",
                    "AirportName": "Samedan",
                    "CityCode": "SMV"
                },
                {
                    "AirportCode": "SMW",
                    "AirportName": "Smara",
                    "CityCode": "SMW"
                },
                {
                    "AirportCode": "SMX",
                    "AirportName": "Public",
                    "CityCode": "SMX"
                },
                {
                    "AirportCode": "SMY",
                    "AirportName": "Simenti",
                    "CityCode": "SMY"
                },
                {
                    "AirportCode": "SNA",
                    "AirportName": "John Wayne",
                    "CityCode": "SNA"
                },
                {
                    "AirportCode": "SNB",
                    "AirportName": "Snake Bay",
                    "CityCode": "SNB"
                },
                {
                    "AirportCode": "SNE",
                    "AirportName": "Preguica",
                    "CityCode": "SNE"
                },
                {
                    "AirportCode": "SNG",
                    "AirportName": "San Ignacio De Ve",
                    "CityCode": "SNG"
                },
                {
                    "AirportCode": "SNI",
                    "AirportName": "R.E. Murray",
                    "CityCode": "SNI"
                },
                {
                    "AirportCode": "SNN",
                    "AirportName": "Shannon",
                    "CityCode": "SNN"
                },
                {
                    "AirportCode": "SNO",
                    "AirportName": "Sakon Nakhon",
                    "CityCode": "SNO"
                },
                {
                    "AirportCode": "SNP",
                    "AirportName": "Saint Paul Island",
                    "CityCode": "SNP"
                },
                {
                    "AirportCode": "SNU",
                    "AirportName": "Santa Clara",
                    "CityCode": "SNU"
                },
                {
                    "AirportCode": "SNW",
                    "AirportName": "Thandwe",
                    "CityCode": "SNW"
                },
                {
                    "AirportCode": "SNY",
                    "AirportName": "Sidney",
                    "CityCode": "SNY"
                },
                {
                    "AirportCode": "SOC",
                    "AirportName": "Adi Sumarmo",
                    "CityCode": "SOC"
                },
                {
                    "AirportCode": "SOE",
                    "AirportName": "Souanke",
                    "CityCode": "SOE"
                },
                {
                    "AirportCode": "SOF",
                    "AirportName": "Sofia",
                    "CityCode": "SOF"
                },
                {
                    "AirportCode": "SOG",
                    "AirportName": "Haukasen",
                    "CityCode": "SOG"
                },
                {
                    "AirportCode": "SOI",
                    "AirportName": "South Molle Islan",
                    "CityCode": "SOI"
                },
                {
                    "AirportCode": "SOJ",
                    "AirportName": "Sorkjosen",
                    "CityCode": "SOJ"
                },
                {
                    "AirportCode": "SOK",
                    "AirportName": "Semongkong",
                    "CityCode": "SOK"
                },
                {
                    "AirportCode": "SOM",
                    "AirportName": "El Tigre",
                    "CityCode": "SOM"
                },
                {
                    "AirportCode": "SON",
                    "AirportName": "Espiritu Santo",
                    "CityCode": "SON"
                },
                {
                    "AirportCode": "SOO",
                    "AirportName": "Soderhamn",
                    "CityCode": "SOO"
                },
                {
                    "AirportCode": "SOQ",
                    "AirportName": "Jefman",
                    "CityCode": "SOQ"
                },
                {
                    "AirportCode": "SOT",
                    "AirportName": "Sodankyla",
                    "CityCode": "SOT"
                },
                {
                    "AirportCode": "SOU",
                    "AirportName": "Eastleigh",
                    "CityCode": "SOU"
                },
                {
                    "AirportCode": "SOV",
                    "AirportName": "Seldovia",
                    "CityCode": "SOV"
                },
                {
                    "AirportCode": "SOY",
                    "AirportName": "Stronsay",
                    "CityCode": "SOY"
                },
                {
                    "AirportCode": "SPC",
                    "AirportName": "La Palma",
                    "CityCode": "SPC"
                },
                {
                    "AirportCode": "SPD",
                    "AirportName": "Saidpur",
                    "CityCode": "SPD"
                },
                {
                    "AirportCode": "SPF",
                    "AirportName": "Black Hills",
                    "CityCode": "SPF"
                },
                {
                    "AirportCode": "SPI",
                    "AirportName": "Capital",
                    "CityCode": "SPI"
                },
                {
                    "AirportCode": "SPN",
                    "AirportName": "Saipan Int'l",
                    "CityCode": "SPN"
                },
                {
                    "AirportCode": "SPP",
                    "AirportName": "Menongue",
                    "CityCode": "SPP"
                },
                {
                    "AirportCode": "SPR",
                    "AirportName": "San Pedro",
                    "CityCode": "SPR"
                },
                {
                    "AirportCode": "SPU",
                    "AirportName": "Split",
                    "CityCode": "SPU"
                },
                {
                    "AirportCode": "SPW",
                    "AirportName": "Spencer Municipal",
                    "CityCode": "SPW"
                },
                {
                    "AirportCode": "SPY",
                    "AirportName": "San Pedro",
                    "CityCode": "SPY"
                },
                {
                    "AirportCode": "SQC",
                    "AirportName": "Southern Cross",
                    "CityCode": "SQC"
                },
                {
                    "AirportCode": "SQF",
                    "AirportName": "Solano",
                    "CityCode": "SQF"
                },
                {
                    "AirportCode": "SQI",
                    "AirportName": "Whiteside County",
                    "CityCode": "SQI"
                },
                {
                    "AirportCode": "SRE",
                    "AirportName": "Sucre",
                    "CityCode": "SRE"
                },
                {
                    "AirportCode": "SRG",
                    "AirportName": "Achmad Uani",
                    "CityCode": "SRG"
                },
                {
                    "AirportCode": "SRH",
                    "AirportName": "Sarh",
                    "CityCode": "SRH"
                },
                {
                    "AirportCode": "SRI",
                    "AirportName": "Samarinda",
                    "CityCode": "SRI"
                },
                {
                    "AirportCode": "SRJ",
                    "AirportName": "Capitan G Y Guardia",
                    "CityCode": "SRJ"
                },
                {
                    "AirportCode": "SRN",
                    "AirportName": "Strahan",
                    "CityCode": "SRN"
                },
                {
                    "AirportCode": "SRO",
                    "AirportName": "Santana Ramos",
                    "CityCode": "SRO"
                },
                {
                    "AirportCode": "SRQ",
                    "AirportName": "Bradenton",
                    "CityCode": "SRQ"
                },
                {
                    "AirportCode": "SRV",
                    "AirportName": "Stony River",
                    "CityCode": "SRV"
                },
                {
                    "AirportCode": "SRX",
                    "AirportName": "Sert",
                    "CityCode": "SRX"
                },
                {
                    "AirportCode": "SRZ",
                    "AirportName": "El Trompillo",
                    "CityCode": "SRZ"
                },
                {
                    "AirportCode": "SSA",
                    "AirportName": "Dois De Julho",
                    "CityCode": "SSA"
                },
                {
                    "AirportCode": "SSE",
                    "AirportName": "Sholapur",
                    "CityCode": "SSE"
                },
                {
                    "AirportCode": "SSG",
                    "AirportName": "Santa Isabel",
                    "CityCode": "SSG"
                },
                {
                    "AirportCode": "SSH",
                    "AirportName": "Ophira",
                    "CityCode": "SSH"
                },
                {
                    "AirportCode": "SSJ",
                    "AirportName": "Stokka",
                    "CityCode": "SSJ"
                },
                {
                    "AirportCode": "SSR",
                    "AirportName": "Sara",
                    "CityCode": "SSR"
                },
                {
                    "AirportCode": "SSS",
                    "AirportName": "Siassi",
                    "CityCode": "SSS"
                },
                {
                    "AirportCode": "SSY",
                    "AirportName": "M'Banza Congo",
                    "CityCode": "SSY"
                },
                {
                    "AirportCode": "STA",
                    "AirportName": "Stauning",
                    "CityCode": "STA"
                },
                {
                    "AirportCode": "STB",
                    "AirportName": "L Delicias",
                    "CityCode": "STB"
                },
                {
                    "AirportCode": "STD",
                    "AirportName": "Mayo Guerrero",
                    "CityCode": "STD"
                },
                {
                    "AirportCode": "STG",
                    "AirportName": "St George Island",
                    "CityCode": "STG"
                },
                {
                    "AirportCode": "STI",
                    "AirportName": "Santiago Municipal",
                    "CityCode": "STI"
                },
                {
                    "AirportCode": "STL",
                    "AirportName": "Lambert-St Louis Int'l",
                    "CityCode": "STL"
                },
                {
                    "AirportCode": "STM",
                    "AirportName": "Eduardo Gomes",
                    "CityCode": "STM"
                },
                {
                    "AirportCode": "STN",
                    "AirportName": "Stansted",
                    "CityCode": "LON"
                },
                {
                    "AirportCode": "STP",
                    "AirportName": "St Paul Downtown",
                    "CityCode": "STP"
                },
                {
                    "AirportCode": "STR",
                    "AirportName": "Stuttgart-Echterdingen",
                    "CityCode": "STR"
                },
                {
                    "AirportCode": "STS",
                    "AirportName": "Sonoma County",
                    "CityCode": "STS"
                },
                {
                    "AirportCode": "STT",
                    "AirportName": "St Thomas Island",
                    "CityCode": "STT"
                },
                {
                    "AirportCode": "STV",
                    "AirportName": "Surat",
                    "CityCode": "STV"
                },
                {
                    "AirportCode": "STW",
                    "AirportName": "Stavropol",
                    "CityCode": "STW"
                },
                {
                    "AirportCode": "STX",
                    "AirportName": "Henry E Rohlsen",
                    "CityCode": "STX"
                },
                {
                    "AirportCode": "STY",
                    "AirportName": "Salto",
                    "CityCode": "STY"
                },
                {
                    "AirportCode": "STZ",
                    "AirportName": "Confresa",
                    "CityCode": "STZ"
                },
                {
                    "AirportCode": "SUA",
                    "AirportName": "Witham Field",
                    "CityCode": "SUA"
                },
                {
                    "AirportCode": "SUB",
                    "AirportName": "Juanda",
                    "CityCode": "SUB"
                },
                {
                    "AirportCode": "SUE",
                    "AirportName": "Door County",
                    "CityCode": "SUE"
                },
                {
                    "AirportCode": "SUF",
                    "AirportName": "S Eufemia",
                    "CityCode": "SUF"
                },
                {
                    "AirportCode": "SUH",
                    "AirportName": "Sur",
                    "CityCode": "SUH"
                },
                {
                    "AirportCode": "SUI",
                    "AirportName": "Babusheri",
                    "CityCode": "SUI"
                },
                {
                    "AirportCode": "SUJ",
                    "AirportName": "Satu Mare",
                    "CityCode": "SUJ"
                },
                {
                    "AirportCode": "SUL",
                    "AirportName": "Sui",
                    "CityCode": "SUL"
                },
                {
                    "AirportCode": "SUN",
                    "AirportName": "Sun Valley",
                    "CityCode": "SUN"
                },
                {
                    "AirportCode": "SUT",
                    "AirportName": "Sumbawanga",
                    "CityCode": "SUT"
                },
                {
                    "AirportCode": "SUV",
                    "AirportName": "Nausori",
                    "CityCode": "SUV"
                },
                {
                    "AirportCode": "SUX",
                    "AirportName": "Siouc Gateway",
                    "CityCode": "SUX"
                },
                {
                    "AirportCode": "SVA",
                    "AirportName": "Savoonga",
                    "CityCode": "SVA"
                },
                {
                    "AirportCode": "SVB",
                    "AirportName": "Sambava",
                    "CityCode": "SVB"
                },
                {
                    "AirportCode": "SVC",
                    "AirportName": "Grant County",
                    "CityCode": "SVC"
                },
                {
                    "AirportCode": "SVD",
                    "AirportName": "St Vincent",
                    "CityCode": "SVD"
                },
                {
                    "AirportCode": "SVG",
                    "AirportName": "Sola",
                    "CityCode": "SVG"
                },
                {
                    "AirportCode": "SVI",
                    "AirportName": "San Vicente",
                    "CityCode": "SVI"
                },
                {
                    "AirportCode": "SVJ",
                    "AirportName": "Helle",
                    "CityCode": "SVJ"
                },
                {
                    "AirportCode": "SVL",
                    "AirportName": "Savonlinna",
                    "CityCode": "SVL"
                },
                {
                    "AirportCode": "SVO",
                    "AirportName": "Sheremetyevo",
                    "CityCode": "MOW"
                },
                {
                    "AirportCode": "SVP",
                    "AirportName": "Kuito",
                    "CityCode": "SVP"
                },
                {
                    "AirportCode": "SVQ",
                    "AirportName": "Sevilla",
                    "CityCode": "SVQ"
                },
                {
                    "AirportCode": "SVS",
                    "AirportName": "Stevens Village",
                    "CityCode": "SVS"
                },
                {
                    "AirportCode": "SVU",
                    "AirportName": "Savusavu",
                    "CityCode": "SVU"
                },
                {
                    "AirportCode": "SVX",
                    "AirportName": "Ekaterinburg",
                    "CityCode": "SVX"
                },
                {
                    "AirportCode": "SVZ",
                    "AirportName": "San Antonio",
                    "CityCode": "SVZ"
                },
                {
                    "AirportCode": "SWA",
                    "AirportName": "Shantou",
                    "CityCode": "SWA"
                },
                {
                    "AirportCode": "SWD",
                    "AirportName": "Seward",
                    "CityCode": "SWD"
                },
                {
                    "AirportCode": "SWF",
                    "AirportName": "Newburgh Stewart",
                    "CityCode": "POU"
                },
                {
                    "AirportCode": "SWG",
                    "AirportName": "Satwag",
                    "CityCode": "SWG"
                },
                {
                    "AirportCode": "SWJ",
                    "AirportName": "South West Bay",
                    "CityCode": "SWJ"
                },
                {
                    "AirportCode": "SWP",
                    "AirportName": "Swakopmund",
                    "CityCode": "SWP"
                },
                {
                    "AirportCode": "SWQ",
                    "AirportName": "Brang Bidji",
                    "CityCode": "SWQ"
                },
                {
                    "AirportCode": "SWX",
                    "AirportName": "Shakawe",
                    "CityCode": "SWX"
                },
                {
                    "AirportCode": "SWY",
                    "AirportName": "Sitiawan",
                    "CityCode": "SWY"
                },
                {
                    "AirportCode": "SXB",
                    "AirportName": "Entzheim",
                    "CityCode": "SXB"
                },
                {
                    "AirportCode": "SXD",
                    "AirportName": "Sophia Antipolis",
                    "CityCode": "SXD"
                },
                {
                    "AirportCode": "SXF",
                    "AirportName": "Schoenefeld",
                    "CityCode": "BER"
                },
                {
                    "AirportCode": "SXH",
                    "AirportName": "Sehulea",
                    "CityCode": "SXH"
                },
                {
                    "AirportCode": "SXL",
                    "AirportName": "Collooney",
                    "CityCode": "SXL"
                },
                {
                    "AirportCode": "SXM",
                    "AirportName": "St Maarten",
                    "CityCode": "SXM"
                },
                {
                    "AirportCode": "SXO",
                    "AirportName": "Sao Felix Do Arag",
                    "CityCode": "SXO"
                },
                {
                    "AirportCode": "SXR",
                    "AirportName": "Srinagar",
                    "CityCode": "SXR"
                },
                {
                    "AirportCode": "SXS",
                    "AirportName": "Sahabat 16",
                    "CityCode": "SXS"
                },
                {
                    "AirportCode": "SXT",
                    "AirportName": "Taman Negara",
                    "CityCode": "SXT"
                },
                {
                    "AirportCode": "SXU",
                    "AirportName": "Soddu",
                    "CityCode": "SXU"
                },
                {
                    "AirportCode": "SXV",
                    "AirportName": "Salem",
                    "CityCode": "SXV"
                },
                {
                    "AirportCode": "SYB",
                    "AirportName": "Seal Bay",
                    "CityCode": "SYB"
                },
                {
                    "AirportCode": "SYD",
                    "AirportName": "Kingsford Smith",
                    "CityCode": "SYD"
                },
                {
                    "AirportCode": "SYR",
                    "AirportName": "Hancock Int'l",
                    "CityCode": "SYR"
                },
                {
                    "AirportCode": "SYU",
                    "AirportName": "Warraber Island",
                    "CityCode": "SYU"
                },
                {
                    "AirportCode": "SYX",
                    "AirportName": "Sanya",
                    "CityCode": "SYX"
                },
                {
                    "AirportCode": "SYY",
                    "AirportName": "Stornoway",
                    "CityCode": "SYY"
                },
                {
                    "AirportCode": "SYZ",
                    "AirportName": "Shiraz",
                    "CityCode": "SYZ"
                },
                {
                    "AirportCode": "SZA",
                    "AirportName": "Soyo",
                    "CityCode": "SZA"
                },
                {
                    "AirportCode": "SZG",
                    "AirportName": "Salzburg",
                    "CityCode": "SZG"
                },
                {
                    "AirportCode": "SZK",
                    "AirportName": "Skukuza",
                    "CityCode": "SZK"
                },
                {
                    "AirportCode": "SZS",
                    "AirportName": "Stewart Island",
                    "CityCode": "SZS"
                },
                {
                    "AirportCode": "SZX",
                    "AirportName": "Shenzhen",
                    "CityCode": "SZX"
                },
                {
                    "AirportCode": "SZZ",
                    "AirportName": "Goleviow",
                    "CityCode": "SZZ"
                },
                {
                    "AirportCode": "TAB",
                    "AirportName": "Tobago",
                    "CityCode": "TAB"
                },
                {
                    "AirportCode": "TAC",
                    "AirportName": "D.Z. Romualdez",
                    "CityCode": "TAC"
                },
                {
                    "AirportCode": "TAE",
                    "AirportName": "Taegu",
                    "CityCode": "TAE"
                },
                {
                    "AirportCode": "TAH",
                    "AirportName": "Tanna",
                    "CityCode": "TAH"
                },
                {
                    "AirportCode": "TAI",
                    "AirportName": "Tadji",
                    "CityCode": "TAI"
                },
                {
                    "AirportCode": "TAK",
                    "AirportName": "Takamatsu",
                    "CityCode": "TAK"
                },
                {
                    "AirportCode": "TAL",
                    "AirportName": "Ralph Calhoun",
                    "CityCode": "TAL"
                },
                {
                    "AirportCode": "TAM",
                    "AirportName": "Gen F Javier Mina",
                    "CityCode": "TAM"
                },
                {
                    "AirportCode": "TAO",
                    "AirportName": "Qingdao",
                    "CityCode": "TAO"
                },
                {
                    "AirportCode": "TAP",
                    "AirportName": "Tapachula Int'l",
                    "CityCode": "TAP"
                },
                {
                    "AirportCode": "TAQ",
                    "AirportName": "TARCOOLA",
                    "CityCode": "TAQ"
                },
                {
                    "AirportCode": "TAS",
                    "AirportName": "Tashkent",
                    "CityCode": "TAS"
                },
                {
                    "AirportCode": "TAT",
                    "AirportName": "Tatry Poprad",
                    "CityCode": "TAT"
                },
                {
                    "AirportCode": "TAV",
                    "AirportName": "Tau",
                    "CityCode": "TAV"
                },
                {
                    "AirportCode": "TAW",
                    "AirportName": "Tacuarembo",
                    "CityCode": "TAW"
                },
                {
                    "AirportCode": "TAZ",
                    "AirportName": "Tashauz",
                    "CityCode": "TAZ"
                },
                {
                    "AirportCode": "TBE",
                    "AirportName": "Timbunke",
                    "CityCode": "TBE"
                },
                {
                    "AirportCode": "TBF",
                    "AirportName": "Tabiteuea North",
                    "CityCode": "TBF"
                },
                {
                    "AirportCode": "TBG",
                    "AirportName": "Tabubil",
                    "CityCode": "TBG"
                },
                {
                    "AirportCode": "TBN",
                    "AirportName": "Forney Aaf",
                    "CityCode": "TBN"
                },
                {
                    "AirportCode": "TBO",
                    "AirportName": "Tabora",
                    "CityCode": "TBO"
                },
                {
                    "AirportCode": "TBP",
                    "AirportName": "Tumbes",
                    "CityCode": "TBP"
                },
                {
                    "AirportCode": "TBS",
                    "AirportName": "Novo Alexeyevka",
                    "CityCode": "TBS"
                },
                {
                    "AirportCode": "TBT",
                    "AirportName": "Tabatinga Internacional",
                    "CityCode": "TBT"
                },
                {
                    "AirportCode": "TBU",
                    "AirportName": "Tongatapu Int'l",
                    "CityCode": "TBU"
                },
                {
                    "AirportCode": "TBY",
                    "AirportName": "Tsabong",
                    "CityCode": "TBY"
                },
                {
                    "AirportCode": "TBZ",
                    "AirportName": "Tabriz",
                    "CityCode": "TBZ"
                },
                {
                    "AirportCode": "TCA",
                    "AirportName": "Tennant Creek",
                    "CityCode": "TCA"
                },
                {
                    "AirportCode": "TCB",
                    "AirportName": "Treasure Cay",
                    "CityCode": "TCB"
                },
                {
                    "AirportCode": "TCH",
                    "AirportName": "Tchibanga",
                    "CityCode": "TCH"
                },
                {
                    "AirportCode": "TCL",
                    "AirportName": "Van De Graaf",
                    "CityCode": "TCL"
                },
                {
                    "AirportCode": "TCO",
                    "AirportName": "Tumaco",
                    "CityCode": "TCO"
                },
                {
                    "AirportCode": "TCP",
                    "AirportName": "Taba international",
                    "CityCode": "TCP"
                },
                {
                    "AirportCode": "TCQ",
                    "AirportName": "Tacna",
                    "CityCode": "TCQ"
                },
                {
                    "AirportCode": "TCR",
                    "AirportName": "Tuticorin",
                    "CityCode": "TCR"
                },
                {
                    "AirportCode": "TCT",
                    "AirportName": "Takotna",
                    "CityCode": "TCT"
                },
                {
                    "AirportCode": "TCU",
                    "AirportName": "Thaba Nchu",
                    "CityCode": "TCU"
                },
                {
                    "AirportCode": "TDA",
                    "AirportName": "Trinidad",
                    "CityCode": "TDA"
                },
                {
                    "AirportCode": "TDB",
                    "AirportName": "Tetabedi",
                    "CityCode": "TDB"
                },
                {
                    "AirportCode": "TDD",
                    "AirportName": "Trinidad",
                    "CityCode": "TDD"
                },
                {
                    "AirportCode": "TDJ",
                    "AirportName": "Tadjoura",
                    "CityCode": "TDJ"
                },
                {
                    "AirportCode": "TDV",
                    "AirportName": "Tanandava",
                    "CityCode": "TDV"
                },
                {
                    "AirportCode": "TEB",
                    "AirportName": "Teterboro",
                    "CityCode": "TEB"
                },
                {
                    "AirportCode": "TED",
                    "AirportName": "Thisted",
                    "CityCode": "TED"
                },
                {
                    "AirportCode": "TEE",
                    "AirportName": "Tbessa",
                    "CityCode": "TEE"
                },
                {
                    "AirportCode": "TEF",
                    "AirportName": "Telfer",
                    "CityCode": "TEF"
                },
                {
                    "AirportCode": "TEG",
                    "AirportName": "Tenkodogo",
                    "CityCode": "TEG"
                },
                {
                    "AirportCode": "TEI",
                    "AirportName": "Tezu",
                    "CityCode": "TEI"
                },
                {
                    "AirportCode": "TEO",
                    "AirportName": "Terapo",
                    "CityCode": "TEO"
                },
                {
                    "AirportCode": "TER",
                    "AirportName": "Lajes",
                    "CityCode": "TER"
                },
                {
                    "AirportCode": "TES",
                    "AirportName": "Tessenei",
                    "CityCode": "TES"
                },
                {
                    "AirportCode": "TET",
                    "AirportName": "Matunda",
                    "CityCode": "TET"
                },
                {
                    "AirportCode": "TEU",
                    "AirportName": "Manapouri",
                    "CityCode": "TEU"
                },
                {
                    "AirportCode": "TEX",
                    "AirportName": "Telluride",
                    "CityCode": "TEX"
                },
                {
                    "AirportCode": "TEY",
                    "AirportName": "Thingeyri",
                    "CityCode": "TEY"
                },
                {
                    "AirportCode": "TEZ",
                    "AirportName": "Salonibari",
                    "CityCode": "TEZ"
                },
                {
                    "AirportCode": "TFF",
                    "AirportName": "Tefe",
                    "CityCode": "TFF"
                },
                {
                    "AirportCode": "TFI",
                    "AirportName": "Tufi",
                    "CityCode": "TFI"
                },
                {
                    "AirportCode": "TFL",
                    "AirportName": "Teofilo Otoni",
                    "CityCode": "TFL"
                },
                {
                    "AirportCode": "TFM",
                    "AirportName": "Telefomin",
                    "CityCode": "TFM"
                },
                {
                    "AirportCode": "TFN",
                    "AirportName": "Tenerife Norte Los Rodeos",
                    "CityCode": "TCI"
                },
                {
                    "AirportCode": "TFS",
                    "AirportName": "Tenerife Sur Reina Sofia",
                    "CityCode": "TCI"
                },
                {
                    "AirportCode": "TGG",
                    "AirportName": "Sultan Mahmood",
                    "CityCode": "TGG"
                },
                {
                    "AirportCode": "TGH",
                    "AirportName": "Tongoa",
                    "CityCode": "TGH"
                },
                {
                    "AirportCode": "TGI",
                    "AirportName": "Tingo Maria",
                    "CityCode": "TGI"
                },
                {
                    "AirportCode": "TGJ",
                    "AirportName": "Tiga",
                    "CityCode": "TGJ"
                },
                {
                    "AirportCode": "TGM",
                    "AirportName": "Tirgu Mures",
                    "CityCode": "TGM"
                },
                {
                    "AirportCode": "TGN",
                    "AirportName": "La Trobe Traralgon",
                    "CityCode": "TGN"
                },
                {
                    "AirportCode": "TGO",
                    "AirportName": "Tongliao",
                    "CityCode": "TGO"
                },
                {
                    "AirportCode": "TGR",
                    "AirportName": "Touggourt",
                    "CityCode": "TGR"
                },
                {
                    "AirportCode": "TGT",
                    "AirportName": "Tanga",
                    "CityCode": "TGT"
                },
                {
                    "AirportCode": "TGU",
                    "AirportName": "Toncontin",
                    "CityCode": "TGU"
                },
                {
                    "AirportCode": "TGV",
                    "AirportName": "Targovishte",
                    "CityCode": "TGV"
                },
                {
                    "AirportCode": "TGZ",
                    "AirportName": "Tuxtla Gutierrez",
                    "CityCode": "TGZ"
                },
                {
                    "AirportCode": "THC",
                    "AirportName": "Tchien",
                    "CityCode": "THC"
                },
                {
                    "AirportCode": "THE",
                    "AirportName": "Teresina",
                    "CityCode": "THE"
                },
                {
                    "AirportCode": "THF",
                    "AirportName": "Tempelhof",
                    "CityCode": "BER"
                },
                {
                    "AirportCode": "THG",
                    "AirportName": "Thangool",
                    "CityCode": "THG"
                },
                {
                    "AirportCode": "THI",
                    "AirportName": "Tichitt",
                    "CityCode": "THI"
                },
                {
                    "AirportCode": "THK",
                    "AirportName": "Thakhek",
                    "CityCode": "THK"
                },
                {
                    "AirportCode": "THL",
                    "AirportName": "Tachilek",
                    "CityCode": "THL"
                },
                {
                    "AirportCode": "THN",
                    "AirportName": "Trollhattan",
                    "CityCode": "THN"
                },
                {
                    "AirportCode": "THO",
                    "AirportName": "Thorshofn",
                    "CityCode": "THO"
                },
                {
                    "AirportCode": "THR",
                    "AirportName": "Mehrabad",
                    "CityCode": "THR"
                },
                {
                    "AirportCode": "THS",
                    "AirportName": "SUKHOTHAI",
                    "CityCode": "THS"
                },
                {
                    "AirportCode": "THT",
                    "AirportName": "Tamchakett",
                    "CityCode": "THT"
                },
                {
                    "AirportCode": "THY",
                    "AirportName": "Thohoyandou",
                    "CityCode": "THY"
                },
                {
                    "AirportCode": "THZ",
                    "AirportName": "Tahoua",
                    "CityCode": "THZ"
                },
                {
                    "AirportCode": "TIA",
                    "AirportName": "Rinas",
                    "CityCode": "TIA"
                },
                {
                    "AirportCode": "TIC",
                    "AirportName": "Tinak Island",
                    "CityCode": "TIC"
                },
                {
                    "AirportCode": "TID",
                    "AirportName": "Bouchekif",
                    "CityCode": "TID"
                },
                {
                    "AirportCode": "TIE",
                    "AirportName": "Tippi",
                    "CityCode": "TIE"
                },
                {
                    "AirportCode": "TIH",
                    "AirportName": "Tikehau Atoll",
                    "CityCode": "TIH"
                },
                {
                    "AirportCode": "TII",
                    "AirportName": "Tirinkot",
                    "CityCode": "TII"
                },
                {
                    "AirportCode": "TIJ",
                    "AirportName": "Rodriguez",
                    "CityCode": "TIJ"
                },
                {
                    "AirportCode": "TIM",
                    "AirportName": "Timika",
                    "CityCode": "TIM"
                },
                {
                    "AirportCode": "TIN",
                    "AirportName": "Tindouf",
                    "CityCode": "TIN"
                },
                {
                    "AirportCode": "TIP",
                    "AirportName": "Tripoli Int'l",
                    "CityCode": "TIP"
                },
                {
                    "AirportCode": "TIQ",
                    "AirportName": "Tinian",
                    "CityCode": "TIQ"
                },
                {
                    "AirportCode": "TIR",
                    "AirportName": "Tirupati",
                    "CityCode": "TIR"
                },
                {
                    "AirportCode": "TIS",
                    "AirportName": "Thursday Island",
                    "CityCode": "TIS"
                },
                {
                    "AirportCode": "TIU",
                    "AirportName": "Timaru",
                    "CityCode": "TIU"
                },
                {
                    "AirportCode": "TIV",
                    "AirportName": "Tivat",
                    "CityCode": "TIV"
                },
                {
                    "AirportCode": "TIX",
                    "AirportName": "Space Center Exect.",
                    "CityCode": "TIX"
                },
                {
                    "AirportCode": "TIY",
                    "AirportName": "Tidjikja",
                    "CityCode": "TIY"
                },
                {
                    "AirportCode": "TIZ",
                    "AirportName": "Tari",
                    "CityCode": "TIZ"
                },
                {
                    "AirportCode": "TJA",
                    "AirportName": "Tarija",
                    "CityCode": "TJA"
                },
                {
                    "AirportCode": "TJM",
                    "AirportName": "Tyumen",
                    "CityCode": "TJM"
                },
                {
                    "AirportCode": "TJQ",
                    "AirportName": "Bulutumbang",
                    "CityCode": "TJQ"
                },
                {
                    "AirportCode": "TJS",
                    "AirportName": "Tanjung Selor",
                    "CityCode": "TJS"
                },
                {
                    "AirportCode": "TKC",
                    "AirportName": "Tiko",
                    "CityCode": "TKC"
                },
                {
                    "AirportCode": "TKD",
                    "AirportName": "Takoradi",
                    "CityCode": "TKD"
                },
                {
                    "AirportCode": "TKF",
                    "AirportName": "Truckee",
                    "CityCode": "TKF"
                },
                {
                    "AirportCode": "TKG",
                    "AirportName": "Branit",
                    "CityCode": "TKG"
                },
                {
                    "AirportCode": "TKI",
                    "AirportName": "Tokeen",
                    "CityCode": "TKI"
                },
                {
                    "AirportCode": "TKJ",
                    "AirportName": "Tok",
                    "CityCode": "TKJ"
                },
                {
                    "AirportCode": "TKK",
                    "AirportName": "Truk",
                    "CityCode": "TKK"
                },
                {
                    "AirportCode": "TKN",
                    "AirportName": "Tokunoshima",
                    "CityCode": "TKN"
                },
                {
                    "AirportCode": "TKP",
                    "AirportName": "Takapoto",
                    "CityCode": "TKP"
                },
                {
                    "AirportCode": "TKQ",
                    "AirportName": "Kigoma",
                    "CityCode": "TKQ"
                },
                {
                    "AirportCode": "TKS",
                    "AirportName": "Tokushima",
                    "CityCode": "TKS"
                },
                {
                    "AirportCode": "TKU",
                    "AirportName": "Turku",
                    "CityCode": "TKU"
                },
                {
                    "AirportCode": "TKV",
                    "AirportName": "Tatakoto",
                    "CityCode": "TKV"
                },
                {
                    "AirportCode": "TKX",
                    "AirportName": "Takaroa",
                    "CityCode": "TKX"
                },
                {
                    "AirportCode": "TLA",
                    "AirportName": "Teller",
                    "CityCode": "TLA"
                },
                {
                    "AirportCode": "TLC",
                    "AirportName": "Toluca",
                    "CityCode": "MEX"
                },
                {
                    "AirportCode": "TLD",
                    "AirportName": "Tuli Lodge",
                    "CityCode": "TLD"
                },
                {
                    "AirportCode": "TLE",
                    "AirportName": "Tulear",
                    "CityCode": "TLE"
                },
                {
                    "AirportCode": "TLH",
                    "AirportName": "Tallahassee Municipal",
                    "CityCode": "TLH"
                },
                {
                    "AirportCode": "TLI",
                    "AirportName": "Tolitoli",
                    "CityCode": "TLI"
                },
                {
                    "AirportCode": "TLL",
                    "AirportName": "Ulemiste",
                    "CityCode": "TLL"
                },
                {
                    "AirportCode": "TLM",
                    "AirportName": "Zenata",
                    "CityCode": "TLM"
                },
                {
                    "AirportCode": "TLN",
                    "AirportName": "Hyeres",
                    "CityCode": "XHE"
                },
                {
                    "AirportCode": "TLP",
                    "AirportName": "Tumolbil",
                    "CityCode": "TLP"
                },
                {
                    "AirportCode": "TLS",
                    "AirportName": "Blagnac",
                    "CityCode": "TLS"
                },
                {
                    "AirportCode": "TLT",
                    "AirportName": "Tuluksak",
                    "CityCode": "TLT"
                },
                {
                    "AirportCode": "TLV",
                    "AirportName": "Ben Gurion Int'l",
                    "CityCode": "TLV"
                },
                {
                    "AirportCode": "TMC",
                    "AirportName": "Tambolaka",
                    "CityCode": "TMC"
                },
                {
                    "AirportCode": "TMD",
                    "AirportName": "Timbedra",
                    "CityCode": "TMD"
                },
                {
                    "AirportCode": "TME",
                    "AirportName": "Tame",
                    "CityCode": "TME"
                },
                {
                    "AirportCode": "TMG",
                    "AirportName": "Tomanggong",
                    "CityCode": "TMG"
                },
                {
                    "AirportCode": "TMH",
                    "AirportName": "Tanahmerah",
                    "CityCode": "TMH"
                },
                {
                    "AirportCode": "TML",
                    "AirportName": "Tamale",
                    "CityCode": "TML"
                },
                {
                    "AirportCode": "TMM",
                    "AirportName": "Tamatave",
                    "CityCode": "TMM"
                },
                {
                    "AirportCode": "TMN",
                    "AirportName": "Tamana Island",
                    "CityCode": "TMN"
                },
                {
                    "AirportCode": "TMP",
                    "AirportName": "Tampere-Pirkkala",
                    "CityCode": "TMP"
                },
                {
                    "AirportCode": "TMR",
                    "AirportName": "Aguemar",
                    "CityCode": "TMR"
                },
                {
                    "AirportCode": "TMS",
                    "AirportName": "Sao Tome Is",
                    "CityCode": "TMS"
                },
                {
                    "AirportCode": "TMT",
                    "AirportName": "Trombetas",
                    "CityCode": "TMT"
                },
                {
                    "AirportCode": "TMW",
                    "AirportName": "Tamworth",
                    "CityCode": "TMW"
                },
                {
                    "AirportCode": "TMY",
                    "AirportName": "Tiom",
                    "CityCode": "TMY"
                },
                {
                    "AirportCode": "TNA",
                    "AirportName": "Jinan",
                    "CityCode": "TNA"
                },
                {
                    "AirportCode": "TNE",
                    "AirportName": "Tanegashima",
                    "CityCode": "TNE"
                },
                {
                    "AirportCode": "TNG",
                    "AirportName": "Boukhalef",
                    "CityCode": "TNG"
                },
                {
                    "AirportCode": "TNI",
                    "AirportName": "Satna",
                    "CityCode": "TNI"
                },
                {
                    "AirportCode": "TNJ",
                    "AirportName": "Kidjang",
                    "CityCode": "TNJ"
                },
                {
                    "AirportCode": "TNK",
                    "AirportName": "Tununak",
                    "CityCode": "TNK"
                },
                {
                    "AirportCode": "TNN",
                    "AirportName": "Tainan",
                    "CityCode": "TNN"
                },
                {
                    "AirportCode": "TNR",
                    "AirportName": "Antananarivo",
                    "CityCode": "TNR"
                },
                {
                    "AirportCode": "TOA",
                    "AirportName": "Torrance",
                    "CityCode": "TOA"
                },
                {
                    "AirportCode": "TOB",
                    "AirportName": "Tobruk",
                    "CityCode": "TOB"
                },
                {
                    "AirportCode": "TOD",
                    "AirportName": "Tioman",
                    "CityCode": "TOD"
                },
                {
                    "AirportCode": "TOE",
                    "AirportName": "Tozeur",
                    "CityCode": "TOE"
                },
                {
                    "AirportCode": "TOF",
                    "AirportName": "Tomsk",
                    "CityCode": "TOF"
                },
                {
                    "AirportCode": "TOG",
                    "AirportName": "Togiak Village",
                    "CityCode": "TOG"
                },
                {
                    "AirportCode": "TOH",
                    "AirportName": "Torres Airstrip",
                    "CityCode": "TOH"
                },
                {
                    "AirportCode": "TOL",
                    "AirportName": "Toledo Express",
                    "CityCode": "TOL"
                },
                {
                    "AirportCode": "TOM",
                    "AirportName": "Tombouctou",
                    "CityCode": "TOM"
                },
                {
                    "AirportCode": "TOP",
                    "AirportName": "Philip Billard",
                    "CityCode": "TOP"
                },
                {
                    "AirportCode": "TOS",
                    "AirportName": "Tromso/Langnes",
                    "CityCode": "TOS"
                },
                {
                    "AirportCode": "TOU",
                    "AirportName": "Touho",
                    "CityCode": "TOU"
                },
                {
                    "AirportCode": "TOY",
                    "AirportName": "Toyama",
                    "CityCode": "TOY"
                },
                {
                    "AirportCode": "TOZ",
                    "AirportName": "Touba",
                    "CityCode": "TOZ"
                },
                {
                    "AirportCode": "TPA",
                    "AirportName": "Tampa Int'l",
                    "CityCode": "TPA"
                },
                {
                    "AirportCode": "TPC",
                    "AirportName": "Tarapoa",
                    "CityCode": "TPC"
                },
                {
                    "AirportCode": "TPE",
                    "AirportName": "Chiang Kai Chek",
                    "CityCode": "TPE"
                },
                {
                    "AirportCode": "TPP",
                    "AirportName": "Tarapoto",
                    "CityCode": "TPP"
                },
                {
                    "AirportCode": "TPQ",
                    "AirportName": "Tepic",
                    "CityCode": "TPQ"
                },
                {
                    "AirportCode": "TPS",
                    "AirportName": "Birgi",
                    "CityCode": "TPS"
                },
                {
                    "AirportCode": "TRB",
                    "AirportName": "Turbo",
                    "CityCode": "TRB"
                },
                {
                    "AirportCode": "TRC",
                    "AirportName": "Torreon",
                    "CityCode": "TRC"
                },
                {
                    "AirportCode": "TRD",
                    "AirportName": "Vaernes",
                    "CityCode": "TRD"
                },
                {
                    "AirportCode": "TRE",
                    "AirportName": "Tiree",
                    "CityCode": "TRE"
                },
                {
                    "AirportCode": "TRF",
                    "AirportName": "Sandefjord",
                    "CityCode": "OSL"
                },
                {
                    "AirportCode": "TRG",
                    "AirportName": "Tauranga",
                    "CityCode": "TRG"
                },
                {
                    "AirportCode": "TRI",
                    "AirportName": "Tri-Cities",
                    "CityCode": "TRI"
                },
                {
                    "AirportCode": "TRK",
                    "AirportName": "Tarakan",
                    "CityCode": "TRK"
                },
                {
                    "AirportCode": "TRN",
                    "AirportName": "Sandro Pertini",
                    "CityCode": "TRN"
                },
                {
                    "AirportCode": "TRO",
                    "AirportName": "Taree",
                    "CityCode": "TRO"
                },
                {
                    "AirportCode": "TRS",
                    "AirportName": "Dei Legionari",
                    "CityCode": "TRS"
                },
                {
                    "AirportCode": "TRU",
                    "AirportName": "Trujillo",
                    "CityCode": "TRU"
                },
                {
                    "AirportCode": "TRV",
                    "AirportName": "Trivandrum Int'l",
                    "CityCode": "TRV"
                },
                {
                    "AirportCode": "TRW",
                    "AirportName": "Bonriki",
                    "CityCode": "TRW"
                },
                {
                    "AirportCode": "TRZ",
                    "AirportName": "Tiruchirapally Civil",
                    "CityCode": "TRZ"
                },
                {
                    "AirportCode": "TSA",
                    "AirportName": "Sung Shan",
                    "CityCode": "TPE"
                },
                {
                    "AirportCode": "TSB",
                    "AirportName": "Tsumeb",
                    "CityCode": "TSB"
                },
                {
                    "AirportCode": "TSD",
                    "AirportName": "Tshipise",
                    "CityCode": "TSD"
                },
                {
                    "AirportCode": "TSE",
                    "AirportName": "Astana",
                    "CityCode": "TSE"
                },
                {
                    "AirportCode": "TSF",
                    "AirportName": "Treviso",
                    "CityCode": "VCE"
                },
                {
                    "AirportCode": "TSH",
                    "AirportName": "Tshikapa",
                    "CityCode": "TSH"
                },
                {
                    "AirportCode": "TSJ",
                    "AirportName": "Tsushima",
                    "CityCode": "TSJ"
                },
                {
                    "AirportCode": "TSM",
                    "AirportName": "Taos",
                    "CityCode": "TSM"
                },
                {
                    "AirportCode": "TSN",
                    "AirportName": "Tianjin",
                    "CityCode": "TSN"
                },
                {
                    "AirportCode": "TSO",
                    "AirportName": "Tresco",
                    "CityCode": "ISC"
                },
                {
                    "AirportCode": "TSR",
                    "AirportName": "Timisoara",
                    "CityCode": "TSR"
                },
                {
                    "AirportCode": "TST",
                    "AirportName": "Trang",
                    "CityCode": "TST"
                },
                {
                    "AirportCode": "TSU",
                    "AirportName": "Tabiteuea South",
                    "CityCode": "TSU"
                },
                {
                    "AirportCode": "TSV",
                    "AirportName": "Townsville",
                    "CityCode": "TSV"
                },
                {
                    "AirportCode": "TTA",
                    "AirportName": "Tan Tan",
                    "CityCode": "TTA"
                },
                {
                    "AirportCode": "TTB",
                    "AirportName": "Arbatax",
                    "CityCode": "TTB"
                },
                {
                    "AirportCode": "TTE",
                    "AirportName": "Babullah",
                    "CityCode": "TTE"
                },
                {
                    "AirportCode": "TTJ",
                    "AirportName": "Tottori",
                    "CityCode": "TTJ"
                },
                {
                    "AirportCode": "TTN",
                    "AirportName": "Mercer County",
                    "CityCode": "TTN"
                },
                {
                    "AirportCode": "TTR",
                    "AirportName": "Tana Toraja",
                    "CityCode": "TTR"
                },
                {
                    "AirportCode": "TTS",
                    "AirportName": "Tsaratanana",
                    "CityCode": "TTS"
                },
                {
                    "AirportCode": "TTT",
                    "AirportName": "Taitung",
                    "CityCode": "TTT"
                },
                {
                    "AirportCode": "TTU",
                    "AirportName": "Sania Ramel",
                    "CityCode": "TTU"
                },
                {
                    "AirportCode": "TUA",
                    "AirportName": "Tulcan",
                    "CityCode": "TUA"
                },
                {
                    "AirportCode": "TUB",
                    "AirportName": "Tubuai",
                    "CityCode": "TUB"
                },
                {
                    "AirportCode": "TUC",
                    "AirportName": "Benj Matienzo",
                    "CityCode": "TUC"
                },
                {
                    "AirportCode": "TUD",
                    "AirportName": "Tambacounda",
                    "CityCode": "TUD"
                },
                {
                    "AirportCode": "TUF",
                    "AirportName": "St Symphorien",
                    "CityCode": "TUF"
                },
                {
                    "AirportCode": "TUJ",
                    "AirportName": "Tum",
                    "CityCode": "TUJ"
                },
                {
                    "AirportCode": "TUK",
                    "AirportName": "Turbat",
                    "CityCode": "TUK"
                },
                {
                    "AirportCode": "TUL",
                    "AirportName": "Tulsa Int'l",
                    "CityCode": "TUL"
                },
                {
                    "AirportCode": "TUM",
                    "AirportName": "Tumut",
                    "CityCode": "TUM"
                },
                {
                    "AirportCode": "TUN",
                    "AirportName": "Carthage",
                    "CityCode": "TUN"
                },
                {
                    "AirportCode": "TUO",
                    "AirportName": "Taupo",
                    "CityCode": "TUO"
                },
                {
                    "AirportCode": "TUP",
                    "AirportName": "Lemons Municipal",
                    "CityCode": "TUP"
                },
                {
                    "AirportCode": "TUR",
                    "AirportName": "Tucurui",
                    "CityCode": "TUR"
                },
                {
                    "AirportCode": "TUS",
                    "AirportName": "Tucson Int'l",
                    "CityCode": "TUS"
                },
                {
                    "AirportCode": "TUU",
                    "AirportName": "TABUK",
                    "CityCode": "TUU"
                },
                {
                    "AirportCode": "TUV",
                    "AirportName": "Tucupita",
                    "CityCode": "TUV"
                },
                {
                    "AirportCode": "TUZ",
                    "AirportName": "Tucuma",
                    "CityCode": "TUZ"
                },
                {
                    "AirportCode": "TVA",
                    "AirportName": "Morafenobe",
                    "CityCode": "TVA"
                },
                {
                    "AirportCode": "TVC",
                    "AirportName": "Traverse City",
                    "CityCode": "TVC"
                },
                {
                    "AirportCode": "TVF",
                    "AirportName": "Thief River Falls",
                    "CityCode": "TVF"
                },
                {
                    "AirportCode": "TVL",
                    "AirportName": "Lake Tahoe South",
                    "CityCode": "TVL"
                },
                {
                    "AirportCode": "TVU",
                    "AirportName": "Matei",
                    "CityCode": "TVU"
                },
                {
                    "AirportCode": "TWA",
                    "AirportName": "Twin Hills",
                    "CityCode": "TWA"
                },
                {
                    "AirportCode": "TWB",
                    "AirportName": "Toowoomba",
                    "CityCode": "TWB"
                },
                {
                    "AirportCode": "TWF",
                    "AirportName": "Twin Falls City County",
                    "CityCode": "TWF"
                },
                {
                    "AirportCode": "TWU",
                    "AirportName": "Tawau",
                    "CityCode": "TWU"
                },
                {
                    "AirportCode": "TXG",
                    "AirportName": "Taichung",
                    "CityCode": "TXG"
                },
                {
                    "AirportCode": "TXK",
                    "AirportName": "Texarkana Municipal",
                    "CityCode": "TXK"
                },
                {
                    "AirportCode": "TXL",
                    "AirportName": "Tegel",
                    "CityCode": "BER"
                },
                {
                    "AirportCode": "TXM",
                    "AirportName": "Teminabuan",
                    "CityCode": "TXM"
                },
                {
                    "AirportCode": "TXN",
                    "AirportName": "Tunxi",
                    "CityCode": "TXN"
                },
                {
                    "AirportCode": "TXU",
                    "AirportName": "Tabou",
                    "CityCode": "TXU"
                },
                {
                    "AirportCode": "TYL",
                    "AirportName": "Talara",
                    "CityCode": "TYL"
                },
                {
                    "AirportCode": "TYN",
                    "AirportName": "Taiyuan",
                    "CityCode": "TYN"
                },
                {
                    "AirportCode": "TYR",
                    "AirportName": "Pounds Field",
                    "CityCode": "TYR"
                },
                {
                    "AirportCode": "TYS",
                    "AirportName": "Mc Ghee Tyson",
                    "CityCode": "TYS"
                },
                {
                    "AirportCode": "TZN",
                    "AirportName": "South Andros",
                    "CityCode": "TZN"
                },
                {
                    "AirportCode": "TZX",
                    "AirportName": "Trabzon",
                    "CityCode": "TZX"
                },
                {
                    "AirportCode": "UAC",
                    "AirportName": "San Luis Rio Colorado",
                    "CityCode": "UAC"
                },
                {
                    "AirportCode": "UAE",
                    "AirportName": "MOUNT AUE",
                    "CityCode": "UAE"
                },
                {
                    "AirportCode": "UAH",
                    "AirportName": "Ua Huka",
                    "CityCode": "UAH"
                },
                {
                    "AirportCode": "UAK",
                    "AirportName": "Narsarsuaq",
                    "CityCode": "UAK"
                },
                {
                    "AirportCode": "UAL",
                    "AirportName": "Luau",
                    "CityCode": "UAL"
                },
                {
                    "AirportCode": "UAP",
                    "AirportName": "Ua Pou",
                    "CityCode": "UAP"
                },
                {
                    "AirportCode": "UAQ",
                    "AirportName": "San Juan",
                    "CityCode": "UAQ"
                },
                {
                    "AirportCode": "UAS",
                    "AirportName": "Samburu",
                    "CityCode": "UAS"
                },
                {
                    "AirportCode": "UBA",
                    "AirportName": "Uberaba",
                    "CityCode": "UBA"
                },
                {
                    "AirportCode": "UBB",
                    "AirportName": "Mabuiag Island",
                    "CityCode": "UBB"
                },
                {
                    "AirportCode": "UBJ",
                    "AirportName": "Ube",
                    "CityCode": "UBJ"
                },
                {
                    "AirportCode": "UBP",
                    "AirportName": "Muang Ubon",
                    "CityCode": "UBP"
                },
                {
                    "AirportCode": "UCA",
                    "AirportName": "Oneida County",
                    "CityCode": "UCA"
                },
                {
                    "AirportCode": "UCC",
                    "AirportName": "YUCCA FLAT",
                    "CityCode": "UCC"
                },
                {
                    "AirportCode": "UCN",
                    "AirportName": "Buchanan",
                    "CityCode": "UCN"
                },
                {
                    "AirportCode": "UCT",
                    "AirportName": "Ukhta",
                    "CityCode": "UCT"
                },
                {
                    "AirportCode": "UDD",
                    "AirportName": "Bermuda Dunes",
                    "CityCode": "PSP"
                },
                {
                    "AirportCode": "UDI",
                    "AirportName": "Eduardo Gomes",
                    "CityCode": "UDI"
                },
                {
                    "AirportCode": "UDJ",
                    "AirportName": "Uzhgorod",
                    "CityCode": "UDJ"
                },
                {
                    "AirportCode": "UDR",
                    "AirportName": "Dabok",
                    "CityCode": "UDR"
                },
                {
                    "AirportCode": "UEE",
                    "AirportName": "Queenstown",
                    "CityCode": "UEE"
                },
                {
                    "AirportCode": "UEL",
                    "AirportName": "Quelimane",
                    "CityCode": "UEL"
                },
                {
                    "AirportCode": "UEO",
                    "AirportName": "Kumejima",
                    "CityCode": "UEO"
                },
                {
                    "AirportCode": "UET",
                    "AirportName": "Quetta",
                    "CityCode": "UET"
                },
                {
                    "AirportCode": "UFA",
                    "AirportName": "Ufa",
                    "CityCode": "UFA"
                },
                {
                    "AirportCode": "UGB",
                    "AirportName": "Ugashik Bay",
                    "CityCode": "PIP"
                },
                {
                    "AirportCode": "UGC",
                    "AirportName": "Urgench",
                    "CityCode": "UGC"
                },
                {
                    "AirportCode": "UGI",
                    "AirportName": "Uganik",
                    "CityCode": "UGI"
                },
                {
                    "AirportCode": "UGN",
                    "AirportName": "Waukegan Memorial",
                    "CityCode": "UGN"
                },
                {
                    "AirportCode": "UGO",
                    "AirportName": "Uige",
                    "CityCode": "UGO"
                },
                {
                    "AirportCode": "UIB",
                    "AirportName": "Quibdo",
                    "CityCode": "UIB"
                },
                {
                    "AirportCode": "UII",
                    "AirportName": "Utila",
                    "CityCode": "UII"
                },
                {
                    "AirportCode": "UIN",
                    "AirportName": "Quincy Municipal",
                    "CityCode": "UIN"
                },
                {
                    "AirportCode": "UIO",
                    "AirportName": "Mariscal Sucr",
                    "CityCode": "UIO"
                },
                {
                    "AirportCode": "UIP",
                    "AirportName": "Pluguffan",
                    "CityCode": "UIP"
                },
                {
                    "AirportCode": "UIR",
                    "AirportName": "Quirindi",
                    "CityCode": "UIR"
                },
                {
                    "AirportCode": "UIT",
                    "AirportName": "Jaluit Island",
                    "CityCode": "UIT"
                },
                {
                    "AirportCode": "UJE",
                    "AirportName": "Ujae Island",
                    "CityCode": "UJE"
                },
                {
                    "AirportCode": "UKK",
                    "AirportName": "Ust Kamenogorsk",
                    "CityCode": "UKK"
                },
                {
                    "AirportCode": "UKR",
                    "AirportName": "Mukeiras",
                    "CityCode": "UKR"
                },
                {
                    "AirportCode": "UKU",
                    "AirportName": "Nuku",
                    "CityCode": "UKU"
                },
                {
                    "AirportCode": "ULB",
                    "AirportName": "Ulei",
                    "CityCode": "ULB"
                },
                {
                    "AirportCode": "ULN",
                    "AirportName": "Ulan Bator",
                    "CityCode": "ULN"
                },
                {
                    "AirportCode": "ULP",
                    "AirportName": "Quilpie",
                    "CityCode": "ULP"
                },
                {
                    "AirportCode": "ULY",
                    "AirportName": "Ulyanovsk",
                    "CityCode": "ULY"
                },
                {
                    "AirportCode": "UMD",
                    "AirportName": "Uummannaq",
                    "CityCode": "UMD"
                },
                {
                    "AirportCode": "UME",
                    "AirportName": "Umea",
                    "CityCode": "UME"
                },
                {
                    "AirportCode": "UMR",
                    "AirportName": "Woomera",
                    "CityCode": "UMR"
                },
                {
                    "AirportCode": "UNA",
                    "AirportName": "Una",
                    "CityCode": "UNA"
                },
                {
                    "AirportCode": "UND",
                    "AirportName": "Kunduz",
                    "CityCode": "UND"
                },
                {
                    "AirportCode": "UNE",
                    "AirportName": "Qachas Nek",
                    "CityCode": "UNE"
                },
                {
                    "AirportCode": "UNG",
                    "AirportName": "Kiunga",
                    "CityCode": "UNG"
                },
                {
                    "AirportCode": "UNI",
                    "AirportName": "Union Island",
                    "CityCode": "UNI"
                },
                {
                    "AirportCode": "UNK",
                    "AirportName": "Unalakleet",
                    "CityCode": "UNK"
                },
                {
                    "AirportCode": "UOL",
                    "AirportName": "Buol",
                    "CityCode": "UOL"
                },
                {
                    "AirportCode": "UPG",
                    "AirportName": "Hasanudin",
                    "CityCode": "UPG"
                },
                {
                    "AirportCode": "UPN",
                    "AirportName": "Uruapan",
                    "CityCode": "UPN"
                },
                {
                    "AirportCode": "UQE",
                    "AirportName": "Queen",
                    "CityCode": "UQE"
                },
                {
                    "AirportCode": "URB",
                    "AirportName": "Ernesto Pochler",
                    "CityCode": "URB"
                },
                {
                    "AirportCode": "URC",
                    "AirportName": "Urumqi",
                    "CityCode": "URC"
                },
                {
                    "AirportCode": "URD",
                    "AirportName": "BURG FEUERSTEIN",
                    "CityCode": "URD"
                },
                {
                    "AirportCode": "URG",
                    "AirportName": "Ruben Berta",
                    "CityCode": "URG"
                },
                {
                    "AirportCode": "URO",
                    "AirportName": "Boos",
                    "CityCode": "URO"
                },
                {
                    "AirportCode": "URR",
                    "AirportName": "Urrao",
                    "CityCode": "URR"
                },
                {
                    "AirportCode": "USH",
                    "AirportName": "Ushuaia",
                    "CityCode": "USH"
                },
                {
                    "AirportCode": "USL",
                    "AirportName": "Useless Loop",
                    "CityCode": "USL"
                },
                {
                    "AirportCode": "USM",
                    "AirportName": "Samui",
                    "CityCode": "USM"
                },
                {
                    "AirportCode": "USN",
                    "AirportName": "Ulsan",
                    "CityCode": "USN"
                },
                {
                    "AirportCode": "UTH",
                    "AirportName": "Udon Thani",
                    "CityCode": "UTH"
                },
                {
                    "AirportCode": "UTK",
                    "AirportName": "Utirik Island",
                    "CityCode": "UTK"
                },
                {
                    "AirportCode": "UTN",
                    "AirportName": "Upington Municipal",
                    "CityCode": "UTN"
                },
                {
                    "AirportCode": "UTP",
                    "AirportName": "Utapao",
                    "CityCode": "UTP"
                },
                {
                    "AirportCode": "UTT",
                    "AirportName": "Umtata",
                    "CityCode": "UTT"
                },
                {
                    "AirportCode": "UUD",
                    "AirportName": "Ulan Ude",
                    "CityCode": "UUD"
                },
                {
                    "AirportCode": "UUS",
                    "AirportName": "Yuzhno Sakhalinsk",
                    "CityCode": "UUS"
                },
                {
                    "AirportCode": "UVE",
                    "AirportName": "Ouvea",
                    "CityCode": "UVE"
                },
                {
                    "AirportCode": "UVF",
                    "AirportName": "Hewanorra",
                    "CityCode": "SLU"
                },
                {
                    "AirportCode": "UVL",
                    "AirportName": "Kharga",
                    "CityCode": "UVL"
                },
                {
                    "AirportCode": "UYL",
                    "AirportName": "Nyala",
                    "CityCode": "UYL"
                },
                {
                    "AirportCode": "VAA",
                    "AirportName": "Vaasa",
                    "CityCode": "VAA"
                },
                {
                    "AirportCode": "VAF",
                    "AirportName": "Chabeuil",
                    "CityCode": "VAF"
                },
                {
                    "AirportCode": "VAG",
                    "AirportName": "Maj. Brig. Tromposky",
                    "CityCode": "VAG"
                },
                {
                    "AirportCode": "VAI",
                    "AirportName": "Vanimo",
                    "CityCode": "VAI"
                },
                {
                    "AirportCode": "VAK",
                    "AirportName": "Chevak",
                    "CityCode": "VAK"
                },
                {
                    "AirportCode": "VAN",
                    "AirportName": "Van",
                    "CityCode": "VAN"
                },
                {
                    "AirportCode": "VAR",
                    "AirportName": "Varna",
                    "CityCode": "VAR"
                },
                {
                    "AirportCode": "VAS",
                    "AirportName": "Sivas",
                    "CityCode": "VAS"
                },
                {
                    "AirportCode": "VAT",
                    "AirportName": "Vatomandry",
                    "CityCode": "VAT"
                },
                {
                    "AirportCode": "VAV",
                    "AirportName": "Lupepauu",
                    "CityCode": "VAV"
                },
                {
                    "AirportCode": "VAW",
                    "AirportName": "Vardoe",
                    "CityCode": "VAW"
                },
                {
                    "AirportCode": "VBY",
                    "AirportName": "Visby",
                    "CityCode": "VBY"
                },
                {
                    "AirportCode": "VCD",
                    "AirportName": "Victoria River Do",
                    "CityCode": "VCD"
                },
                {
                    "AirportCode": "VCE",
                    "AirportName": "Marco Polo",
                    "CityCode": "VCE"
                },
                {
                    "AirportCode": "VCP",
                    "AirportName": "Viracopos",
                    "CityCode": "SAO"
                },
                {
                    "AirportCode": "VCT",
                    "AirportName": "County-Foster",
                    "CityCode": "VCT"
                },
                {
                    "AirportCode": "VDA",
                    "AirportName": "Ovda",
                    "CityCode": "VDA"
                },
                {
                    "AirportCode": "VDB",
                    "AirportName": "Valdres",
                    "CityCode": "VDB"
                },
                {
                    "AirportCode": "VDC",
                    "AirportName": "Vitoria Da Cnquis",
                    "CityCode": "VDC"
                },
                {
                    "AirportCode": "VDM",
                    "AirportName": "Viedma",
                    "CityCode": "VDM"
                },
                {
                    "AirportCode": "VDP",
                    "AirportName": "Valle De Pascua",
                    "CityCode": "VDP"
                },
                {
                    "AirportCode": "VDS",
                    "AirportName": "Vadso",
                    "CityCode": "VDS"
                },
                {
                    "AirportCode": "VDZ",
                    "AirportName": "Valdez Municipal",
                    "CityCode": "VDZ"
                },
                {
                    "AirportCode": "VEE",
                    "AirportName": "Venetie",
                    "CityCode": "VEE"
                },
                {
                    "AirportCode": "VEL",
                    "AirportName": "Vernal",
                    "CityCode": "VEL"
                },
                {
                    "AirportCode": "VER",
                    "AirportName": "Heriberto Jara",
                    "CityCode": "VER"
                },
                {
                    "AirportCode": "VEY",
                    "AirportName": "Vestmannaeyjar",
                    "CityCode": "VEY"
                },
                {
                    "AirportCode": "VFA",
                    "AirportName": "Victoria Falls",
                    "CityCode": "VFA"
                },
                {
                    "AirportCode": "VGA",
                    "AirportName": "Vijayawada",
                    "CityCode": "VGA"
                },
                {
                    "AirportCode": "VGO",
                    "AirportName": "Vigo",
                    "CityCode": "VGO"
                },
                {
                    "AirportCode": "VGZ",
                    "AirportName": "Villagarzon",
                    "CityCode": "VGZ"
                },
                {
                    "AirportCode": "VHC",
                    "AirportName": "Saurimo",
                    "CityCode": "VHC"
                },
                {
                    "AirportCode": "VHM",
                    "AirportName": "Vilhelmina",
                    "CityCode": "VHM"
                },
                {
                    "AirportCode": "VHZ",
                    "AirportName": "Vahitahi",
                    "CityCode": "VHZ"
                },
                {
                    "AirportCode": "VID",
                    "AirportName": "Vidin",
                    "CityCode": "VID"
                },
                {
                    "AirportCode": "VIE",
                    "AirportName": "Vienna Int'l",
                    "CityCode": "VIE"
                },
                {
                    "AirportCode": "VIJ",
                    "AirportName": "Virgin Gorda",
                    "CityCode": "VIJ"
                },
                {
                    "AirportCode": "VIL",
                    "AirportName": "Dakhla",
                    "CityCode": "VIL"
                },
                {
                    "AirportCode": "VIR",
                    "AirportName": "Virginia",
                    "CityCode": "DUR"
                },
                {
                    "AirportCode": "VIS",
                    "AirportName": "Visalia",
                    "CityCode": "VIS"
                },
                {
                    "AirportCode": "VIT",
                    "AirportName": "Vitoria",
                    "CityCode": "VIT"
                },
                {
                    "AirportCode": "VIV",
                    "AirportName": "Vivigani",
                    "CityCode": "VIV"
                },
                {
                    "AirportCode": "VIX",
                    "AirportName": "Eurico Sales",
                    "CityCode": "VIX"
                },
                {
                    "AirportCode": "VKO",
                    "AirportName": "Vnukovo",
                    "CityCode": "MOW"
                },
                {
                    "AirportCode": "VKT",
                    "AirportName": "Vorkuta",
                    "CityCode": "VKT"
                },
                {
                    "AirportCode": "VLC",
                    "AirportName": "Valencia",
                    "CityCode": "VLC"
                },
                {
                    "AirportCode": "VLD",
                    "AirportName": "Valdosta Regional",
                    "CityCode": "VLD"
                },
                {
                    "AirportCode": "VLG",
                    "AirportName": "Villa Gesell",
                    "CityCode": "VLG"
                },
                {
                    "AirportCode": "VLI",
                    "AirportName": "Bauerfield",
                    "CityCode": "VLI"
                },
                {
                    "AirportCode": "VLL",
                    "AirportName": "Valladolid",
                    "CityCode": "VLL"
                },
                {
                    "AirportCode": "VLN",
                    "AirportName": "Valencia",
                    "CityCode": "VLN"
                },
                {
                    "AirportCode": "VLS",
                    "AirportName": "Valesdir",
                    "CityCode": "VLS"
                },
                {
                    "AirportCode": "VLV",
                    "AirportName": "Carvajal",
                    "CityCode": "VLV"
                },
                {
                    "AirportCode": "VMU",
                    "AirportName": "Baimuru",
                    "CityCode": "VMU"
                },
                {
                    "AirportCode": "VNA",
                    "AirportName": "Saravane",
                    "CityCode": "VNA"
                },
                {
                    "AirportCode": "VNC",
                    "AirportName": "Venice Municipal",
                    "CityCode": "VNC"
                },
                {
                    "AirportCode": "VNG",
                    "AirportName": "Viengxay",
                    "CityCode": "VNG"
                },
                {
                    "AirportCode": "VNO",
                    "AirportName": "Vilnius",
                    "CityCode": "VNO"
                },
                {
                    "AirportCode": "VNS",
                    "AirportName": "Varanasi",
                    "CityCode": "VNS"
                },
                {
                    "AirportCode": "VNX",
                    "AirportName": "Vilanculos",
                    "CityCode": "VNX"
                },
                {
                    "AirportCode": "VOG",
                    "AirportName": "Volgograd",
                    "CityCode": "VOG"
                },
                {
                    "AirportCode": "VOH",
                    "AirportName": "Vohemar",
                    "CityCode": "VOH"
                },
                {
                    "AirportCode": "VOK",
                    "AirportName": "VOLK FIELD",
                    "CityCode": "VOK"
                },
                {
                    "AirportCode": "VOL",
                    "AirportName": "Nea Anchialos",
                    "CityCode": "VOL"
                },
                {
                    "AirportCode": "VOZ",
                    "AirportName": "Voronezh",
                    "CityCode": "VOZ"
                },
                {
                    "AirportCode": "VPN",
                    "AirportName": "Vopnafjordur",
                    "CityCode": "VPN"
                },
                {
                    "AirportCode": "VPS",
                    "AirportName": "Ft Walton Beach",
                    "CityCode": "VPS"
                },
                {
                    "AirportCode": "VQS",
                    "AirportName": "Vieques",
                    "CityCode": "VQS"
                },
                {
                    "AirportCode": "VRA",
                    "AirportName": "Juan Gualberto Gomez",
                    "CityCode": "VRA"
                },
                {
                    "AirportCode": "VRB",
                    "AirportName": "Vero Beach Municipal",
                    "CityCode": "VRB"
                },
                {
                    "AirportCode": "VRK",
                    "AirportName": "Varkaus",
                    "CityCode": "VRK"
                },
                {
                    "AirportCode": "VRL",
                    "AirportName": "Vila Real",
                    "CityCode": "VRL"
                },
                {
                    "AirportCode": "VRN",
                    "AirportName": "Verona",
                    "CityCode": "VRN"
                },
                {
                    "AirportCode": "VSA",
                    "AirportName": "Capitan Carlos Perez",
                    "CityCode": "VSA"
                },
                {
                    "AirportCode": "VSG",
                    "AirportName": "Lugansk",
                    "CityCode": "VSG"
                },
                {
                    "AirportCode": "VST",
                    "AirportName": "Hasslo",
                    "CityCode": "VST"
                },
                {
                    "AirportCode": "VTE",
                    "AirportName": "Wattay",
                    "CityCode": "VTE"
                },
                {
                    "AirportCode": "VTU",
                    "AirportName": "Las Tunas",
                    "CityCode": "VTU"
                },
                {
                    "AirportCode": "VTZ",
                    "AirportName": "Vishakhapatnam",
                    "CityCode": "VTZ"
                },
                {
                    "AirportCode": "VUP",
                    "AirportName": "Valledupar",
                    "CityCode": "VUP"
                },
                {
                    "AirportCode": "VVB",
                    "AirportName": "Mahanoro",
                    "CityCode": "VVB"
                },
                {
                    "AirportCode": "VVC",
                    "AirportName": "Villavicencio",
                    "CityCode": "VVC"
                },
                {
                    "AirportCode": "VVI",
                    "AirportName": "Viru Viru Int'l",
                    "CityCode": "SRZ"
                },
                {
                    "AirportCode": "VVO",
                    "AirportName": "Vladivostok",
                    "CityCode": "VVO"
                },
                {
                    "AirportCode": "VVZ",
                    "AirportName": "Illizi",
                    "CityCode": "VVZ"
                },
                {
                    "AirportCode": "VXC",
                    "AirportName": "Lichinga",
                    "CityCode": "VXC"
                },
                {
                    "AirportCode": "VXE",
                    "AirportName": "San Pedro",
                    "CityCode": "VXE"
                },
                {
                    "AirportCode": "VXO",
                    "AirportName": "Vaxjo",
                    "CityCode": "VXO"
                },
                {
                    "AirportCode": "VYD",
                    "AirportName": "Vryheid",
                    "CityCode": "VYD"
                },
                {
                    "AirportCode": "WAC",
                    "AirportName": "Waca",
                    "CityCode": "WAC"
                },
                {
                    "AirportCode": "WAG",
                    "AirportName": "Wanganui",
                    "CityCode": "WAG"
                },
                {
                    "AirportCode": "WAI",
                    "AirportName": "Antsohihy",
                    "CityCode": "WAI"
                },
                {
                    "AirportCode": "WAQ",
                    "AirportName": "Antsalova",
                    "CityCode": "WAQ"
                },
                {
                    "AirportCode": "WAT",
                    "AirportName": "Waterford",
                    "CityCode": "WAT"
                },
                {
                    "AirportCode": "WAW",
                    "AirportName": "Warsaw Chopin",
                    "CityCode": "WAW"
                },
                {
                    "AirportCode": "WBB",
                    "AirportName": "Stebbins",
                    "CityCode": "WBB"
                },
                {
                    "AirportCode": "WBD",
                    "AirportName": "Befandriana",
                    "CityCode": "WBD"
                },
                {
                    "AirportCode": "WBE",
                    "AirportName": "Bealanana",
                    "CityCode": "WBE"
                },
                {
                    "AirportCode": "WBM",
                    "AirportName": "Wapenamanda",
                    "CityCode": "WBM"
                },
                {
                    "AirportCode": "WBO",
                    "AirportName": "Beroroha",
                    "CityCode": "WBO"
                },
                {
                    "AirportCode": "WBQ",
                    "AirportName": "Beaver",
                    "CityCode": "WBQ"
                },
                {
                    "AirportCode": "WDG",
                    "AirportName": "Woodring Municipal",
                    "CityCode": "WDG"
                },
                {
                    "AirportCode": "WDH",
                    "AirportName": "Windhoek int'l",
                    "CityCode": "WDH"
                },
                {
                    "AirportCode": "WED",
                    "AirportName": "Wedau",
                    "CityCode": "WED"
                },
                {
                    "AirportCode": "WEI",
                    "AirportName": "Weipa",
                    "CityCode": "WEI"
                },
                {
                    "AirportCode": "WEL",
                    "AirportName": "Welkom",
                    "CityCode": "WEL"
                },
                {
                    "AirportCode": "WET",
                    "AirportName": "Wagethe",
                    "CityCode": "WET"
                },
                {
                    "AirportCode": "WFI",
                    "AirportName": "Fianarantsoa",
                    "CityCode": "WFI"
                },
                {
                    "AirportCode": "WGA",
                    "AirportName": "Forrest Hill",
                    "CityCode": "WGA"
                },
                {
                    "AirportCode": "WGP",
                    "AirportName": "Waingapu",
                    "CityCode": "WGP"
                },
                {
                    "AirportCode": "WGT",
                    "AirportName": "Wangaratta",
                    "CityCode": "WGT"
                },
                {
                    "AirportCode": "WHK",
                    "AirportName": "Whakatane",
                    "CityCode": "WHK"
                },
                {
                    "AirportCode": "WHL",
                    "AirportName": "Welshpool",
                    "CityCode": "WHL"
                },
                {
                    "AirportCode": "WIC",
                    "AirportName": "Wick",
                    "CityCode": "WIC"
                },
                {
                    "AirportCode": "WIL",
                    "AirportName": "Wilson",
                    "CityCode": "NBO"
                },
                {
                    "AirportCode": "WIN",
                    "AirportName": "Winton",
                    "CityCode": "WIN"
                },
                {
                    "AirportCode": "WJA",
                    "AirportName": "Woja",
                    "CityCode": "WJA"
                },
                {
                    "AirportCode": "WJR",
                    "AirportName": "Wajir",
                    "CityCode": "WJR"
                },
                {
                    "AirportCode": "WKA",
                    "AirportName": "Wanaka",
                    "CityCode": "WKA"
                },
                {
                    "AirportCode": "WKJ",
                    "AirportName": "Hokkaido",
                    "CityCode": "WKJ"
                },
                {
                    "AirportCode": "WKK",
                    "AirportName": "Aleknagik",
                    "CityCode": "WKK"
                },
                {
                    "AirportCode": "WKR",
                    "AirportName": "Walker's Cay",
                    "CityCode": "WKR"
                },
                {
                    "AirportCode": "WLB",
                    "AirportName": "Labouchere Bay",
                    "CityCode": "WLB"
                },
                {
                    "AirportCode": "WLG",
                    "AirportName": "Wellington",
                    "CityCode": "WLG"
                },
                {
                    "AirportCode": "WLH",
                    "AirportName": "Walaha",
                    "CityCode": "WLH"
                },
                {
                    "AirportCode": "WLK",
                    "AirportName": "Selawik",
                    "CityCode": "WLK"
                },
                {
                    "AirportCode": "WLM",
                    "AirportName": "Waltham",
                    "CityCode": "WLM"
                },
                {
                    "AirportCode": "WLS",
                    "AirportName": "Wallis Island",
                    "CityCode": "WLS"
                },
                {
                    "AirportCode": "WMA",
                    "AirportName": "Mandritsara",
                    "CityCode": "WMA"
                },
                {
                    "AirportCode": "WMD",
                    "AirportName": "Mandabe",
                    "CityCode": "WMD"
                },
                {
                    "AirportCode": "WMH",
                    "AirportName": "Mountain Home",
                    "CityCode": "WMH"
                },
                {
                    "AirportCode": "WMI",
                    "AirportName": "Modlin",
                    "CityCode": "WMI"
                },
                {
                    "AirportCode": "WML",
                    "AirportName": "Malaimbandy",
                    "CityCode": "WML"
                },
                {
                    "AirportCode": "WMN",
                    "AirportName": "Maroantsetra",
                    "CityCode": "WMN"
                },
                {
                    "AirportCode": "WMO",
                    "AirportName": "White Mountain",
                    "CityCode": "WMO"
                },
                {
                    "AirportCode": "WMR",
                    "AirportName": "Mananara",
                    "CityCode": "WMR"
                },
                {
                    "AirportCode": "WMX",
                    "AirportName": "Wamena",
                    "CityCode": "WMX"
                },
                {
                    "AirportCode": "WNR",
                    "AirportName": "Windorah",
                    "CityCode": "WNR"
                },
                {
                    "AirportCode": "WNS",
                    "AirportName": "Nawabshah",
                    "CityCode": "WNS"
                },
                {
                    "AirportCode": "WNZ",
                    "AirportName": "Wenzhou",
                    "CityCode": "WNZ"
                },
                {
                    "AirportCode": "WOT",
                    "AirportName": "Wonan",
                    "CityCode": "WOT"
                },
                {
                    "AirportCode": "WPB",
                    "AirportName": "Port Berge",
                    "CityCode": "WPB"
                },
                {
                    "AirportCode": "WPM",
                    "AirportName": "Wipim",
                    "CityCode": "WPM"
                },
                {
                    "AirportCode": "WRA",
                    "AirportName": "Warder",
                    "CityCode": "WRA"
                },
                {
                    "AirportCode": "WRE",
                    "AirportName": "Whangarei",
                    "CityCode": "WRE"
                },
                {
                    "AirportCode": "WRL",
                    "AirportName": "Worland",
                    "CityCode": "WRL"
                },
                {
                    "AirportCode": "WRO",
                    "AirportName": "Strachowice",
                    "CityCode": "WRO"
                },
                {
                    "AirportCode": "WRW",
                    "AirportName": "Warrawagine Station",
                    "CityCode": "WRW"
                },
                {
                    "AirportCode": "WRY",
                    "AirportName": "Westray",
                    "CityCode": "WRY"
                },
                {
                    "AirportCode": "WSN",
                    "AirportName": "South Naknek",
                    "CityCode": "WSN"
                },
                {
                    "AirportCode": "WST",
                    "AirportName": "Sesterly State",
                    "CityCode": "WST"
                },
                {
                    "AirportCode": "WSU",
                    "AirportName": "Wasu",
                    "CityCode": "WSU"
                },
                {
                    "AirportCode": "WSX",
                    "AirportName": "Westsound",
                    "CityCode": "WSX"
                },
                {
                    "AirportCode": "WSY",
                    "AirportName": "Whitsunday Airstrip",
                    "CityCode": "WSY"
                },
                {
                    "AirportCode": "WSZ",
                    "AirportName": "Westport",
                    "CityCode": "WSZ"
                },
                {
                    "AirportCode": "WTA",
                    "AirportName": "Tambohorano",
                    "CityCode": "WTA"
                },
                {
                    "AirportCode": "WTE",
                    "AirportName": "Wotje Island",
                    "CityCode": "WTE"
                },
                {
                    "AirportCode": "WTK",
                    "AirportName": "Noatak",
                    "CityCode": "WTK"
                },
                {
                    "AirportCode": "WTL",
                    "AirportName": "Tuntutuliak",
                    "CityCode": "WTL"
                },
                {
                    "AirportCode": "WTO",
                    "AirportName": "Wotho Island",
                    "CityCode": "WTO"
                },
                {
                    "AirportCode": "WTS",
                    "AirportName": "Tsiroanomandidy",
                    "CityCode": "WTS"
                },
                {
                    "AirportCode": "WUG",
                    "AirportName": "Wau",
                    "CityCode": "WUG"
                },
                {
                    "AirportCode": "WUH",
                    "AirportName": "Wuhan",
                    "CityCode": "WUH"
                },
                {
                    "AirportCode": "WUN",
                    "AirportName": "Wiluna",
                    "CityCode": "WUN"
                },
                {
                    "AirportCode": "WUV",
                    "AirportName": "Wuvulu Is",
                    "CityCode": "WUV"
                },
                {
                    "AirportCode": "WVB",
                    "AirportName": "Walvis Bay",
                    "CityCode": "WVB"
                },
                {
                    "AirportCode": "WVK",
                    "AirportName": "Manakara",
                    "CityCode": "WVK"
                },
                {
                    "AirportCode": "WWA",
                    "AirportName": "Wasilla",
                    "CityCode": "WWA"
                },
                {
                    "AirportCode": "WWD",
                    "AirportName": "Cape May County",
                    "CityCode": "WWD"
                },
                {
                    "AirportCode": "WWK",
                    "AirportName": "Boram",
                    "CityCode": "WWK"
                },
                {
                    "AirportCode": "WWP",
                    "AirportName": "Whale Pass",
                    "CityCode": "WWP"
                },
                {
                    "AirportCode": "WWT",
                    "AirportName": "Newtok",
                    "CityCode": "WWT"
                },
                {
                    "AirportCode": "WWY",
                    "AirportName": "West Wyalong",
                    "CityCode": "WWY"
                },
                {
                    "AirportCode": "WYA",
                    "AirportName": "Whyalla",
                    "CityCode": "WYA"
                },
                {
                    "AirportCode": "WYE",
                    "AirportName": "Yengema",
                    "CityCode": "WYE"
                },
                {
                    "AirportCode": "WYS",
                    "AirportName": "Yellowstone",
                    "CityCode": "WYS"
                },
                {
                    "AirportCode": "XAP",
                    "AirportName": "Chapeco",
                    "CityCode": "XAP"
                },
                {
                    "AirportCode": "XBE",
                    "AirportName": "Bearskin Lake",
                    "CityCode": "XBE"
                },
                {
                    "AirportCode": "XBL",
                    "AirportName": "Buno Bedelle",
                    "CityCode": "XBL"
                },
                {
                    "AirportCode": "XBN",
                    "AirportName": "Biniguni",
                    "CityCode": "XBN"
                },
                {
                    "AirportCode": "XCR",
                    "AirportName": "Chalons-Vatry",
                    "CityCode": "PAR"
                },
                {
                    "AirportCode": "XFW",
                    "AirportName": "Finkenwerder",
                    "CityCode": "XFW"
                },
                {
                    "AirportCode": "XGA",
                    "AirportName": "Gaoua",
                    "CityCode": "XGA"
                },
                {
                    "AirportCode": "XGG",
                    "AirportName": "Gorom Gorom",
                    "CityCode": "XGG"
                },
                {
                    "AirportCode": "XGN",
                    "AirportName": "Xangongo",
                    "CityCode": "XGN"
                },
                {
                    "AirportCode": "XGR",
                    "AirportName": "Kangiqsualujjuaq",
                    "CityCode": "XGR"
                },
                {
                    "AirportCode": "XIL",
                    "AirportName": "Xilinhot",
                    "CityCode": "XIL"
                },
                {
                    "AirportCode": "XIY",
                    "AirportName": "Xianyang",
                    "CityCode": "SIA"
                },
                {
                    "AirportCode": "XKA",
                    "AirportName": "Kantchari",
                    "CityCode": "XKA"
                },
                {
                    "AirportCode": "XKH",
                    "AirportName": "Xieng Khouang",
                    "CityCode": "XKH"
                },
                {
                    "AirportCode": "XKS",
                    "AirportName": "Kasabonika",
                    "CityCode": "XKS"
                },
                {
                    "AirportCode": "XLB",
                    "AirportName": "Lac Brochet",
                    "CityCode": "XLB"
                },
                {
                    "AirportCode": "XLS",
                    "AirportName": "St Louis",
                    "CityCode": "XLS"
                },
                {
                    "AirportCode": "XMC",
                    "AirportName": "Mallacoota",
                    "CityCode": "XMC"
                },
                {
                    "AirportCode": "XMH",
                    "AirportName": "Manihi",
                    "CityCode": "XMH"
                },
                {
                    "AirportCode": "XMN",
                    "AirportName": "Xiamen",
                    "CityCode": "XMN"
                },
                {
                    "AirportCode": "XMS",
                    "AirportName": "Macas",
                    "CityCode": "XMS"
                },
                {
                    "AirportCode": "XMY",
                    "AirportName": "Yam Island",
                    "CityCode": "XMY"
                },
                {
                    "AirportCode": "XNU",
                    "AirportName": "Nouna",
                    "CityCode": "XNU"
                },
                {
                    "AirportCode": "XPK",
                    "AirportName": "Pukatawagan",
                    "CityCode": "XPK"
                },
                {
                    "AirportCode": "XQP",
                    "AirportName": "Quepos",
                    "CityCode": "XQP"
                },
                {
                    "AirportCode": "XQU",
                    "AirportName": "Qualicum",
                    "CityCode": "XQU"
                },
                {
                    "AirportCode": "XRR",
                    "AirportName": "Ross River",
                    "CityCode": "XRR"
                },
                {
                    "AirportCode": "XRY",
                    "AirportName": "Jerez",
                    "CityCode": "XRY"
                },
                {
                    "AirportCode": "XSC",
                    "AirportName": "South Caicos Int'l",
                    "CityCode": "XSC"
                },
                {
                    "AirportCode": "XSI",
                    "AirportName": "South Indian Lake",
                    "CityCode": "XSI"
                },
                {
                    "AirportCode": "XSP",
                    "AirportName": "Seletar",
                    "CityCode": "SIN"
                },
                {
                    "AirportCode": "XTL",
                    "AirportName": "Tadoule Lake",
                    "CityCode": "XTL"
                },
                {
                    "AirportCode": "XYA",
                    "AirportName": "Yandina",
                    "CityCode": "XYA"
                },
                {
                    "AirportCode": "YAA",
                    "AirportName": "Anahim Lake",
                    "CityCode": "YAA"
                },
                {
                    "AirportCode": "YAB",
                    "AirportName": "Arctic Bay",
                    "CityCode": "YAB"
                },
                {
                    "AirportCode": "YAC",
                    "AirportName": "Cat Lake",
                    "CityCode": "YAC"
                },
                {
                    "AirportCode": "YAG",
                    "AirportName": "Fort Frances Municipal",
                    "CityCode": "YAG"
                },
                {
                    "AirportCode": "YAK",
                    "AirportName": "Yakutat",
                    "CityCode": "YAK"
                },
                {
                    "AirportCode": "YAL",
                    "AirportName": "Alert Bay",
                    "CityCode": "YAL"
                },
                {
                    "AirportCode": "YAM",
                    "AirportName": "Sault Ste Marie",
                    "CityCode": "YAM"
                },
                {
                    "AirportCode": "YAO",
                    "AirportName": "Yaounde Arpt",
                    "CityCode": "YAO"
                },
                {
                    "AirportCode": "YAP",
                    "AirportName": "Yap",
                    "CityCode": "YAP"
                },
                {
                    "AirportCode": "YAT",
                    "AirportName": "Attawapiskat",
                    "CityCode": "YAT"
                },
                {
                    "AirportCode": "YAW",
                    "AirportName": "Shearwater",
                    "CityCode": "YHZ"
                },
                {
                    "AirportCode": "YAY",
                    "AirportName": "St Anthony",
                    "CityCode": "YAY"
                },
                {
                    "AirportCode": "YBB",
                    "AirportName": "Townsite",
                    "CityCode": "YUF"
                },
                {
                    "AirportCode": "YBC",
                    "AirportName": "Baie Comeau",
                    "CityCode": "YBC"
                },
                {
                    "AirportCode": "YBE",
                    "AirportName": "Uranium City",
                    "CityCode": "YBE"
                },
                {
                    "AirportCode": "YBG",
                    "AirportName": "Bagotville",
                    "CityCode": "YBG"
                },
                {
                    "AirportCode": "YBI",
                    "AirportName": "Black Tickle",
                    "CityCode": "YBI"
                },
                {
                    "AirportCode": "YBJ",
                    "AirportName": "Baie Johan Beetz",
                    "CityCode": "YBJ"
                },
                {
                    "AirportCode": "YBL",
                    "AirportName": "Campbell River",
                    "CityCode": "YBL"
                },
                {
                    "AirportCode": "YBM",
                    "AirportName": "Bronson Creek",
                    "CityCode": "YBM"
                },
                {
                    "AirportCode": "YBR",
                    "AirportName": "Brandon",
                    "CityCode": "YBR"
                },
                {
                    "AirportCode": "YBT",
                    "AirportName": "Brochet",
                    "CityCode": "YBT"
                },
                {
                    "AirportCode": "YBV",
                    "AirportName": "Berens River",
                    "CityCode": "YBV"
                },
                {
                    "AirportCode": "YBX",
                    "AirportName": "Blanc Sablon",
                    "CityCode": "YBX"
                },
                {
                    "AirportCode": "YCB",
                    "AirportName": "Cambridge Bay",
                    "CityCode": "YCB"
                },
                {
                    "AirportCode": "YCD",
                    "AirportName": "Nanaimo",
                    "CityCode": "YCD"
                },
                {
                    "AirportCode": "YCG",
                    "AirportName": "Castlegar",
                    "CityCode": "YCG"
                },
                {
                    "AirportCode": "YCH",
                    "AirportName": "Miramichi",
                    "CityCode": "YCH"
                },
                {
                    "AirportCode": "YCK",
                    "AirportName": "Colville Lake",
                    "CityCode": "YCK"
                },
                {
                    "AirportCode": "YCL",
                    "AirportName": "Charlo",
                    "CityCode": "YCL"
                },
                {
                    "AirportCode": "YCN",
                    "AirportName": "Cochrane",
                    "CityCode": "YCN"
                },
                {
                    "AirportCode": "YCO",
                    "AirportName": "Coppermine",
                    "CityCode": "YCO"
                },
                {
                    "AirportCode": "YCQ",
                    "AirportName": "Chetwynd",
                    "CityCode": "YCQ"
                },
                {
                    "AirportCode": "YCR",
                    "AirportName": "Cross Lake",
                    "CityCode": "YCR"
                },
                {
                    "AirportCode": "YCS",
                    "AirportName": "Chesterfield Inle",
                    "CityCode": "YCS"
                },
                {
                    "AirportCode": "YCV",
                    "AirportName": "Cartierville",
                    "CityCode": "YCV"
                },
                {
                    "AirportCode": "YCY",
                    "AirportName": "Clyde River",
                    "CityCode": "YCY"
                },
                {
                    "AirportCode": "YDA",
                    "AirportName": "Dawson City",
                    "CityCode": "YDA"
                },
                {
                    "AirportCode": "YDE",
                    "AirportName": "Paradise River",
                    "CityCode": "YDE"
                },
                {
                    "AirportCode": "YDF",
                    "AirportName": "Deer Lake",
                    "CityCode": "YDF"
                },
                {
                    "AirportCode": "YDI",
                    "AirportName": "Davis Inlet",
                    "CityCode": "YDI"
                },
                {
                    "AirportCode": "YDL",
                    "AirportName": "Dease Lake",
                    "CityCode": "YDL"
                },
                {
                    "AirportCode": "YDN",
                    "AirportName": "Dauphin",
                    "CityCode": "YDN"
                },
                {
                    "AirportCode": "YDO",
                    "AirportName": "St Methode",
                    "CityCode": "YDO"
                },
                {
                    "AirportCode": "YDP",
                    "AirportName": "Nain",
                    "CityCode": "YDP"
                },
                {
                    "AirportCode": "YDQ",
                    "AirportName": "Dawson Creek",
                    "CityCode": "YDQ"
                },
                {
                    "AirportCode": "YDT",
                    "AirportName": "Boundary Bay",
                    "CityCode": "YVR"
                },
                {
                    "AirportCode": "YEC",
                    "AirportName": "Yechon",
                    "CityCode": "YEC"
                },
                {
                    "AirportCode": "YEG",
                    "AirportName": "Edmonton Int'l",
                    "CityCode": "YEA"
                },
                {
                    "AirportCode": "YEK",
                    "AirportName": "Eskimo Point",
                    "CityCode": "YEK"
                },
                {
                    "AirportCode": "YEL",
                    "AirportName": "Elliot Lake",
                    "CityCode": "YEL"
                },
                {
                    "AirportCode": "YER",
                    "AirportName": "Fort Severn",
                    "CityCode": "YER"
                },
                {
                    "AirportCode": "YEV",
                    "AirportName": "Inuvik",
                    "CityCode": "YEV"
                },
                {
                    "AirportCode": "YFA",
                    "AirportName": "Fort Albany",
                    "CityCode": "YFA"
                },
                {
                    "AirportCode": "YFB",
                    "AirportName": "Iqaluit",
                    "CityCode": "YFB"
                },
                {
                    "AirportCode": "YFC",
                    "AirportName": "Fredericton",
                    "CityCode": "YFC"
                },
                {
                    "AirportCode": "YFH",
                    "AirportName": "Fort Hope",
                    "CityCode": "YFH"
                },
                {
                    "AirportCode": "YFO",
                    "AirportName": "Flin Flon",
                    "CityCode": "YFO"
                },
                {
                    "AirportCode": "YFR",
                    "AirportName": "Fort Resolution",
                    "CityCode": "YFR"
                },
                {
                    "AirportCode": "YFS",
                    "AirportName": "Fort Simpson",
                    "CityCode": "YFS"
                },
                {
                    "AirportCode": "YFX",
                    "AirportName": "Fox Harbour",
                    "CityCode": "YFX"
                },
                {
                    "AirportCode": "YGB",
                    "AirportName": "Gillies Bay",
                    "CityCode": "YGB"
                },
                {
                    "AirportCode": "YGH",
                    "AirportName": "Fort Good Hope",
                    "CityCode": "YGH"
                },
                {
                    "AirportCode": "YGJ",
                    "AirportName": "Miho",
                    "CityCode": "YGJ"
                },
                {
                    "AirportCode": "YGK",
                    "AirportName": "Kingston",
                    "CityCode": "YGK"
                },
                {
                    "AirportCode": "YGL",
                    "AirportName": "La Grande",
                    "CityCode": "YGL"
                },
                {
                    "AirportCode": "YGO",
                    "AirportName": "Gods Narrows",
                    "CityCode": "YGO"
                },
                {
                    "AirportCode": "YGP",
                    "AirportName": "Gaspe",
                    "CityCode": "YGP"
                },
                {
                    "AirportCode": "YGQ",
                    "AirportName": "Geraldton",
                    "CityCode": "YGQ"
                },
                {
                    "AirportCode": "YGR",
                    "AirportName": "Iles De La Madele",
                    "CityCode": "YGR"
                },
                {
                    "AirportCode": "YGT",
                    "AirportName": "Igloolik",
                    "CityCode": "YGT"
                },
                {
                    "AirportCode": "YGV",
                    "AirportName": "Havre St Pierre",
                    "CityCode": "YGV"
                },
                {
                    "AirportCode": "YGW",
                    "AirportName": "Kuujjuarapik",
                    "CityCode": "YGW"
                },
                {
                    "AirportCode": "YGX",
                    "AirportName": "Gillam",
                    "CityCode": "YGX"
                },
                {
                    "AirportCode": "YGZ",
                    "AirportName": "Grise Fiord",
                    "CityCode": "YGZ"
                },
                {
                    "AirportCode": "YHA",
                    "AirportName": "Port Hope Simpson",
                    "CityCode": "YHA"
                },
                {
                    "AirportCode": "YHD",
                    "AirportName": "Dryden Municipal",
                    "CityCode": "YHD"
                },
                {
                    "AirportCode": "YHF",
                    "AirportName": "Hearst",
                    "CityCode": "YHF"
                },
                {
                    "AirportCode": "YHI",
                    "AirportName": "Holman",
                    "CityCode": "YHI"
                },
                {
                    "AirportCode": "YHK",
                    "AirportName": "Gjoa Haven",
                    "CityCode": "YHK"
                },
                {
                    "AirportCode": "YHM",
                    "AirportName": "Hamilton",
                    "CityCode": "YHM"
                },
                {
                    "AirportCode": "YHN",
                    "AirportName": "Hornepayne",
                    "CityCode": "YHN"
                },
                {
                    "AirportCode": "YHO",
                    "AirportName": "Hopedale",
                    "CityCode": "YHO"
                },
                {
                    "AirportCode": "YHP",
                    "AirportName": "Poplar Hill",
                    "CityCode": "YHP"
                },
                {
                    "AirportCode": "YHR",
                    "AirportName": "Chevery",
                    "CityCode": "YHR"
                },
                {
                    "AirportCode": "YHS",
                    "AirportName": "Sechelt",
                    "CityCode": "YHS"
                },
                {
                    "AirportCode": "YHU",
                    "AirportName": "St Hubert",
                    "CityCode": "YMQ"
                },
                {
                    "AirportCode": "YHZ",
                    "AirportName": "Halifax Int'l",
                    "CityCode": "YHZ"
                },
                {
                    "AirportCode": "YIB",
                    "AirportName": "Atikokan",
                    "CityCode": "YIB"
                },
                {
                    "AirportCode": "YIF",
                    "AirportName": "Pakuashipi",
                    "CityCode": "YIF"
                },
                {
                    "AirportCode": "YIH",
                    "AirportName": "Yichang",
                    "CityCode": "YIH"
                },
                {
                    "AirportCode": "YIK",
                    "AirportName": "Ivujivik",
                    "CityCode": "YIK"
                },
                {
                    "AirportCode": "YIO",
                    "AirportName": "Pond Inlet",
                    "CityCode": "YIO"
                },
                {
                    "AirportCode": "YIP",
                    "AirportName": "Willow Run",
                    "CityCode": "DTT"
                },
                {
                    "AirportCode": "YIV",
                    "AirportName": "Island Lk Garden",
                    "CityCode": "YIV"
                },
                {
                    "AirportCode": "YIW",
                    "AirportName": "YIWU",
                    "CityCode": "YIW"
                },
                {
                    "AirportCode": "YJN",
                    "AirportName": "St Jean",
                    "CityCode": "YJN"
                },
                {
                    "AirportCode": "YJT",
                    "AirportName": "Stephenville",
                    "CityCode": "YJT"
                },
                {
                    "AirportCode": "YKA",
                    "AirportName": "Kamloops",
                    "CityCode": "YKA"
                },
                {
                    "AirportCode": "YKG",
                    "AirportName": "Kangirsuk",
                    "CityCode": "YKG"
                },
                {
                    "AirportCode": "YKL",
                    "AirportName": "Schefferville",
                    "CityCode": "YKL"
                },
                {
                    "AirportCode": "YKM",
                    "AirportName": "Yakima Air Terminal",
                    "CityCode": "YKM"
                },
                {
                    "AirportCode": "YKN",
                    "AirportName": "Chang Gurney",
                    "CityCode": "YKN"
                },
                {
                    "AirportCode": "YKQ",
                    "AirportName": "Waskaganish",
                    "CityCode": "YKQ"
                },
                {
                    "AirportCode": "YKS",
                    "AirportName": "Yakutsk",
                    "CityCode": "YKS"
                },
                {
                    "AirportCode": "YKT",
                    "AirportName": "Klemtu",
                    "CityCode": "YKT"
                },
                {
                    "AirportCode": "YKU",
                    "AirportName": "Chisasibi",
                    "CityCode": "YKU"
                },
                {
                    "AirportCode": "YKX",
                    "AirportName": "Kirkland Lake",
                    "CityCode": "YKX"
                },
                {
                    "AirportCode": "YKY",
                    "AirportName": "Kindersley",
                    "CityCode": "YKY"
                },
                {
                    "AirportCode": "YKZ",
                    "AirportName": "Buttonville",
                    "CityCode": "YTO"
                },
                {
                    "AirportCode": "YLC",
                    "AirportName": "Lake Harbour",
                    "CityCode": "YLC"
                },
                {
                    "AirportCode": "YLD",
                    "AirportName": "Chapleau",
                    "CityCode": "YLD"
                },
                {
                    "AirportCode": "YLE",
                    "AirportName": "Lac La Martre",
                    "CityCode": "YLE"
                },
                {
                    "AirportCode": "YLL",
                    "AirportName": "Lloydminster",
                    "CityCode": "YLL"
                },
                {
                    "AirportCode": "YLR",
                    "AirportName": "Leaf Rapids",
                    "CityCode": "YLR"
                },
                {
                    "AirportCode": "YLW",
                    "AirportName": "Kelowna",
                    "CityCode": "YLW"
                },
                {
                    "AirportCode": "YMA",
                    "AirportName": "Mayo",
                    "CityCode": "YMA"
                },
                {
                    "AirportCode": "YME",
                    "AirportName": "Matane",
                    "CityCode": "YME"
                },
                {
                    "AirportCode": "YMG",
                    "AirportName": "Manitouwadge",
                    "CityCode": "YMG"
                },
                {
                    "AirportCode": "YMH",
                    "AirportName": "Mary's Harbour",
                    "CityCode": "YMH"
                },
                {
                    "AirportCode": "YMM",
                    "AirportName": "Fort Mcmurray",
                    "CityCode": "YMM"
                },
                {
                    "AirportCode": "YMN",
                    "AirportName": "Makkovik",
                    "CityCode": "YMN"
                },
                {
                    "AirportCode": "YMO",
                    "AirportName": "Moosonee",
                    "CityCode": "YMO"
                },
                {
                    "AirportCode": "YMS",
                    "AirportName": "Yurimaguas",
                    "CityCode": "YMS"
                },
                {
                    "AirportCode": "YMT",
                    "AirportName": "Chibougamau",
                    "CityCode": "YMT"
                },
                {
                    "AirportCode": "YMX",
                    "AirportName": "Mirabel",
                    "CityCode": "YMQ"
                },
                {
                    "AirportCode": "YNA",
                    "AirportName": "Natashquan",
                    "CityCode": "YNA"
                },
                {
                    "AirportCode": "YNC",
                    "AirportName": "Wemindji",
                    "CityCode": "YNC"
                },
                {
                    "AirportCode": "YND",
                    "AirportName": "Gatineau",
                    "CityCode": "YND"
                },
                {
                    "AirportCode": "YNE",
                    "AirportName": "Norway House",
                    "CityCode": "YNE"
                },
                {
                    "AirportCode": "YNG",
                    "AirportName": "Youngstown Warren",
                    "CityCode": "YNG"
                },
                {
                    "AirportCode": "YNL",
                    "AirportName": "Points North Land",
                    "CityCode": "YNL"
                },
                {
                    "AirportCode": "YNM",
                    "AirportName": "Matagami",
                    "CityCode": "YNM"
                },
                {
                    "AirportCode": "YNO",
                    "AirportName": "North Spirit Lake",
                    "CityCode": "YNO"
                },
                {
                    "AirportCode": "YNS",
                    "AirportName": "Nemiscau",
                    "CityCode": "YNS"
                },
                {
                    "AirportCode": "YNT",
                    "AirportName": "Laishan",
                    "CityCode": "YNT"
                },
                {
                    "AirportCode": "YOC",
                    "AirportName": "Old Crow",
                    "CityCode": "YOC"
                },
                {
                    "AirportCode": "YOH",
                    "AirportName": "Oxford House",
                    "CityCode": "YOH"
                },
                {
                    "AirportCode": "YOJ",
                    "AirportName": "Footner Lake",
                    "CityCode": "YOJ"
                },
                {
                    "AirportCode": "YOL",
                    "AirportName": "Yola",
                    "CityCode": "YOL"
                },
                {
                    "AirportCode": "YOO",
                    "AirportName": "Oshawa",
                    "CityCode": "YOO"
                },
                {
                    "AirportCode": "YOP",
                    "AirportName": "Rainbow Lake",
                    "CityCode": "YOP"
                },
                {
                    "AirportCode": "YOW",
                    "AirportName": "Ottawa Int'l",
                    "CityCode": "YOW"
                },
                {
                    "AirportCode": "YPA",
                    "AirportName": "Prince Albert",
                    "CityCode": "YPA"
                },
                {
                    "AirportCode": "YPB",
                    "AirportName": "Port Alberni",
                    "CityCode": "YPB"
                },
                {
                    "AirportCode": "YPC",
                    "AirportName": "Paulatuk",
                    "CityCode": "YPC"
                },
                {
                    "AirportCode": "YPE",
                    "AirportName": "Peace River",
                    "CityCode": "YPE"
                },
                {
                    "AirportCode": "YPH",
                    "AirportName": "Inukjuak",
                    "CityCode": "YPH"
                },
                {
                    "AirportCode": "YPI",
                    "AirportName": "Port Simpson",
                    "CityCode": "YPI"
                },
                {
                    "AirportCode": "YPJ",
                    "AirportName": "Aupauluk",
                    "CityCode": "YPJ"
                },
                {
                    "AirportCode": "YPL",
                    "AirportName": "Pickle Lake",
                    "CityCode": "YPL"
                },
                {
                    "AirportCode": "YPM",
                    "AirportName": "Pikangikum",
                    "CityCode": "YPM"
                },
                {
                    "AirportCode": "YPN",
                    "AirportName": "Port Menier",
                    "CityCode": "YPN"
                },
                {
                    "AirportCode": "YPQ",
                    "AirportName": "Peterborough",
                    "CityCode": "YPQ"
                },
                {
                    "AirportCode": "YPR",
                    "AirportName": "Digby Island",
                    "CityCode": "YPR"
                },
                {
                    "AirportCode": "YPW",
                    "AirportName": "Powell River",
                    "CityCode": "YPW"
                },
                {
                    "AirportCode": "YPX",
                    "AirportName": "Povungnituk",
                    "CityCode": "YPX"
                },
                {
                    "AirportCode": "YPY",
                    "AirportName": "Fort Chipewyan",
                    "CityCode": "YPY"
                },
                {
                    "AirportCode": "YQB",
                    "AirportName": "Quebec",
                    "CityCode": "YQB"
                },
                {
                    "AirportCode": "YQC",
                    "AirportName": "Quaqtaq",
                    "CityCode": "YQC"
                },
                {
                    "AirportCode": "YQD",
                    "AirportName": "The Pas",
                    "CityCode": "YQD"
                },
                {
                    "AirportCode": "YQG",
                    "AirportName": "Windsor",
                    "CityCode": "YQG"
                },
                {
                    "AirportCode": "YQH",
                    "AirportName": "Watson Lake",
                    "CityCode": "YQH"
                },
                {
                    "AirportCode": "YQI",
                    "AirportName": "Yarmouth",
                    "CityCode": "YQI"
                },
                {
                    "AirportCode": "YQK",
                    "AirportName": "Kenora",
                    "CityCode": "YQK"
                },
                {
                    "AirportCode": "YQL",
                    "AirportName": "Lethbridge",
                    "CityCode": "YQL"
                },
                {
                    "AirportCode": "YQM",
                    "AirportName": "Moncton",
                    "CityCode": "YQM"
                },
                {
                    "AirportCode": "YQQ",
                    "AirportName": "Comox",
                    "CityCode": "YQQ"
                },
                {
                    "AirportCode": "YQR",
                    "AirportName": "Regina",
                    "CityCode": "YQR"
                },
                {
                    "AirportCode": "YQT",
                    "AirportName": "Thunder Bay",
                    "CityCode": "YQT"
                },
                {
                    "AirportCode": "YQU",
                    "AirportName": "Grande Prairie",
                    "CityCode": "YQU"
                },
                {
                    "AirportCode": "YQV",
                    "AirportName": "Yorkton",
                    "CityCode": "YQV"
                },
                {
                    "AirportCode": "YQW",
                    "AirportName": "North Battleford",
                    "CityCode": "YQW"
                },
                {
                    "AirportCode": "YQX",
                    "AirportName": "Gander",
                    "CityCode": "YQX"
                },
                {
                    "AirportCode": "YQY",
                    "AirportName": "Sydney",
                    "CityCode": "YQY"
                },
                {
                    "AirportCode": "YQZ",
                    "AirportName": "Quesnel",
                    "CityCode": "YQZ"
                },
                {
                    "AirportCode": "YRA",
                    "AirportName": "Rae Lakes",
                    "CityCode": "YRA"
                },
                {
                    "AirportCode": "YRB",
                    "AirportName": "Resolute",
                    "CityCode": "YRB"
                },
                {
                    "AirportCode": "YRD",
                    "AirportName": "Dean River",
                    "CityCode": "YRD"
                },
                {
                    "AirportCode": "YRF",
                    "AirportName": "Cartwright",
                    "CityCode": "YRF"
                },
                {
                    "AirportCode": "YRG",
                    "AirportName": "Rigolet",
                    "CityCode": "YRG"
                },
                {
                    "AirportCode": "YRJ",
                    "AirportName": "Roberval",
                    "CityCode": "YRJ"
                },
                {
                    "AirportCode": "YRL",
                    "AirportName": "Red Lake",
                    "CityCode": "YRL"
                },
                {
                    "AirportCode": "YRO",
                    "AirportName": "Rockcliffe St",
                    "CityCode": "YOW"
                },
                {
                    "AirportCode": "YRS",
                    "AirportName": "Red Sucker Lake",
                    "CityCode": "YRS"
                },
                {
                    "AirportCode": "YRT",
                    "AirportName": "Rankin Inlet",
                    "CityCode": "YRT"
                },
                {
                    "AirportCode": "YSB",
                    "AirportName": "Sudbury",
                    "CityCode": "YSB"
                },
                {
                    "AirportCode": "YSE",
                    "AirportName": "Squamish",
                    "CityCode": "YSE"
                },
                {
                    "AirportCode": "YSF",
                    "AirportName": "Stony Rapids",
                    "CityCode": "YSF"
                },
                {
                    "AirportCode": "YSG",
                    "AirportName": "Snowdrift",
                    "CityCode": "YSG"
                },
                {
                    "AirportCode": "YSJ",
                    "AirportName": "Saint John",
                    "CityCode": "YSJ"
                },
                {
                    "AirportCode": "YSK",
                    "AirportName": "Sanikiluaq",
                    "CityCode": "YSK"
                },
                {
                    "AirportCode": "YSM",
                    "AirportName": "Fort Smith",
                    "CityCode": "YSM"
                },
                {
                    "AirportCode": "YSN",
                    "AirportName": "Salmon Arm",
                    "CityCode": "YSN"
                },
                {
                    "AirportCode": "YSO",
                    "AirportName": "Postville",
                    "CityCode": "YSO"
                },
                {
                    "AirportCode": "YSP",
                    "AirportName": "Marathon",
                    "CityCode": "YSP"
                },
                {
                    "AirportCode": "YSR",
                    "AirportName": "Nanisivik",
                    "CityCode": "YSR"
                },
                {
                    "AirportCode": "YST",
                    "AirportName": "Ste Therese Point",
                    "CityCode": "YST"
                },
                {
                    "AirportCode": "YSY",
                    "AirportName": "Sachs Harbour",
                    "CityCode": "YSY"
                },
                {
                    "AirportCode": "YTA",
                    "AirportName": "Pembroke And Area",
                    "CityCode": "YTA"
                },
                {
                    "AirportCode": "YTB",
                    "AirportName": "Hartley Bay",
                    "CityCode": "YTB"
                },
                {
                    "AirportCode": "YTC",
                    "AirportName": "Sturdee",
                    "CityCode": "YTC"
                },
                {
                    "AirportCode": "YTE",
                    "AirportName": "Cape Dorset",
                    "CityCode": "YTE"
                },
                {
                    "AirportCode": "YTF",
                    "AirportName": "Alma",
                    "CityCode": "YTF"
                },
                {
                    "AirportCode": "YTH",
                    "AirportName": "Thompson",
                    "CityCode": "YTH"
                },
                {
                    "AirportCode": "YTJ",
                    "AirportName": "Terrace Bay",
                    "CityCode": "YTJ"
                },
                {
                    "AirportCode": "YTL",
                    "AirportName": "Big Trout",
                    "CityCode": "YTL"
                },
                {
                    "AirportCode": "YTQ",
                    "AirportName": "Tasiujuaq",
                    "CityCode": "YTQ"
                },
                {
                    "AirportCode": "YTR",
                    "AirportName": "Trenton",
                    "CityCode": "YTR"
                },
                {
                    "AirportCode": "YTS",
                    "AirportName": "Timmins",
                    "CityCode": "YTS"
                },
                {
                    "AirportCode": "YTT",
                    "AirportName": "Tisdale",
                    "CityCode": "YTT"
                },
                {
                    "AirportCode": "YTX",
                    "AirportName": "Telegraph Creek",
                    "CityCode": "YTX"
                },
                {
                    "AirportCode": "YTZ",
                    "AirportName": "Toronto Island",
                    "CityCode": "YTO"
                },
                {
                    "AirportCode": "YUB",
                    "AirportName": "Tuktoyaktuk",
                    "CityCode": "YUB"
                },
                {
                    "AirportCode": "YUD",
                    "AirportName": "Umiujaq",
                    "CityCode": "YUD"
                },
                {
                    "AirportCode": "YUF",
                    "AirportName": "Dewline Site",
                    "CityCode": "YUF"
                },
                {
                    "AirportCode": "YUL",
                    "AirportName": "Dorval",
                    "CityCode": "YMQ"
                },
                {
                    "AirportCode": "YUM",
                    "AirportName": "Yuma Int'l",
                    "CityCode": "YUM"
                },
                {
                    "AirportCode": "YUT",
                    "AirportName": "Repulse Bay",
                    "CityCode": "YUT"
                },
                {
                    "AirportCode": "YUX",
                    "AirportName": "Hall Beach",
                    "CityCode": "YUX"
                },
                {
                    "AirportCode": "YUY",
                    "AirportName": "Rouyn",
                    "CityCode": "YUY"
                },
                {
                    "AirportCode": "YVA",
                    "AirportName": "Iconi",
                    "CityCode": "YVA"
                },
                {
                    "AirportCode": "YVB",
                    "AirportName": "Bonaventure",
                    "CityCode": "YVB"
                },
                {
                    "AirportCode": "YVC",
                    "AirportName": "La Ronge",
                    "CityCode": "YVC"
                },
                {
                    "AirportCode": "YVE",
                    "AirportName": "Vernon",
                    "CityCode": "YVE"
                },
                {
                    "AirportCode": "YVM",
                    "AirportName": "Broughton Island",
                    "CityCode": "YVM"
                },
                {
                    "AirportCode": "YVO",
                    "AirportName": "Val D'Or",
                    "CityCode": "YVO"
                },
                {
                    "AirportCode": "YVP",
                    "AirportName": "Kuujjuaq",
                    "CityCode": "YVP"
                },
                {
                    "AirportCode": "YVQ",
                    "AirportName": "Norman Wells",
                    "CityCode": "YVQ"
                },
                {
                    "AirportCode": "YVR",
                    "AirportName": "Vancouver Int'l",
                    "CityCode": "YVR"
                },
                {
                    "AirportCode": "YVT",
                    "AirportName": "Buffalo Narrows",
                    "CityCode": "YVT"
                },
                {
                    "AirportCode": "YVZ",
                    "AirportName": "Deer Lake",
                    "CityCode": "YVZ"
                },
                {
                    "AirportCode": "YWB",
                    "AirportName": "Kangiqsujuaq",
                    "CityCode": "YWB"
                },
                {
                    "AirportCode": "YWG",
                    "AirportName": "Winnipeg",
                    "CityCode": "YWG"
                },
                {
                    "AirportCode": "YWH",
                    "AirportName": "Inner Harbor",
                    "CityCode": "YYJ"
                },
                {
                    "AirportCode": "YWJ",
                    "AirportName": "Fort Franklin",
                    "CityCode": "YWJ"
                },
                {
                    "AirportCode": "YWK",
                    "AirportName": "Wabush",
                    "CityCode": "YWK"
                },
                {
                    "AirportCode": "YWL",
                    "AirportName": "Williams Lake",
                    "CityCode": "YWL"
                },
                {
                    "AirportCode": "YWP",
                    "AirportName": "Webequie",
                    "CityCode": "YWP"
                },
                {
                    "AirportCode": "YWS",
                    "AirportName": "Whistler",
                    "CityCode": "YWS"
                },
                {
                    "AirportCode": "YWY",
                    "AirportName": "Wrigley",
                    "CityCode": "YWY"
                },
                {
                    "AirportCode": "YXC",
                    "AirportName": "Cranbrook",
                    "CityCode": "YXC"
                },
                {
                    "AirportCode": "YXD",
                    "AirportName": "Edmonton Municipal",
                    "CityCode": "YEA"
                },
                {
                    "AirportCode": "YXE",
                    "AirportName": "Saskatoon",
                    "CityCode": "YXE"
                },
                {
                    "AirportCode": "YXH",
                    "AirportName": "Medicine Hat",
                    "CityCode": "YXH"
                },
                {
                    "AirportCode": "YXJ",
                    "AirportName": "Fort St John",
                    "CityCode": "YXJ"
                },
                {
                    "AirportCode": "YXK",
                    "AirportName": "Rimouski",
                    "CityCode": "YXK"
                },
                {
                    "AirportCode": "YXL",
                    "AirportName": "Sioux Lookout",
                    "CityCode": "YXL"
                },
                {
                    "AirportCode": "YXN",
                    "AirportName": "Whale Cove",
                    "CityCode": "YXN"
                },
                {
                    "AirportCode": "YXP",
                    "AirportName": "Pangnirtung",
                    "CityCode": "YXP"
                },
                {
                    "AirportCode": "YXR",
                    "AirportName": "Earlton",
                    "CityCode": "YXR"
                },
                {
                    "AirportCode": "YXS",
                    "AirportName": "Prince George",
                    "CityCode": "YXS"
                },
                {
                    "AirportCode": "YXT",
                    "AirportName": "Terrace",
                    "CityCode": "YXT"
                },
                {
                    "AirportCode": "YXU",
                    "AirportName": "London",
                    "CityCode": "YXU"
                },
                {
                    "AirportCode": "YXX",
                    "AirportName": "Abbotsford",
                    "CityCode": "YXX"
                },
                {
                    "AirportCode": "YXY",
                    "AirportName": "Whitehorse",
                    "CityCode": "YXY"
                },
                {
                    "AirportCode": "YXZ",
                    "AirportName": "Wawa",
                    "CityCode": "YXZ"
                },
                {
                    "AirportCode": "YYB",
                    "AirportName": "North Bay",
                    "CityCode": "YYB"
                },
                {
                    "AirportCode": "YYC",
                    "AirportName": "Calgary Int'l",
                    "CityCode": "YYC"
                },
                {
                    "AirportCode": "YYD",
                    "AirportName": "Smithers",
                    "CityCode": "YYD"
                },
                {
                    "AirportCode": "YYE",
                    "AirportName": "Fort Nelson",
                    "CityCode": "YYE"
                },
                {
                    "AirportCode": "YYG",
                    "AirportName": "Charlottetown",
                    "CityCode": "YYG"
                },
                {
                    "AirportCode": "YYH",
                    "AirportName": "Taloyoak",
                    "CityCode": "YYH"
                },
                {
                    "AirportCode": "YYJ",
                    "AirportName": "Victoria Int'l",
                    "CityCode": "YYJ"
                },
                {
                    "AirportCode": "YYL",
                    "AirportName": "Lynn Lake",
                    "CityCode": "YYL"
                },
                {
                    "AirportCode": "YYN",
                    "AirportName": "Swift Current",
                    "CityCode": "YYN"
                },
                {
                    "AirportCode": "YYQ",
                    "AirportName": "Churchill",
                    "CityCode": "YYQ"
                },
                {
                    "AirportCode": "YYR",
                    "AirportName": "Goose Bay",
                    "CityCode": "YYR"
                },
                {
                    "AirportCode": "YYT",
                    "AirportName": "St Johns",
                    "CityCode": "YYT"
                },
                {
                    "AirportCode": "YYU",
                    "AirportName": "Kapuskasing",
                    "CityCode": "YYU"
                },
                {
                    "AirportCode": "YYY",
                    "AirportName": "Mont Joli",
                    "CityCode": "YYY"
                },
                {
                    "AirportCode": "YYZ",
                    "AirportName": "Pearson Int'l",
                    "CityCode": "YTO"
                },
                {
                    "AirportCode": "YZE",
                    "AirportName": "Gore Bay",
                    "CityCode": "YZE"
                },
                {
                    "AirportCode": "YZF",
                    "AirportName": "Yellowknife",
                    "CityCode": "YZF"
                },
                {
                    "AirportCode": "YZG",
                    "AirportName": "Salluit",
                    "CityCode": "YZG"
                },
                {
                    "AirportCode": "YZP",
                    "AirportName": "Sandspit",
                    "CityCode": "YZP"
                },
                {
                    "AirportCode": "YZR",
                    "AirportName": "Sarnia",
                    "CityCode": "YZR"
                },
                {
                    "AirportCode": "YZS",
                    "AirportName": "Coral Harbour",
                    "CityCode": "YZS"
                },
                {
                    "AirportCode": "YZT",
                    "AirportName": "Port Hardy",
                    "CityCode": "YZT"
                },
                {
                    "AirportCode": "YZV",
                    "AirportName": "Sept Iles",
                    "CityCode": "YZV"
                },
                {
                    "AirportCode": "ZAD",
                    "AirportName": "Zadar",
                    "CityCode": "ZAD"
                },
                {
                    "AirportCode": "ZAG",
                    "AirportName": "Pleso",
                    "CityCode": "ZAG"
                },
                {
                    "AirportCode": "ZAH",
                    "AirportName": "Zahedan",
                    "CityCode": "ZAH"
                },
                {
                    "AirportCode": "ZAJ",
                    "AirportName": "Zaranj",
                    "CityCode": "ZAJ"
                },
                {
                    "AirportCode": "ZAL",
                    "AirportName": "Pichoy",
                    "CityCode": "ZAL"
                },
                {
                    "AirportCode": "ZAM",
                    "AirportName": "Zamboanga",
                    "CityCode": "ZAM"
                },
                {
                    "AirportCode": "ZAR",
                    "AirportName": "Zaria",
                    "CityCode": "ZAR"
                },
                {
                    "AirportCode": "ZAZ",
                    "AirportName": "Zaragoza",
                    "CityCode": "ZAZ"
                },
                {
                    "AirportCode": "ZBF",
                    "AirportName": "Bathurst",
                    "CityCode": "ZBF"
                },
                {
                    "AirportCode": "ZBR",
                    "AirportName": "Chah Bahar",
                    "CityCode": "ZBR"
                },
                {
                    "AirportCode": "ZBY",
                    "AirportName": "Sayaboury",
                    "CityCode": "ZBY"
                },
                {
                    "AirportCode": "ZCL",
                    "AirportName": "La Calera",
                    "CityCode": "ZCL"
                },
                {
                    "AirportCode": "ZCO",
                    "AirportName": "Temuco",
                    "CityCode": "ZCO"
                },
                {
                    "AirportCode": "ZFD",
                    "AirportName": "Fond Du Lac",
                    "CityCode": "ZFD"
                },
                {
                    "AirportCode": "ZFM",
                    "AirportName": "Fort Mcpherson",
                    "CityCode": "ZFM"
                },
                {
                    "AirportCode": "ZFN",
                    "AirportName": "Fort Norman",
                    "CityCode": "ZFN"
                },
                {
                    "AirportCode": "ZGI",
                    "AirportName": "Gods River",
                    "CityCode": "ZGI"
                },
                {
                    "AirportCode": "ZGS",
                    "AirportName": "Gethsemani",
                    "CityCode": "ZGS"
                },
                {
                    "AirportCode": "ZHA",
                    "AirportName": "Zhanjiang",
                    "CityCode": "ZHA"
                },
                {
                    "AirportCode": "ZIG",
                    "AirportName": "Ziguinchor",
                    "CityCode": "ZIG"
                },
                {
                    "AirportCode": "ZIH",
                    "AirportName": "Ixtapa Zihuatanej Int'l",
                    "CityCode": "ZIH"
                },
                {
                    "AirportCode": "ZJG",
                    "AirportName": "Jenpeg",
                    "CityCode": "ZJG"
                },
                {
                    "AirportCode": "ZKB",
                    "AirportName": "Kasaba Bay",
                    "CityCode": "ZKB"
                },
                {
                    "AirportCode": "ZKE",
                    "AirportName": "Kaschechewan",
                    "CityCode": "ZKE"
                },
                {
                    "AirportCode": "ZKG",
                    "AirportName": "Kegaska",
                    "CityCode": "ZKG"
                },
                {
                    "AirportCode": "ZKM",
                    "AirportName": "Sette Cama",
                    "CityCode": "ZKM"
                },
                {
                    "AirportCode": "ZLO",
                    "AirportName": "Manzanillo",
                    "CityCode": "ZLO"
                },
                {
                    "AirportCode": "ZLT",
                    "AirportName": "La Tabatiere",
                    "CityCode": "ZLT"
                },
                {
                    "AirportCode": "ZMM",
                    "AirportName": "Zamora",
                    "CityCode": "ZMM"
                },
                {
                    "AirportCode": "ZMT",
                    "AirportName": "Masset",
                    "CityCode": "ZMT"
                },
                {
                    "AirportCode": "ZND",
                    "AirportName": "Zinder",
                    "CityCode": "ZND"
                },
                {
                    "AirportCode": "ZNE",
                    "AirportName": "Newman",
                    "CityCode": "ZNE"
                },
                {
                    "AirportCode": "ZNZ",
                    "AirportName": "Kisauni",
                    "CityCode": "ZNZ"
                },
                {
                    "AirportCode": "ZOS",
                    "AirportName": "Canal Balo",
                    "CityCode": "ZOS"
                },
                {
                    "AirportCode": "ZPB",
                    "AirportName": "Sachigo Lake",
                    "CityCode": "ZPB"
                },
                {
                    "AirportCode": "ZQN",
                    "AirportName": "Frnkton",
                    "CityCode": "ZQN"
                },
                {
                    "AirportCode": "ZRH",
                    "AirportName": "Zurich",
                    "CityCode": "ZRH"
                },
                {
                    "AirportCode": "ZRI",
                    "AirportName": "Serui",
                    "CityCode": "ZRI"
                },
                {
                    "AirportCode": "ZRJ",
                    "AirportName": "Round Lake",
                    "CityCode": "ZRJ"
                },
                {
                    "AirportCode": "ZRM",
                    "AirportName": "Sarmi",
                    "CityCode": "ZRM"
                },
                {
                    "AirportCode": "ZSA",
                    "AirportName": "San Salvador",
                    "CityCode": "ZSA"
                },
                {
                    "AirportCode": "ZSE",
                    "AirportName": "St Pierre De La Reunion",
                    "CityCode": "ZSE"
                },
                {
                    "AirportCode": "ZSJ",
                    "AirportName": "Sandy Lake",
                    "CityCode": "ZSJ"
                },
                {
                    "AirportCode": "ZSS",
                    "AirportName": "Sassandra",
                    "CityCode": "ZSS"
                },
                {
                    "AirportCode": "ZSW",
                    "AirportName": "Seal Cove",
                    "CityCode": "YPR"
                },
                {
                    "AirportCode": "ZTB",
                    "AirportName": "Tete A La Baleine",
                    "CityCode": "ZTB"
                },
                {
                    "AirportCode": "ZTH",
                    "AirportName": "Zakinthos Is",
                    "CityCode": "ZTH"
                },
                {
                    "AirportCode": "ZTM",
                    "AirportName": "Shamattawa",
                    "CityCode": "ZTM"
                },
                {
                    "AirportCode": "ZUI",
                    "AirportName": "GUANGDONG",
                    "CityCode": "ZUI"
                },
                {
                    "AirportCode": "ZUM",
                    "AirportName": "Churchill Falls",
                    "CityCode": "ZUM"
                },
                {
                    "AirportCode": "ZVA",
                    "AirportName": "Miandrivazo",
                    "CityCode": "ZVA"
                },
                {
                    "AirportCode": "ZVK",
                    "AirportName": "Savannakhet",
                    "CityCode": "ZVK"
                },
                {
                    "AirportCode": "ZWA",
                    "AirportName": "Andapa",
                    "CityCode": "ZWA"
                },
                {
                    "AirportCode": "ZWL",
                    "AirportName": "Wollaston Lake",
                    "CityCode": "ZWL"
                },
                {
                    "AirportCode": "ZXZ",
                    "AirportName": "Jumeirah Beach",
                    "CityCode": "DXB"
                },
                {
                    "AirportCode": "ZYL",
                    "AirportName": "Sylhet Civil",
                    "CityCode": "ZYL"
                },
                {
                    "AirportCode": "ZZU",
                    "AirportName": "Mzuzu",
                    "CityCode": "ZZU"
                }
            ];
        },
        searchGetFareRule: function (dt) {
            return $http({
                method: 'POST',
                url: 'http://52.77.238.174/redirect_request',
                headers: {
                    'Content-Type': 'application/json'
                },
                data:{
                    method: 'POST',
                    url: 'AirlineBooking/GetFareRule',
                    payload:dt
                }
            });
    },
        flightBooking: function (bookData) {
        return $http({
            method: 'POST',
            url: 'http://52.77.238.174/redirect_request',
            headers: {
                'Content-Type': 'application/json'
            },
            data:{
                method: 'POST',
                url: 'AirlineBooking/Book',
                payload:bookData
            }
        });
    },
            AddTransaction: function (t) {
        return $http({
            method: 'POST',
            url: serverConfig.travally_backend+'addTransaction',
            data: t
        });
    },
        getTransaction: function (id) {
        return $http({
            method: 'GET',
            url: serverConfig.travally_backend+'getTransaction/'+id
        });
    },
        GetBooking: function (bookData) {
            return $http({
                method: 'POST',
                url: 'http://52.77.238.174/redirect_request',
                headers: {
                    'Content-Type': 'application/json'
                },
                    data:{
                        method: 'POST',
                        url: 'AirlineBooking/GetBooking',
                        payload:bookData
                    }
            });
        },
        sendChangeRequest: function (dt) {
        return $http({
            method: 'POST',
            url: 'http://52.77.238.174/redirect_request',
            headers: {
                'Content-Type': 'application/json'
            },
            data:{
                method: 'POST',
                url: 'AirlineBooking/SendChangeRequest',
                payload:dt
            }
        });
    },
            flightTicket: function (bookData) {
            return $http({
                  method: 'POST',
                url: 'http://52.77.238.174/redirect_request',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                data:{
                    method: 'POST',
                    url: 'AirlineBooking/Ticket',
                    payload:bookData
                }
            });
    },
        flightGetFareQuote: function (bookData) {
        return $http({
            method: 'POST',
            url: 'http://52.77.238.174/redirect_request',
            headers: {
                'Content-Type': 'application/json'
            },
            data:{
                method: 'POST',
                url: 'AirlineBooking/GetFareQuote',
                payload:bookData
            }
        });
    },
        saveDetails: function (bookData) {
        return $http({
            method: 'POST',
            url: serverConfig.travally_backend+'/addFlightBooking',
            data: bookData
        });
    },
        setflightBookData: function (data) {
        flightBookData = data;
    },
        getflightBookData: function() {
        return flightBookData;
    },
        setFlightData: function (data) {
            flightData = data;
        },
        getFlightData: function() {
            return flightData;
        }
    }
});
