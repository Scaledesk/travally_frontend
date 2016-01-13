angular.module('Travally').factory('Hotel', function($http, serverConfig) {
    return {
        search : function(dt) {
            return $http({
                method: 'POST',
                url: 'http://api.jbspl.com/api/HotelBooking/Search',
                headers: {
                    'x-UserName':serverConfig.user_name,
                    'x-Password':serverConfig.password,
                    'Content-Type': 'application/json'
                },
                data: dt
            });
        },
        getHotelDetails : function(dt) {
            return $http({
                method: 'POST',
                url: 'http://api.jbspl.com/api/HotelBooking/GetHotelDetails',
                headers: {
                    'x-UserName':serverConfig.user_name,
                    'x-Password':serverConfig.password,
                    'Content-Type': 'application/json'
                },
                data: dt
            });
        },
        getCity : function() {
            return [
                {"code":"DEL","name":"New Delhi And NCR"},
                {"code":"BOM","name":"Mumbai"},
                {"code":"BLR","name":"Bangalore"},
                {"code":"MAA","name":"Chennai"},
                {"code":"AGR","name":"Agra"},
                {"code":"GOI","name":"Goa"},
                {"code":"HYD","name":"Hyderabad"},
                {"code":"XOO","name":"Ooty"},
                {"code":"XMY","name":"Mysore"},
                {"code":"PNQ","name":"Pune"},
                {"code":"CCU","name":"Kolkata"},
                {"code":"KUU","name":"Manali"},
                {"code":"JAI","name":"Jaipur"},
                {"code":"SLV","name":"Shimla"},
                {"code":"IXC","name":"Chandigarh"},
                {"code":"AGX","name":"Lakshadweep"},
                {"code":"AHM","name":"Ahmednagar"},
                {"code":"AJL","name":"Aizawl"},
                {"code":"AKL","name":"Akola"},
                {"code":"AKV","name":"Araku Valley"},
                {"code":"ALI","name":"Aligarh"},
                {"code":"AMD","name":"Ahmedabad"},
                {"code":"AMR","name":"Amravati"},
                {"code":"ARI","name":"Aritar"},
                {"code":"ARO","name":"Aronda"},
                {"code":"ASN","name":"Asansol"},
                {"code":"ATH","name":"Athirapally"},
                {"code":"ATQ","name":"Amritsar"},
                {"code":"AUN","name":"Aundh"},
                {"code":"BAD","name":"Bhadrak"},
                {"code":"BAG","name":"Bagdogra"},
                {"code":"BAL","name":"Balaghat"},
                {"code":"BAM","name":"Bambora"},
                {"code":"BAO","name":"Bokaro"},
                {"code":"BAP","name":"Baripada"},
                {"code":"BAR","name":"Barbil"},
                {"code":"BAT","name":"Bathinda"},
                {"code":"BBI","name":"Bhubaneshwar"},
                {"code":"BDI","name":"Bundi"},
                {"code":"BDQ","name":"Vadodara"},
                {"code":"BEH","name":"Berhampur"},
                {"code":"BEK","name":"Bekal"},
                {"code":"BELL","name":"Bellary"},
                {"code":"BGH","name":"Bageshwar"},
                {"code":"BGR","name":"Bagar"},
                {"code":"BHA","name":"Bharuch"},
                {"code":"BHIT","name":"Bhitarkanika National Park"},
                {"code":"BHO","name":"Bhopal"},
                {"code":"BHU","name":"Bhuj"},
                {"code":"BHV","name":"Bhavnagar"},
                {"code":"BID","name":"Bidar"},
                {"code":"BKT","name":"Barkot"},
                {"code":"BLO","name":"Bilaspur"},
                {"code":"BLS","name":"Balasore"},
                {"code":"BPW","name":"Berhampur-West Bengal"},
                {"code":"BRA","name":"Brahmapur"},
                {"code":"BRI","name":"Brinchang"},
                {"code":"BTA","name":"Bhutan"},
                {"code":"BTG","name":"Bhumthang"},
                {"code":"BUX","name":"Buxar"},
                {"code":"CAU","name":"Chaukori"},
                {"code":"CCJ","name":"Calicut"},
                {"code":"CHA","name":"Chamrajnagar"},
                {"code":"CHI","name":"Chidambaram"},
                {"code":"CHS","name":"Chhatra Sagar"},
                {"code":"CHT","name":"Chitwan"},
                {"code":"CHU","name":"Churu"},
                {"code":"CJB","name":"Coimbatore"},
                {"code":"COK","name":"Cochin"},
                {"code":"DAS","name":"Dasada"},
                {"code":"DBH","name":"Dabhosa"},
                {"code":"DED","name":"Dehradun"},
                {"code":"DEI","name":"Around Delhi"},
                {"code":"DEO","name":"DEOGHAR"},
                {"code":"DEOR","name":"Deoria"},
                {"code":"DEW","name":"Dewas"},
                {"code":"DGB","name":"Dugalbitta"},
                {"code":"DGH","name":"Deogarh"},
                {"code":"DHA","name":"Dhanbad"},
                {"code":"DHE","name":"Dhenkanal"},
                {"code":"DHM","name":"Dharamshala"},
                {"code":"DHU","name":"Dhule"},
                {"code":"DIB","name":"Dibrugarh"},
                {"code":"DIU","name":"Diu"},
                {"code":"DIV","name":"Divekarwadi"},
                {"code":"DMA","name":"Dimpaur"},
                {"code":"DMP","name":"Dimapur"},
                {"code":"DRG","name":"Durg"},
                {"code":"DUR","name":"Durshet"},
                {"code":"ERO","name":"Erode"},
                {"code":"FAT","name":"Fatehpur Sikri"},
                {"code":"FKT","name":"Falakata"},
                {"code":"FRZ","name":"Firozabad"},
                {"code":"GAB","name":"Gateways Around Bangalore"},
                {"code":"GAC","name":"Gateways Around Chennai"},
                {"code":"GAJ","name":"Gajraula"},
                {"code":"GAK","name":"Kolkata Weekend Getaways"},
                {"code":"GAU","name":"Guwahati"},
                {"code":"GAY","name":"Gaya"},
                {"code":"GHN","name":"Ghanerao"},
                {"code":"GIR","name":"Giridih"},
                {"code":"GNG","name":"Ghangaria"},
                {"code":"GOP","name":"Gorakhpur"},
                {"code":"GPT","name":"Guptkashi"},
                {"code":"GUH","name":"Guhagar"},
                {"code":"GUL","name":"Gulbarga"},
                {"code":"GUN","name":"Guntur"},
                {"code":"GUR","name":"Gurdaspur"},
                {"code":"GWL","name":"Gwalior"},
                {"code":"HAJ","name":"Hajipur"},
                {"code":"HAZ","name":"Hazaribagh"},
                {"code":"HIN","name":"Hingoli"},
                {"code":"HJR","name":"Khajuraho"},
                {"code":"HNG","name":"Hanumangarh"},
                {"code":"HOS","name":"Hoshangabad"},
                {"code":"HPT","name":"Hospet"},
                {"code":"HSX","name":"Hoshiarpur"},
                {"code":"HUN","name":"Hundur"},
                {"code":"HWH","name":"Howrah"},
                {"code":"IDR","name":"Indore"},
                {"code":"IMP","name":"Imphal"},
                {"code":"ISK","name":"Nasik"},
                {"code":"IST","name":"Istanbul"},
                {"code":"ITA","name":"Itanagar"},
                {"code":"IXA","name":"Agartala"},
                {"code":"IXB","name":"Darjeeling"},
                {"code":"IXD","name":"Allahabad"},
                {"code":"IXE","name":"Mangalore"},
                {"code":"IXJ","name":"Jammu"},
                {"code":"IXL","name":"Leh"},
                {"code":"IXM","name":"Madurai"},
                {"code":"IXR","name":"Ranchi"},
                {"code":"IXU","name":"Aurangabad"},
                {"code":"IXW","name":"Jamshedpur"},
                {"code":"IXZ","name":"Port Blair"},
                {"code":"JAL","name":"Jalgaon"},
                {"code":"JALN","name":"Jalna"},
                {"code":"JAP","name":"Jaldapara"},
                {"code":"JAS","name":"Jaisamand"},
                {"code":"JBA","name":"Johor Bahru"},
                {"code":"JDH","name":"Jodhpur"},
                {"code":"JEY","name":"Jeypore"},
                {"code":"JGA","name":"Jamnagar"},
                {"code":"JGD","name":"Jagdalpur"},
                {"code":"JHR","name":"Jharsuguda"},
                {"code":"JHU","name":"Jhumri Telaiya"},
                {"code":"JIS","name":"Jispa"},
                {"code":"JJH","name":"Jhunjhunu"},
                {"code":"JLR","name":"Jabalpur"},
                {"code":"JNA","name":"Junagarh"},
                {"code":"JOJ","name":"Jojawar"},
                {"code":"JPG","name":"Jalpaiguri"},
                {"code":"JRH","name":"Jorhat"},
                {"code":"JSA","name":"Jaisalmer"},
                {"code":"KAK","name":"Kakinada"},
                {"code":"KAR","name":"Karnal"},
                {"code":"KAS","name":"Kasargod"},
                {"code":"KAZ","name":"Kaziranga"},
                {"code":"KCH","name":"Kochee"},
                {"code":"KDR","name":"Kedarnath"},
                {"code":"KEO","name":"Keonjhar"},
                {"code":"KHA","name":"Khanna"},
                {"code":"KHE","name":"Khejarla"},
                {"code":"KHN","name":"Kushinagar"},
                {"code":"KKA","name":"Kankavli"},
                {"code":"KKB","name":"Kota Kinabalu"},
                {"code":"KLH","name":"Kolhapur"},
                {"code":"KNM","name":"Kanam"},
                {"code":"KNU","name":"Kanpur"},
                {"code":"KOH","name":"Kohima"},
                {"code":"KOL","name":"Kolad"},
                {"code":"KON","name":"Konni"},
                {"code":"KOR","name":"Korba"},
                {"code":"KOT","name":"Kotdwar"},
                {"code":"KRA","name":"Karauli"},
                {"code":"KRD","name":"Karad"},
                {"code":"KRI","name":"Krishnagiri"},
                {"code":"KRU","name":"Karur"},
                {"code":"KSH","name":"Kashid"},
                {"code":"KUD","name":"Kudal"},
                {"code":"KUM","name":"Kurumbadi"},
                {"code":"KUR","name":"Kurnool"},
                {"code":"KUT","name":"Kuttikkanam"},
                {"code":"LAC","name":"Lachen"},
                {"code":"LAT","name":"Latur"},
                {"code":"LKO","name":"Lucknow"},
                {"code":"LUN","name":"Luni"},
                {"code":"MAD","name":"Madumalai"},
                {"code":"MAL","name":"Malpe"},
                {"code":"MAN","name":"Manvar"},
                {"code":"MAND","name":"Mandi Gobindgarh"},
                {"code":"MANS","name":"Mansa"},
                {"code":"MAU","name":"Muzaffarpur"},
                {"code":"MAY","name":"Mayiladuthurai"},
                {"code":"MDH","name":"Madhopur"},
                {"code":"MDK","name":"Madikeri"},
                {"code":"MEH","name":"Mehsana"},
                {"code":"MET","name":"METTUPALAYAM"},
                {"code":"MKD","name":"Mukundgarh"},
                {"code":"MLA","name":"Mandla"},
                {"code":"MNM","name":"Manmad"},
                {"code":"MNP","name":"Manipal"},
                {"code":"MPP","name":"Malappuram"},
                {"code":"MRT","name":"Meerut"},
                {"code":"MRZ","name":"Mirzapur"},
                {"code":"MUN","name":"Mundra"},
                {"code":"MUR","name":"Murudeshwar"},
                {"code":"MUZ","name":"Muzaffarnagar"},
                {"code":"NAD","name":"Nadiad"},
                {"code":"NAG","name":"Nagpur"},
                {"code":"NAJ","name":"Najibabad"},
                {"code":"NAU","name":"Naukuchiatal"},
                {"code":"NAW","name":"Nawalgarh"},
                {"code":"NCJ","name":"NAGARCOIL"},
                {"code":"NEL","name":"Nellore"},
                {"code":"NGA","name":"NAGAPATTINAM"},
                {"code":"NGR","name":"Nagarkot"},
                {"code":"NGU","name":"Nagaur"},
                {"code":"NMA","name":"Neemrana"},
                {"code":"NMJ","name":"Nimaj"},
                {"code":"NRL","name":"Narlai"},
                {"code":"NUB","name":"Nubra Valley"},
                {"code":"NYT","name":"Nelliyampathy"},
                {"code":"OSN","name":"Osian"},
                {"code":"PAC","name":"Pachewar"},
                {"code":"PAG","name":"Pauri Garhwal"},
                {"code":"PAI","name":"Palitana"},
                {"code":"PAK","name":"pakur"},
                {"code":"PAL","name":"Palanpur"},
                {"code":"PAN","name":"Pangong"},
                {"code":"PAR","name":"Paro"},
                {"code":"PAT","name":"Patna"},
                {"code":"PATH","name":"Pathankot"},
                {"code":"PER","name":"Periyar"},
                {"code":"PKN","name":"Punakha"},
                {"code":"POK","name":"Pokhara"},
                {"code":"PON","name":"Ponnampet"},
                {"code":"POR","name":"Porbandar"},
                {"code":"PSH","name":"Phuentsholing"},
                {"code":"PTL","name":"Patiala"},
                {"code":"PUT","name":"Puttaparthi"},
                {"code":"RAJ","name":"Rajkot"},
                {"code":"RAN","name":"Ranni"},
                {"code":"RAT","name":"Ratlam"},
                {"code":"REW","name":"Rewa"},
                {"code":"RGH","name":"Ramgarh"},
                {"code":"RHG","name":"Rohetgarh"},
                {"code":"RJA","name":"Rajahmundry"},
                {"code":"RJG","name":"Rajgir"},
                {"code":"RJPLA","name":"Rajpipla"},
                {"code":"ROH","name":"Rohtak"},
                {"code":"ROO","name":"Roorkee"},
                {"code":"ROP","name":"Roopnagar"},
                {"code":"RPR","name":"Raipur"},
                {"code":"RUD","name":"Rudrapur"},
                {"code":"RUM","name":"Rumbak"},
                {"code":"SAH","name":"Saharanpur"},
                {"code":"SAM","name":"Sambalpur"},
                {"code":"SAR","name":"Sarchu"},
                {"code":"SAT","name":"Satna"},
                {"code":"SDG","name":"Sardargarh"},
                {"code":"SDH","name":"Sawaimadhopur"},
                {"code":"SEC","name":"Secunderabad"},
                {"code":"SGN","name":"Sri Ganganagar"},
                {"code":"SHA1","name":"Salkhola"},
                {"code":"SHL","name":"Shillong"},
                {"code":"SIK","name":"Sikar"},
                {"code":"SIO","name":"Sirohi"},
                {"code":"SIR1","name":"Sirmour"},
                {"code":"SIW","name":"Siwan"},
                {"code":"SLI","name":"Sangli"},
                {"code":"SMD","name":"Samode"},
                {"code":"SMI","name":"Shimoga"},
                {"code":"SMN","name":"Somnath"},
                {"code":"SOL","name":"Solapur"},
                {"code":"SON","name":"Sonepat"},
                {"code":"SPD","name":"Sriperumbudur"},
                {"code":"SRI","name":"Srikakulam"},
                {"code":"SRS","name":"Saraswati"},
                {"code":"SRT","name":"Sravasti"},
                {"code":"STA","name":"Satara"},
                {"code":"STV","name":"Surat"},
                {"code":"SUR","name":"Surendranagar"},
                {"code":"SVK","name":"SIVAKASI"},
                {"code":"SXR","name":"Srinagar"},
                {"code":"TAP","name":"Tapola"},
                {"code":"TAR","name":"Tarkali"},
                {"code":"TCN","name":"TIRUCHENDUR"},
                {"code":"TEZ","name":"Tezpur"},
                {"code":"THA","name":"Thattekkad"},
                {"code":"THE","name":"Theni"},
                {"code":"THI","name":"Thirukkadaiyur"},
                {"code":"THO","name":"Thodupuzha"},
                {"code":"TIR","name":"Tirupati"},
                {"code":"TIRU","name":"Tirunelveli"},
                {"code":"TMP","name":"Thimphu"},
                {"code":"TRU","name":"Tiruvannamalai"},
                {"code":"TRV","name":"Thiruvananthapuram"},
                {"code":"TRZ","name":"Tiruchirapally"},
                {"code":"UDR","name":"Udaipur"},
                {"code":"VAL","name":"Valsad"},
                {"code":"VEN","name":"Vengurla"},
                {"code":"VER","name":"Veraval"},
                {"code":"VGA","name":"Vijaywada"},
                {"code":"VIP","name":"Village Tippi"},
                {"code":"VIZ","name":"Vizianagram"},
                {"code":"VNS","name":"Varanasi"},
                {"code":"VTZ","name":"Vishakhapatnam"},
                {"code":"VVA","name":"Verval"},
                {"code":"WAR","name":"Warangal"},
                {"code":"WEM","name":"Weekend Getaways Ex Mumbai"},
                {"code":"XAA","name":"Pataudi"},
                {"code":"XAB","name":"Ranipet"},
                {"code":"XAD","name":"Badami"},
                {"code":"XAE","name":"Rameshwaram"},
                {"code":"XAH","name":"Kanha"},
                {"code":"XAI","name":"Alipura"},
                {"code":"XAJ","name":"Ajmer"},
                {"code":"XAK","name":"Ranakpur"},
                {"code":"XAL","name":"Kanatal"},
                {"code":"XAM","name":"Amla"},
                {"code":"XAN","name":"Anand"},
                {"code":"XAO","name":"Sapotra"},
                {"code":"XAR","name":"Mathura"},
                {"code":"XAT","name":"Matheran"},
                {"code":"XAU","name":"Kausani"},
                {"code":"XBA","name":"Badrinath"},
                {"code":"XBB","name":"Barog"},
                {"code":"XBC","name":"Baddi"},
                {"code":"XBD","name":"Bandipur"},
                {"code":"XBE","name":"Behror"},
                {"code":"XBG","name":"Bodhgaya"},
                {"code":"XBH","name":"Bhimtal"},
                {"code":"XBI","name":"Kabini"},
                {"code":"XBJ","name":"Bijapur"},
                {"code":"XBK","name":"Bikaner"},
                {"code":"XBL","name":"Bhilai"},
                {"code":"XBM","name":"Nanded"},
                {"code":"XBN","name":"Bandhavgarh"},
                {"code":"XBP","name":"Balrampur"},
                {"code":"XBQ","name":"Panipat"},
                {"code":"XBR","name":"Bhadra"},
                {"code":"XBS","name":"Samalkha"},
                {"code":"XBT","name":"Bannerghatta"},
                {"code":"XBU","name":"Belur"},
                {"code":"XBV","name":"Hissar"},
                {"code":"XBW","name":"Bhilwara"},
                {"code":"XBX","name":"Belgaum"},
                {"code":"XBY","name":"Barailley"},
                {"code":"XCA","name":"Chambal"},
                {"code":"XCB","name":"Ravangla"},
                {"code":"XCC","name":"Cannanore"},
                {"code":"XCD","name":"Chandipur"},
                {"code":"XCH","name":"Chikmangalur"},
                {"code":"XCI","name":"Chittorgarh"},
                {"code":"XCK","name":"Chitrakoot"},
                {"code":"XCN","name":"Coonoor"},
                {"code":"XCO","name":"Corbett"},
                {"code":"XCR","name":"Coorg"},
                {"code":"XCS","name":"Chalsa"},
                {"code":"XCT","name":"Chettinad"},
                {"code":"XCU","name":"Cuttack"},
                {"code":"XCV","name":"Mangan"},
                {"code":"XCZ","name":"Hodal"},
                {"code":"XDA","name":"Dalhousie"},
                {"code":"XDB","name":"Hubli"},
                {"code":"XDD","name":"Dausa"},
                {"code":"XDF","name":"Andaman"},
                {"code":"XDG","name":"Dungarpur"},
                {"code":"XDI","name":"Digha"},
                {"code":"XDL","name":"Dholpur"},
                {"code":"XDM","name":"Daman"},
                {"code":"XDN","name":"Dandeli"},
                {"code":"XDO","name":"Dooars"},
                {"code":"XDP","name":"Dapoli"},
                {"code":"XDR","name":"Dirang"},
                {"code":"XDT","name":"Dhanaulti"},
                {"code":"XDU","name":"Durgapur"},
                {"code":"XDV","name":"Devprayag"},
                {"code":"XEE","name":"Paradeep"},
                {"code":"XEP","name":"Elappara"},
                {"code":"XER","name":"Sunderban"},
                {"code":"XFA","name":"Faizabad"},
                {"code":"XFG","name":"Sojha"},
                {"code":"XFL","name":"Ambala"},
                {"code":"XFM","name":"Tuticorin"},
                {"code":"XFR","name":"Sohna"},
                {"code":"XGA","name":"Gangtok"},
                {"code":"XGB","name":"Bheemeshwari and Galibore"},
                {"code":"XGG","name":"Gangotri"},
                {"code":"XGH","name":"Alibagh"},
                {"code":"XGM","name":"Garhmukteshwar"},
                {"code":"XGN","name":"Gandhidham"},
                {"code":"XGO","name":"Gokarna"},
                {"code":"XGP","name":"Ganpatipule"},
                {"code":"XGR","name":"Gandhinagar"},
                {"code":"XGS","name":"Gopalpur on sea"},
                {"code":"XGT","name":"Pangot"},
                {"code":"XGU","name":"Gulmarg"},
                {"code":"XGV","name":"Guruvayoor"},
                {"code":"XHA","name":"Haridwar"},
                {"code":"XHB","name":"Halebid"},
                {"code":"XHD","name":"Haldia"},
                {"code":"XHF","name":"Bargi"},
                {"code":"XHH","name":"Hansi"},
                {"code":"XHI","name":"Chail"},
                {"code":"XHK","name":"Pokhran"},
                {"code":"XHL","name":"Chamba Himachal"},
                {"code":"XHM","name":"Panchmarhi"},
                {"code":"XHN","name":"Bhandardara"},
                {"code":"XHP","name":"Hampi"},
                {"code":"XHR","name":"Bharatpur"},
                {"code":"XHS","name":"Hosur"},
                {"code":"XHU","name":"Chiplun"},
                {"code":"XHV","name":"Shrivardhan"},
                {"code":"XHW","name":"Haldwani"},
                {"code":"XIA","name":"Binsar"},
                {"code":"XIB","name":"Lachung"},
                {"code":"XID","name":"Idduki"},
                {"code":"XIG","name":"Igatpuri"},
                {"code":"XII","name":"Simlipal"},
                {"code":"XIL","name":"Silvassa"},
                {"code":"XIM","name":"Amarkantak"},
                {"code":"XIN","name":"Lava"},
                {"code":"XIO","name":"Khalghat"},
                {"code":"XIP","name":"Bhedaghat"},
                {"code":"XIR","name":"Bhimbetka"},
                {"code":"XIS","name":"Tajpur"},
                {"code":"XJG","name":"Surajgarh"},
                {"code":"XJH","name":"Jhansi"},
                {"code":"XJJ","name":"Rudraprayag"},
                {"code":"XJL","name":"Jalandhar"},
                {"code":"XJW","name":"Jwalamukhi"},
                {"code":"XKA","name":"Katra"},
                {"code":"XKB","name":"Bakkhali"},
                {"code":"XKC","name":"Kuchesar"},
                {"code":"XKD","name":"Kanadukathan"},
                {"code":"XKG","name":"Kishangarh"},
                {"code":"XKH","name":"Shekhawati"},
                {"code":"XKI","name":"Khimsar"},
                {"code":"XKJ","name":"Khajjiar"},
                {"code":"XKK","name":"Konkan"},
                {"code":"XKL","name":"Kalimpong"},
                {"code":"XKM","name":"Kumbalgarh"},
                {"code":"XKN","name":"Kanchipuram"},
                {"code":"XKO","name":"Kodaikanal"},
                {"code":"XKP","name":"Kashipur"},
                {"code":"XKS","name":"Kasauli"},
                {"code":"XKT","name":"Karjat"},
                {"code":"XKU","name":"Kumarakom"},
                {"code":"XKW","name":"Karwar"},
                {"code":"XKY","name":"Kanyakumari"},
                {"code":"XKZ","name":"Kotputli"},
                {"code":"XLA","name":"Pali"},
                {"code":"XLD","name":"Ludhiana"},
                {"code":"XLG","name":"Nalagarh"},
                {"code":"XLI","name":"Auli"},
                {"code":"XLK","name":"Lonavala And Khandala"},
                {"code":"XLL","name":"Allepey"},
                {"code":"XLM","name":"Kollam"},
                {"code":"XLN","name":"Lansdowne"},
                {"code":"XLO","name":"Lavasa"},
                {"code":"XLP","name":"Bordi"},
                {"code":"XLR","name":"Almora"},
                {"code":"XLS","name":"Junput"},
                {"code":"XLT","name":"Lataguri"},
                {"code":"XLU","name":"Lunagad"},
                {"code":"XLW","name":"Alwar"},
                {"code":"XMA","name":"Mandawa"},
                {"code":"XMB","name":"Mahabalipuram"},
                {"code":"XMD","name":"Mandarmoni"},
                {"code":"XME","name":"Malshej"},
                {"code":"XMG","name":"Masinagudi"},
                {"code":"XMH","name":"Mahabaleshwar"},
                {"code":"XMI","name":"Munsiyari"},
                {"code":"XMJ","name":"Murud Janjira"},
                {"code":"XMK","name":"Mukteshwar"},
                {"code":"XML","name":"Malvan"},
                {"code":"XMM","name":"Marchula"},
                {"code":"XMN","name":"Munnar"},
                {"code":"XMO","name":"Moradabad"},
                {"code":"XMP","name":"Mandu"},
                {"code":"XMR","name":"Marari"},
                {"code":"XMS","name":"Mussoorie"},
                {"code":"XMT","name":"Mukutmanipur"},
                {"code":"XMU","name":"Mount Abu"},
                {"code":"XMV","name":"Mandavi"},
                {"code":"XMW","name":"Maheshwar"},
                {"code":"XNA","name":"Nagarholae"},
                {"code":"XNB","name":"Nilambur"},
                {"code":"XNC","name":"Chamba Uttaranchal"},
                {"code":"XND","name":"Mandi"},
                {"code":"XNH","name":"Nahan"},
                {"code":"XNI","name":"Amboli"},
                {"code":"XNK","name":"Ranikhet"},
                {"code":"XNL","name":"Naldehra"},
                {"code":"XNM","name":"Thanedar"},
                {"code":"XNN","name":"Panna"},
                {"code":"XNP","name":"Panhala"},
                {"code":"XNR","name":"Narendra Nagar"},
                {"code":"XNT","name":"Nainital"},
                {"code":"XNU","name":"Nadukani"},
                {"code":"XNW","name":"Nathdwara"},
                {"code":"XNY","name":"Naukuchiyatal"},
                {"code":"XOA","name":"Malda"},
                {"code":"XOB","name":"Barrackpore"},
                {"code":"XOC","name":"Maithan"},
                {"code":"XOD","name":"Raiganj"},
                {"code":"XOE","name":"Medinipur"},
                {"code":"XOG","name":"Gadiara"},
                {"code":"XOH","name":"Mohali"},
                {"code":"XOI","name":"Kurseong"},
                {"code":"XOJ","name":"Shantiniketan"},
                {"code":"XOK","name":"Kota"},
                {"code":"XOM","name":"Baharampur"},
                {"code":"XON","name":"Tarakeswar"},
                {"code":"XOP","name":"Dwarika"},
                {"code":"XOR","name":"Orchha"},
                {"code":"XOV","name":"Kovalam and Poovar"},
                {"code":"XOZ","name":"Bishnupur"},
                {"code":"XPA","name":"Parwanoo"},
                {"code":"XPC","name":"Pondicherry"},
                {"code":"XPD","name":"Phalodi"},
                {"code":"XPE","name":"Pelling"},
                {"code":"XPG","name":"Pragpur"},
                {"code":"XPH","name":"Pahalgam"},
                {"code":"XPI","name":"Pauri"},
                {"code":"XPJ","name":"Pinjore"},
                {"code":"XPK","name":"Palakkad"},
                {"code":"XPL","name":"Palampur"},
                {"code":"XPM","name":"Pathanamthitta"},
                {"code":"XPN","name":"Panchgani"},
                {"code":"XPP","name":"Pench"},
                {"code":"XPR","name":"Puri"},
                {"code":"XPT","name":"Patnitop"},
                {"code":"XPU","name":"Pushkar"},
                {"code":"XPV","name":"Panvel"},
                {"code":"XPX","name":"Pantnagar"},
                {"code":"XQZ","name":"Rajula"},
                {"code":"XRA","name":"Ranthambhore"},
                {"code":"XRB","name":"Raibareilly"},
                {"code":"XRD","name":"Raigad"},
                {"code":"XRG","name":"Ratnagiri"},
                {"code":"XRI","name":"Rishikesh"},
                {"code":"XRK","name":"Narkanda"},
                {"code":"XRN","name":"Ernakulum"},
                {"code":"XRR","name":"Rourkela"},
                {"code":"XRS","name":"Rajsamand"},
                {"code":"XRT","name":"Raigarh"},
                {"code":"XRU","name":"Rumtek"},
                {"code":"XRY","name":"Rishyap"},
                {"code":"XRZ","name":"Salasar"},
                {"code":"XSA","name":"Sariska"},
                {"code":"XSB","name":"Sharavanbelgola"},
                {"code":"XSD","name":"Sindhudurg"},
                {"code":"XSE","name":"Salem"},
                {"code":"XSG","name":"Sasan Gir"},
                {"code":"XSH","name":"Shirdi"},
                {"code":"XSI","name":"Kosi"},
                {"code":"XSL","name":"Solan"},
                {"code":"XSM","name":"Sawai Madhopur"},
                {"code":"XSN","name":"Siana"},
                {"code":"XSO","name":"Sonapani"},
                {"code":"XSP","name":"Saputara"},
                {"code":"XSQ","name":"Sonamarg"},
                {"code":"XSR","name":"Siliguri"},
                {"code":"XSS","name":"Hassan"},
                {"code":"XSV","name":"Silent Valley"},
                {"code":"XSW","name":"Sawantwadi"},
                {"code":"XT1","name":"Thane-old"},
                {"code":"XTA","name":"Tanjore"},
                {"code":"XTC","name":"Kutch"},
                {"code":"XTE","name":"Thane"},
                {"code":"XTH","name":"Thekkady"},
                {"code":"XTI","name":"Tarapith"},
                {"code":"XTJ","name":"Thanjavur"},
                {"code":"XTM","name":"Loleygaon"},
                {"code":"XTN","name":"Thiruvannamalai"},
                {"code":"XTO","name":"Rinchenpong"},
                {"code":"XTP","name":"Chintpurni"},
                {"code":"XTR","name":"Thrissur"},
                {"code":"XTT","name":"Kottayam"},
                {"code":"XTU","name":"Tirupur"},
                {"code":"XUD","name":"Udipi"},
                {"code":"XUJ","name":"Ujjain"},
                {"code":"XUK","name":"Uttarkashi"},
                {"code":"XUM","name":"Kumbakonam"},
                {"code":"XUN","name":"Kundapur"},
                {"code":"XUP","name":"Udupi"},
                {"code":"XUT","name":"Ramgarh Uttaranchal"},
                {"code":"XUU","name":"Kullu"},
                {"code":"XUY","name":"Sangla"},
                {"code":"XVA","name":"Vapi"},
                {"code":"XVB","name":"Bir"},
                {"code":"XVE","name":"Vagamon"},
                {"code":"XVH","name":"Kannur"},
                {"code":"XVJ","name":"Vijaypur"},
                {"code":"XVK","name":"Vailankanni"},
                {"code":"XVR","name":"Varkala"},
                {"code":"XVT","name":"Kurukshetra"},
                {"code":"XVV","name":"Vellore"},
                {"code":"XWA","name":"Wayanad"},
                {"code":"XWE","name":"Joshimath"},
                {"code":"XWH","name":"Panchkula"},
                {"code":"XXA","name":"Bhojpur"},
                {"code":"XXB","name":"Baramati"},
                {"code":"XXI","name":"Biaora"},
                {"code":"XXP","name":"Chanderi"},
                {"code":"XXR","name":"Datia"},
                {"code":"XXT","name":"Shivpuri"},
                {"code":"XXX","name":"Havelock"},
                {"code":"XYA","name":"Yamnotri"},
                {"code":"XYE","name":"Yercaud"},
                {"code":"XYG","name":"Yelagiri"},
                {"code":"XYY","name":"Kargil"},
                {"code":"XZC","name":"Bhiwadi"},
                {"code":"XZE","name":"Damdama"},
                {"code":"XZF","name":"Pipli"},
                {"code":"XZO","name":"Ankleshwar"},
                {"code":"XZP","name":"Dahej"},
                {"code":"XZQ","name":"Dharwad"},
                {"code":"XZS","name":"Chikmagalur"},
                {"code":"YAM","name":"Yamunanagar"},
                {"code":"YAV","name":"Yavatmal"},
                {"code":"ZAN","name":"Zangskar"},
                {"code":"ZBK","name":"zwqyp"}
            ];
        },
        getHotelCity : function(){
            return [
                {
                    "city_id": 10375,
                    "city_name": "Ahmedabad",
                    "country_id": "IN"
                },
                {
                    "city_id": 10376,
                    "city_name": "Gurgaon",
                    "country_id": "IN"
                },
                {
                    "city_id": 10377,
                    "city_name": "Jalandhar City",
                    "country_id": "IN"
                },
                {
                    "city_id": 10378,
                    "city_name": "Thiruvananthapuram",
                    "country_id": "IN"
                },
                {
                    "city_id": 10379,
                    "city_name": "Chhota Shimla",
                    "country_id": "IN"
                },
                {
                    "city_id": 10380,
                    "city_name": "Agatti Island",
                    "country_id": "IN"
                },
                {
                    "city_id": 10381,
                    "city_name": "Alappuzha",
                    "country_id": "IN"
                },
                {
                    "city_id": 10382,
                    "city_name": "Anjuna and Vagator Beaches",
                    "country_id": "IN"
                },
                {
                    "city_id": 10383,
                    "city_name": "Badrinath",
                    "country_id": "IN"
                },
                {
                    "city_id": 10384,
                    "city_name": "Bagdogra",
                    "country_id": "IN"
                },
                {
                    "city_id": 10385,
                    "city_name": "Baliganja",
                    "country_id": "IN"
                },
                {
                    "city_id": 10386,
                    "city_name": "Balihati",
                    "country_id": "IN"
                },
                {
                    "city_id": 10387,
                    "city_name": "Bamangachhi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10388,
                    "city_name": "Bangaram Island",
                    "country_id": "IN"
                },
                {
                    "city_id": 10389,
                    "city_name": "Bantra",
                    "country_id": "IN"
                },
                {
                    "city_id": 10390,
                    "city_name": "Batanagar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10391,
                    "city_name": "Bangalore",
                    "country_id": "IN"
                },
                {
                    "city_id": 10392,
                    "city_name": "Bhubaneswar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10393,
                    "city_name": "Candolim Beach - Fort Aguada",
                    "country_id": "IN"
                },
                {
                    "city_id": 10394,
                    "city_name": "Car Nicobar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10395,
                    "city_name": "Chak Badrinath",
                    "country_id": "IN"
                },
                {
                    "city_id": 10396,
                    "city_name": "Chamrail",
                    "country_id": "IN"
                },
                {
                    "city_id": 10397,
                    "city_name": "Chanditala",
                    "country_id": "IN"
                },
                {
                    "city_id": 10398,
                    "city_name": "Chennai (Madras)",
                    "country_id": "IN"
                },
                {
                    "city_id": 10399,
                    "city_name": "Chharabra",
                    "country_id": "IN"
                },
                {
                    "city_id": 10400,
                    "city_name": "Chhatrapati Shivaji International Airport (BOM)",
                    "country_id": "IN"
                },
                {
                    "city_id": 10401,
                    "city_name": "Chikkamagaluru",
                    "country_id": "IN"
                },
                {
                    "city_id": 10402,
                    "city_name": "Chitpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10403,
                    "city_name": "Chittur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10404,
                    "city_name": "Colva Beach",
                    "country_id": "IN"
                },
                {
                    "city_id": 10405,
                    "city_name": "Corbett National Park",
                    "country_id": "IN"
                },
                {
                    "city_id": 10406,
                    "city_name": "Covelong Beach",
                    "country_id": "IN"
                },
                {
                    "city_id": 10407,
                    "city_name": "Darjeeling",
                    "country_id": "IN"
                },
                {
                    "city_id": 10408,
                    "city_name": "Dehradun",
                    "country_id": "IN"
                },
                {
                    "city_id": 10409,
                    "city_name": "Delhi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10410,
                    "city_name": "Delhi area",
                    "country_id": "IN"
                },
                {
                    "city_id": 10411,
                    "city_name": "Desert National Park",
                    "country_id": "IN"
                },
                {
                    "city_id": 10412,
                    "city_name": "Dhikuli",
                    "country_id": "IN"
                },
                {
                    "city_id": 10413,
                    "city_name": "Dum Dum",
                    "country_id": "IN"
                },
                {
                    "city_id": 10414,
                    "city_name": "Fort - Churchgate",
                    "country_id": "IN"
                },
                {
                    "city_id": 10415,
                    "city_name": "Gir National Park",
                    "country_id": "IN"
                },
                {
                    "city_id": 10416,
                    "city_name": "Golabari",
                    "country_id": "IN"
                },
                {
                    "city_id": 10417,
                    "city_name": "Guwahati",
                    "country_id": "IN"
                },
                {
                    "city_id": 10418,
                    "city_name": "Hyderabad area",
                    "country_id": "IN"
                },
                {
                    "city_id": 10419,
                    "city_name": "Jaipur area",
                    "country_id": "IN"
                },
                {
                    "city_id": 10420,
                    "city_name": "Janai",
                    "country_id": "IN"
                },
                {
                    "city_id": 10421,
                    "city_name": "Jeypore",
                    "country_id": "IN"
                },
                {
                    "city_id": 10422,
                    "city_name": "Junagadm",
                    "country_id": "IN"
                },
                {
                    "city_id": 10423,
                    "city_name": "Kabini",
                    "country_id": "IN"
                },
                {
                    "city_id": 10424,
                    "city_name": "Kanatal",
                    "country_id": "IN"
                },
                {
                    "city_id": 10425,
                    "city_name": "Kappad Beach",
                    "country_id": "IN"
                },
                {
                    "city_id": 10426,
                    "city_name": "Khar - Bandra",
                    "country_id": "IN"
                },
                {
                    "city_id": 10427,
                    "city_name": "Kochi area",
                    "country_id": "IN"
                },
                {
                    "city_id": 10428,
                    "city_name": "Kozhikode area",
                    "country_id": "IN"
                },
                {
                    "city_id": 10429,
                    "city_name": "Kukas",
                    "country_id": "IN"
                },
                {
                    "city_id": 10430,
                    "city_name": "Kumarakom",
                    "country_id": "IN"
                },
                {
                    "city_id": 10431,
                    "city_name": "Kumbhalgarh Fort",
                    "country_id": "IN"
                },
                {
                    "city_id": 10432,
                    "city_name": "Mahikpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10433,
                    "city_name": "Mangaluru",
                    "country_id": "IN"
                },
                {
                    "city_id": 10434,
                    "city_name": "Mapusa",
                    "country_id": "IN"
                },
                {
                    "city_id": 10435,
                    "city_name": "Mount Abu",
                    "country_id": "IN"
                },
                {
                    "city_id": 10436,
                    "city_name": "Mudumalai Wildlife Sanctuary",
                    "country_id": "IN"
                },
                {
                    "city_id": 10437,
                    "city_name": "Mukteshwar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10438,
                    "city_name": "Mumbai",
                    "country_id": "IN"
                },
                {
                    "city_id": 10439,
                    "city_name": "Mumbai (Bombay) area",
                    "country_id": "IN"
                },
                {
                    "city_id": 10440,
                    "city_name": "Muttukadu",
                    "country_id": "IN"
                },
                {
                    "city_id": 10441,
                    "city_name": "Mysuru",
                    "country_id": "IN"
                },
                {
                    "city_id": 10442,
                    "city_name": "Naddi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10443,
                    "city_name": "Nagarhole National Park",
                    "country_id": "IN"
                },
                {
                    "city_id": 10444,
                    "city_name": "Nangi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10445,
                    "city_name": "Naoabad",
                    "country_id": "IN"
                },
                {
                    "city_id": 10446,
                    "city_name": "Navi Mumbai",
                    "country_id": "IN"
                },
                {
                    "city_id": 10447,
                    "city_name": "Nedumbassery",
                    "country_id": "IN"
                },
                {
                    "city_id": 10448,
                    "city_name": "Nibra",
                    "country_id": "IN"
                },
                {
                    "city_id": 10449,
                    "city_name": "Noida",
                    "country_id": "IN"
                },
                {
                    "city_id": 10450,
                    "city_name": "North Delhi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10451,
                    "city_name": "North Dum-Dum",
                    "country_id": "IN"
                },
                {
                    "city_id": 10452,
                    "city_name": "Palakkad",
                    "country_id": "IN"
                },
                {
                    "city_id": 10453,
                    "city_name": "Panchkula",
                    "country_id": "IN"
                },
                {
                    "city_id": 10454,
                    "city_name": "Panchur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10455,
                    "city_name": "Paradeep",
                    "country_id": "IN"
                },
                {
                    "city_id": 10456,
                    "city_name": "Periwar Tiger Reserve",
                    "country_id": "IN"
                },
                {
                    "city_id": 10457,
                    "city_name": "Phinga",
                    "country_id": "IN"
                },
                {
                    "city_id": 10458,
                    "city_name": "Poovar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10459,
                    "city_name": "Puducherry",
                    "country_id": "IN"
                },
                {
                    "city_id": 10460,
                    "city_name": "Ramagundam",
                    "country_id": "IN"
                },
                {
                    "city_id": 10461,
                    "city_name": "Ranthambore National Park",
                    "country_id": "IN"
                },
                {
                    "city_id": 10462,
                    "city_name": "Rathdana",
                    "country_id": "IN"
                },
                {
                    "city_id": 10463,
                    "city_name": "Rohet",
                    "country_id": "IN"
                },
                {
                    "city_id": 10464,
                    "city_name": "Rohet Jodhpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10465,
                    "city_name": "Rourkela",
                    "country_id": "IN"
                },
                {
                    "city_id": 10466,
                    "city_name": "Sam Sand Dunes",
                    "country_id": "IN"
                },
                {
                    "city_id": 10467,
                    "city_name": "Samode",
                    "country_id": "IN"
                },
                {
                    "city_id": 10468,
                    "city_name": "Santa Cruz Domestic Airport (BOM)",
                    "country_id": "IN"
                },
                {
                    "city_id": 10469,
                    "city_name": "Shimla",
                    "country_id": "IN"
                },
                {
                    "city_id": 10470,
                    "city_name": "South Delhi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10471,
                    "city_name": "South Dum-Dum",
                    "country_id": "IN"
                },
                {
                    "city_id": 10472,
                    "city_name": "Thakurpukur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10473,
                    "city_name": "Thekkady",
                    "country_id": "IN"
                },
                {
                    "city_id": 10474,
                    "city_name": "Thiruvananthapuram area",
                    "country_id": "IN"
                },
                {
                    "city_id": 10475,
                    "city_name": "Tiruchirapally",
                    "country_id": "IN"
                },
                {
                    "city_id": 10476,
                    "city_name": "Tirupur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10477,
                    "city_name": "Udaipur area",
                    "country_id": "IN"
                },
                {
                    "city_id": 10478,
                    "city_name": "Udhagamandalam (Ooty)",
                    "country_id": "IN"
                },
                {
                    "city_id": 10479,
                    "city_name": "Uttarpara-Kotrung",
                    "country_id": "IN"
                },
                {
                    "city_id": 10480,
                    "city_name": "Vagator Beach",
                    "country_id": "IN"
                },
                {
                    "city_id": 10481,
                    "city_name": "Willingdon Island",
                    "country_id": "IN"
                },
                {
                    "city_id": 10482,
                    "city_name": "Agra",
                    "country_id": "IN"
                },
                {
                    "city_id": 10483,
                    "city_name": "Ajabgarh",
                    "country_id": "IN"
                },
                {
                    "city_id": 10484,
                    "city_name": "Aligarh",
                    "country_id": "IN"
                },
                {
                    "city_id": 10485,
                    "city_name": "Alipur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10486,
                    "city_name": "Along",
                    "country_id": "IN"
                },
                {
                    "city_id": 10487,
                    "city_name": "Alwar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10488,
                    "city_name": "Amer",
                    "country_id": "IN"
                },
                {
                    "city_id": 10489,
                    "city_name": "Anjuna",
                    "country_id": "IN"
                },
                {
                    "city_id": 10490,
                    "city_name": "Attibele",
                    "country_id": "IN"
                },
                {
                    "city_id": 10491,
                    "city_name": "Aurangabad",
                    "country_id": "IN"
                },
                {
                    "city_id": 10492,
                    "city_name": "Baihar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10493,
                    "city_name": "Bally",
                    "country_id": "IN"
                },
                {
                    "city_id": 10494,
                    "city_name": "Balurghat",
                    "country_id": "IN"
                },
                {
                    "city_id": 10495,
                    "city_name": "Bara Bazar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10496,
                    "city_name": "Baroda",
                    "country_id": "IN"
                },
                {
                    "city_id": 10497,
                    "city_name": "Benaulim",
                    "country_id": "IN"
                },
                {
                    "city_id": 10498,
                    "city_name": "Beypore",
                    "country_id": "IN"
                },
                {
                    "city_id": 10499,
                    "city_name": "Bharatpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10500,
                    "city_name": "Bhatinda",
                    "country_id": "IN"
                },
                {
                    "city_id": 10501,
                    "city_name": "Bilaspur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10502,
                    "city_name": "Candolim",
                    "country_id": "IN"
                },
                {
                    "city_id": 10503,
                    "city_name": "Cavelossim",
                    "country_id": "IN"
                },
                {
                    "city_id": 10504,
                    "city_name": "Chakdaha",
                    "country_id": "IN"
                },
                {
                    "city_id": 10505,
                    "city_name": "Chamba",
                    "country_id": "IN"
                },
                {
                    "city_id": 10506,
                    "city_name": "Chhatarpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10507,
                    "city_name": "Chiplun",
                    "country_id": "IN"
                },
                {
                    "city_id": 10508,
                    "city_name": "Coonoor",
                    "country_id": "IN"
                },
                {
                    "city_id": 10509,
                    "city_name": "Cuddapah",
                    "country_id": "IN"
                },
                {
                    "city_id": 10510,
                    "city_name": "Dalhousie",
                    "country_id": "IN"
                },
                {
                    "city_id": 10511,
                    "city_name": "Delwara",
                    "country_id": "IN"
                },
                {
                    "city_id": 10512,
                    "city_name": "Dhanbad",
                    "country_id": "IN"
                },
                {
                    "city_id": 10513,
                    "city_name": "Dimapur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10514,
                    "city_name": "Dungarpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10515,
                    "city_name": "Durgapur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10516,
                    "city_name": "Faridabad",
                    "country_id": "IN"
                },
                {
                    "city_id": 10517,
                    "city_name": "Gajner",
                    "country_id": "IN"
                },
                {
                    "city_id": 10518,
                    "city_name": "Gandhidham",
                    "country_id": "IN"
                },
                {
                    "city_id": 10519,
                    "city_name": "Ghaziabad",
                    "country_id": "IN"
                },
                {
                    "city_id": 10520,
                    "city_name": "Gopalpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10521,
                    "city_name": "Gorakhpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10522,
                    "city_name": "Goregaon",
                    "country_id": "IN"
                },
                {
                    "city_id": 10523,
                    "city_name": "Guna",
                    "country_id": "IN"
                },
                {
                    "city_id": 10524,
                    "city_name": "Gwalior",
                    "country_id": "IN"
                },
                {
                    "city_id": 10525,
                    "city_name": "Haridwar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10526,
                    "city_name": "Idukki",
                    "country_id": "IN"
                },
                {
                    "city_id": 10527,
                    "city_name": "Jadabpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10528,
                    "city_name": "Jagdalpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10529,
                    "city_name": "Jaipur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10530,
                    "city_name": "Jalandhar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10531,
                    "city_name": "Jodhpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10532,
                    "city_name": "Jorhat",
                    "country_id": "IN"
                },
                {
                    "city_id": 10533,
                    "city_name": "Juhu Beach",
                    "country_id": "IN"
                },
                {
                    "city_id": 10534,
                    "city_name": "Kailashahar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10535,
                    "city_name": "Kamalpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10536,
                    "city_name": "Kangra",
                    "country_id": "IN"
                },
                {
                    "city_id": 10537,
                    "city_name": "Kanpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10538,
                    "city_name": "Katra",
                    "country_id": "IN"
                },
                {
                    "city_id": 10539,
                    "city_name": "Keshod",
                    "country_id": "IN"
                },
                {
                    "city_id": 10540,
                    "city_name": "Khajuraho",
                    "country_id": "IN"
                },
                {
                    "city_id": 10541,
                    "city_name": "Khandala",
                    "country_id": "IN"
                },
                {
                    "city_id": 10542,
                    "city_name": "Khar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10543,
                    "city_name": "Kolhapur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10544,
                    "city_name": "Kollam",
                    "country_id": "IN"
                },
                {
                    "city_id": 10545,
                    "city_name": "Kosi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10546,
                    "city_name": "Kota",
                    "country_id": "IN"
                },
                {
                    "city_id": 10547,
                    "city_name": "Kottayam",
                    "country_id": "IN"
                },
                {
                    "city_id": 10548,
                    "city_name": "Kovalam Beach",
                    "country_id": "IN"
                },
                {
                    "city_id": 10549,
                    "city_name": "Krishnapur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10550,
                    "city_name": "Kulu",
                    "country_id": "IN"
                },
                {
                    "city_id": 10551,
                    "city_name": "Kumbakonam",
                    "country_id": "IN"
                },
                {
                    "city_id": 10552,
                    "city_name": "Lonavale",
                    "country_id": "IN"
                },
                {
                    "city_id": 10553,
                    "city_name": "Ludhiana",
                    "country_id": "IN"
                },
                {
                    "city_id": 10554,
                    "city_name": "Madgaon",
                    "country_id": "IN"
                },
                {
                    "city_id": 10555,
                    "city_name": "Madhyamgram",
                    "country_id": "IN"
                },
                {
                    "city_id": 10556,
                    "city_name": "Manali",
                    "country_id": "IN"
                },
                {
                    "city_id": 10557,
                    "city_name": "Manesar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10558,
                    "city_name": "Masinigudi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10559,
                    "city_name": "Mohan",
                    "country_id": "IN"
                },
                {
                    "city_id": 10560,
                    "city_name": "Mukteswar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10561,
                    "city_name": "Munnar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10562,
                    "city_name": "Mussoorie",
                    "country_id": "IN"
                },
                {
                    "city_id": 10563,
                    "city_name": "Muzaffarpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10564,
                    "city_name": "Nagappattinam",
                    "country_id": "IN"
                },
                {
                    "city_id": 10565,
                    "city_name": "Nagpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10566,
                    "city_name": "Nalagarh",
                    "country_id": "IN"
                },
                {
                    "city_id": 10567,
                    "city_name": "Nanded",
                    "country_id": "IN"
                },
                {
                    "city_id": 10568,
                    "city_name": "Narendranagar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10569,
                    "city_name": "Nasik",
                    "country_id": "IN"
                },
                {
                    "city_id": 10570,
                    "city_name": "Neyveli",
                    "country_id": "IN"
                },
                {
                    "city_id": 10571,
                    "city_name": "Orchha",
                    "country_id": "IN"
                },
                {
                    "city_id": 10572,
                    "city_name": "Palampur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10573,
                    "city_name": "Panchgani",
                    "country_id": "IN"
                },
                {
                    "city_id": 10574,
                    "city_name": "Pantnagar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10575,
                    "city_name": "Paravur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10576,
                    "city_name": "Patna",
                    "country_id": "IN"
                },
                {
                    "city_id": 10577,
                    "city_name": "Porbandar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10578,
                    "city_name": "Pushkar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10579,
                    "city_name": "Rae Bareli",
                    "country_id": "IN"
                },
                {
                    "city_id": 10580,
                    "city_name": "Raipur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10581,
                    "city_name": "Rajpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10582,
                    "city_name": "Rajsamand",
                    "country_id": "IN"
                },
                {
                    "city_id": 10583,
                    "city_name": "Ramnagar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10584,
                    "city_name": "Ranchi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10585,
                    "city_name": "Ratnagiri",
                    "country_id": "IN"
                },
                {
                    "city_id": 10586,
                    "city_name": "Rewa",
                    "country_id": "IN"
                },
                {
                    "city_id": 10587,
                    "city_name": "Rishikesh",
                    "country_id": "IN"
                },
                {
                    "city_id": 10588,
                    "city_name": "Rupsi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10589,
                    "city_name": "Sadri",
                    "country_id": "IN"
                },
                {
                    "city_id": 10590,
                    "city_name": "Salem",
                    "country_id": "IN"
                },
                {
                    "city_id": 10591,
                    "city_name": "Sankrail",
                    "country_id": "IN"
                },
                {
                    "city_id": 10592,
                    "city_name": "Sarenga",
                    "country_id": "IN"
                },
                {
                    "city_id": 10593,
                    "city_name": "Sarsa",
                    "country_id": "IN"
                },
                {
                    "city_id": 10594,
                    "city_name": "Sawai Madhopur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10595,
                    "city_name": "Secunderabad",
                    "country_id": "IN"
                },
                {
                    "city_id": 10596,
                    "city_name": "Shahdara",
                    "country_id": "IN"
                },
                {
                    "city_id": 10597,
                    "city_name": "Shirdi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10598,
                    "city_name": "Sibpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10599,
                    "city_name": "Silchar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10600,
                    "city_name": "Sohna",
                    "country_id": "IN"
                },
                {
                    "city_id": 10601,
                    "city_name": "Sonarpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10602,
                    "city_name": "Srinagar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10603,
                    "city_name": "Tala",
                    "country_id": "IN"
                },
                {
                    "city_id": 10604,
                    "city_name": "Tangra",
                    "country_id": "IN"
                },
                {
                    "city_id": 10605,
                    "city_name": "Tehri",
                    "country_id": "IN"
                },
                {
                    "city_id": 10606,
                    "city_name": "Tezpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10607,
                    "city_name": "Tirupati",
                    "country_id": "IN"
                },
                {
                    "city_id": 10608,
                    "city_name": "Udaipur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10609,
                    "city_name": "Udaipur- Ahar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10610,
                    "city_name": "Udaipur-Sikar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10611,
                    "city_name": "Ujjain",
                    "country_id": "IN"
                },
                {
                    "city_id": 10612,
                    "city_name": "Varanasi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10613,
                    "city_name": "Varkala",
                    "country_id": "IN"
                },
                {
                    "city_id": 10614,
                    "city_name": "Vasco Da Gama",
                    "country_id": "IN"
                },
                {
                    "city_id": 10615,
                    "city_name": "Vicchio",
                    "country_id": "IN"
                },
                {
                    "city_id": 10616,
                    "city_name": "Port Blair",
                    "country_id": "IN"
                },
                {
                    "city_id": 10617,
                    "city_name": "Hyderabad",
                    "country_id": "IN"
                },
                {
                    "city_id": 10618,
                    "city_name": "Nellore",
                    "country_id": "IN"
                },
                {
                    "city_id": 10619,
                    "city_name": "Rajahmundry",
                    "country_id": "IN"
                },
                {
                    "city_id": 10620,
                    "city_name": "Vijayawada",
                    "country_id": "IN"
                },
                {
                    "city_id": 10621,
                    "city_name": "Vishakhapatnam",
                    "country_id": "IN"
                },
                {
                    "city_id": 10622,
                    "city_name": "Warangal",
                    "country_id": "IN"
                },
                {
                    "city_id": 10623,
                    "city_name": "Dibrugarh",
                    "country_id": "IN"
                },
                {
                    "city_id": 10624,
                    "city_name": "Gauhati",
                    "country_id": "IN"
                },
                {
                    "city_id": 10625,
                    "city_name": "Darbhanga",
                    "country_id": "IN"
                },
                {
                    "city_id": 10626,
                    "city_name": "Gaya",
                    "country_id": "IN"
                },
                {
                    "city_id": 10627,
                    "city_name": "Jamshedpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10628,
                    "city_name": "Chandigarh",
                    "country_id": "IN"
                },
                {
                    "city_id": 10629,
                    "city_name": "Silvassa",
                    "country_id": "IN"
                },
                {
                    "city_id": 10630,
                    "city_name": "New Delhi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10631,
                    "city_name": "Abu",
                    "country_id": "IN"
                },
                {
                    "city_id": 10632,
                    "city_name": "Bhavnagar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10633,
                    "city_name": "Bhuj",
                    "country_id": "IN"
                },
                {
                    "city_id": 10634,
                    "city_name": "Gandhinagar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10635,
                    "city_name": "Jamnagar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10636,
                    "city_name": "Kandla",
                    "country_id": "IN"
                },
                {
                    "city_id": 10637,
                    "city_name": "Rajkot",
                    "country_id": "IN"
                },
                {
                    "city_id": 10638,
                    "city_name": "Surat",
                    "country_id": "IN"
                },
                {
                    "city_id": 10639,
                    "city_name": "Vadodara",
                    "country_id": "IN"
                },
                {
                    "city_id": 10640,
                    "city_name": "Rohtak",
                    "country_id": "IN"
                },
                {
                    "city_id": 10641,
                    "city_name": "Simla",
                    "country_id": "IN"
                },
                {
                    "city_id": 10642,
                    "city_name": "Jammu",
                    "country_id": "IN"
                },
                {
                    "city_id": 10643,
                    "city_name": "Leh",
                    "country_id": "IN"
                },
                {
                    "city_id": 10644,
                    "city_name": "Ernakulam",
                    "country_id": "IN"
                },
                {
                    "city_id": 10645,
                    "city_name": "Kochi",
                    "country_id": "IN"
                },
                {
                    "city_id": 10646,
                    "city_name": "Kozhikode",
                    "country_id": "IN"
                },
                {
                    "city_id": 10647,
                    "city_name": "Trivandrum",
                    "country_id": "IN"
                },
                {
                    "city_id": 10648,
                    "city_name": "Bhopal",
                    "country_id": "IN"
                },
                {
                    "city_id": 10649,
                    "city_name": "Indore",
                    "country_id": "IN"
                },
                {
                    "city_id": 10650,
                    "city_name": "Jabalpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10651,
                    "city_name": "Amravati",
                    "country_id": "IN"
                },
                {
                    "city_id": 10652,
                    "city_name": "Pune",
                    "country_id": "IN"
                },
                {
                    "city_id": 10653,
                    "city_name": "Imphal",
                    "country_id": "IN"
                },
                {
                    "city_id": 10654,
                    "city_name": "Shillong",
                    "country_id": "IN"
                },
                {
                    "city_id": 10655,
                    "city_name": "Belgaum",
                    "country_id": "IN"
                },
                {
                    "city_id": 10656,
                    "city_name": "Bellary",
                    "country_id": "IN"
                },
                {
                    "city_id": 10657,
                    "city_name": "Hassan",
                    "country_id": "IN"
                },
                {
                    "city_id": 10658,
                    "city_name": "Hubli",
                    "country_id": "IN"
                },
                {
                    "city_id": 10659,
                    "city_name": "Mysore",
                    "country_id": "IN"
                },
                {
                    "city_id": 10660,
                    "city_name": "Nelamangala",
                    "country_id": "IN"
                },
                {
                    "city_id": 10661,
                    "city_name": "Yelahanka",
                    "country_id": "IN"
                },
                {
                    "city_id": 10662,
                    "city_name": "Kohima",
                    "country_id": "IN"
                },
                {
                    "city_id": 10663,
                    "city_name": "Puri",
                    "country_id": "IN"
                },
                {
                    "city_id": 10664,
                    "city_name": "Pondicherry",
                    "country_id": "IN"
                },
                {
                    "city_id": 10665,
                    "city_name": "Amritsar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10666,
                    "city_name": "Patiala",
                    "country_id": "IN"
                },
                {
                    "city_id": 10667,
                    "city_name": "Sasan",
                    "country_id": "IN"
                },
                {
                    "city_id": 10668,
                    "city_name": "Ajmer",
                    "country_id": "IN"
                },
                {
                    "city_id": 10669,
                    "city_name": "Bikaner",
                    "country_id": "IN"
                },
                {
                    "city_id": 10670,
                    "city_name": "Jaisalmer",
                    "country_id": "IN"
                },
                {
                    "city_id": 10671,
                    "city_name": "Chennai",
                    "country_id": "IN"
                },
                {
                    "city_id": 10672,
                    "city_name": "Coimbatore",
                    "country_id": "IN"
                },
                {
                    "city_id": 10673,
                    "city_name": "Kanchipuram",
                    "country_id": "IN"
                },
                {
                    "city_id": 10674,
                    "city_name": "Madurai",
                    "country_id": "IN"
                },
                {
                    "city_id": 10675,
                    "city_name": "Mamallapuram",
                    "country_id": "IN"
                },
                {
                    "city_id": 10676,
                    "city_name": "Thanjavur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10677,
                    "city_name": "Agartala",
                    "country_id": "IN"
                },
                {
                    "city_id": 10678,
                    "city_name": "Allahabad",
                    "country_id": "IN"
                },
                {
                    "city_id": 10679,
                    "city_name": "Almora",
                    "country_id": "IN"
                },
                {
                    "city_id": 10680,
                    "city_name": "Bareilly",
                    "country_id": "IN"
                },
                {
                    "city_id": 10681,
                    "city_name": "Dehra Dun",
                    "country_id": "IN"
                },
                {
                    "city_id": 10682,
                    "city_name": "Lucknow",
                    "country_id": "IN"
                },
                {
                    "city_id": 10683,
                    "city_name": "Mathura",
                    "country_id": "IN"
                },
                {
                    "city_id": 10684,
                    "city_name": "Moradabad",
                    "country_id": "IN"
                },
                {
                    "city_id": 10685,
                    "city_name": "Baranagar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10686,
                    "city_name": "Behala",
                    "country_id": "IN"
                },
                {
                    "city_id": 10687,
                    "city_name": "Diamond Harbour",
                    "country_id": "IN"
                },
                {
                    "city_id": 10688,
                    "city_name": "Dumjor",
                    "country_id": "IN"
                },
                {
                    "city_id": 10689,
                    "city_name": "Garden Reach",
                    "country_id": "IN"
                },
                {
                    "city_id": 10690,
                    "city_name": "Haora",
                    "country_id": "IN"
                },
                {
                    "city_id": 10691,
                    "city_name": "Kamarhati",
                    "country_id": "IN"
                },
                {
                    "city_id": 10692,
                    "city_name": "Khardah",
                    "country_id": "IN"
                },
                {
                    "city_id": 10693,
                    "city_name": "Kolkata",
                    "country_id": "IN"
                },
                {
                    "city_id": 10694,
                    "city_name": "Konnagar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10695,
                    "city_name": "Panihati",
                    "country_id": "IN"
                },
                {
                    "city_id": 10696,
                    "city_name": "Rishra",
                    "country_id": "IN"
                },
                {
                    "city_id": 10697,
                    "city_name": "Shrirampur",
                    "country_id": "IN"
                },
                {
                    "city_id": 10698,
                    "city_name": "Titagarh",
                    "country_id": "IN"
                },
                {
                    "city_id": 10699,
                    "city_name": "Gangtok",
                    "country_id": "IN"
                },
                {
                    "city_id": 10700,
                    "city_name": "Itanagar",
                    "country_id": "IN"
                },
                {
                    "city_id": 10701,
                    "city_name": "Aizawl",
                    "country_id": "IN"
                },
                {
                    "city_id": 10702,
                    "city_name": "Daman",
                    "country_id": "IN"
                },
                {
                    "city_id": 10703,
                    "city_name": "Diu",
                    "country_id": "IN"
                },
                {
                    "city_id": 10704,
                    "city_name": "Goa",
                    "country_id": "IN"
                },
                {
                    "city_id": 10705,
                    "city_name": "Marmagao",
                    "country_id": "IN"
                },
                {
                    "city_id": 10706,
                    "city_name": "Panaji",
                    "country_id": "IN"
                },
                {
                    "city_id": 35423,
                    "city_name": "Bambora",
                    "country_id": "IN"
                },
                {
                    "city_id": 35424,
                    "city_name": "Bodh Gaya",
                    "country_id": "IN"
                },
                {
                    "city_id": 35425,
                    "city_name": "Khimsar",
                    "country_id": "IN"
                },
                {
                    "city_id": 35428,
                    "city_name": "Phalodi",
                    "country_id": "IN"
                },
                {
                    "city_id": 35429,
                    "city_name": "Ranakpur",
                    "country_id": "IN"
                },
                {
                    "city_id": 35430,
                    "city_name": "Chittaurgarh",
                    "country_id": "IN"
                },
                {
                    "city_id": 37158,
                    "city_name": "Calcutta",
                    "country_id": "IN"
                },
                {
                    "city_id": 37159,
                    "city_name": "Bombay",
                    "country_id": "IN"
                },
                {
                    "city_id": 37160,
                    "city_name": "Bengaluru",
                    "country_id": "IN"
                },
                {
                    "city_id": 37161,
                    "city_name": "Mangalore",
                    "country_id": "IN"
                },
                {
                    "city_id": 37162,
                    "city_name": "Puttaprathe",
                    "country_id": "IN"
                },
                {
                    "city_id": 37163,
                    "city_name": "tezu",
                    "country_id": "IN"
                },
                {
                    "city_id": 37164,
                    "city_name": "moga",
                    "country_id": "IN"
                },
                {
                    "city_id": 37165,
                    "city_name": "Ranipet",
                    "country_id": "IN"
                },
                {
                    "city_id": 37166,
                    "city_name": "Manipal",
                    "country_id": "IN"
                },
                {
                    "city_id": 37167,
                    "city_name": "Havelock Island",
                    "country_id": "IN"
                },
                {
                    "city_id": 37168,
                    "city_name": "Siliguri",
                    "country_id": "IN"
                },
                {
                    "city_id": 37169,
                    "city_name": "Mahabaleshwar",
                    "country_id": "IN"
                },
                {
                    "city_id": 37170,
                    "city_name": "Yamunotri",
                    "country_id": "IN"
                },
                {
                    "city_id": 37171,
                    "city_name": "Ranikhet",
                    "country_id": "IN"
                },
                {
                    "city_id": 37172,
                    "city_name": "Kausani",
                    "country_id": "IN"
                },
                {
                    "city_id": 37173,
                    "city_name": "Kovalam",
                    "country_id": "IN"
                },
                {
                    "city_id": 37208,
                    "city_name": "Kalpatta",
                    "country_id": "IN"
                },
                {
                    "city_id": 37243,
                    "city_name": "Uttarkashi",
                    "country_id": "IN"
                },
                {
                    "city_id": 37247,
                    "city_name": "Panvel",
                    "country_id": "IN"
                },
                {
                    "city_id": 37249,
                    "city_name": "Binsar",
                    "country_id": "IN"
                },
                {
                    "city_id": 37270,
                    "city_name": "Uttorda",
                    "country_id": "IN"
                },
                {
                    "city_id": 37326,
                    "city_name": "Chomu",
                    "country_id": "IN"
                },
                {
                    "city_id": 37360,
                    "city_name": "Madapur",
                    "country_id": "IN"
                },
                {
                    "city_id": 37373,
                    "city_name": "Kotagiri",
                    "country_id": "IN"
                },
                {
                    "city_id": 37375,
                    "city_name": "Puthenthope",
                    "country_id": "IN"
                },
                {
                    "city_id": 37388,
                    "city_name": "Sulthan Bathery",
                    "country_id": "IN"
                },
                {
                    "city_id": 37417,
                    "city_name": "Omkareshwar",
                    "country_id": "IN"
                },
                {
                    "city_id": 37445,
                    "city_name": "Karaikkudi",
                    "country_id": "IN"
                },
                {
                    "city_id": 37496,
                    "city_name": "Jabalpur area",
                    "country_id": "IN"
                },
                {
                    "city_id": 37515,
                    "city_name": "Chalsa",
                    "country_id": "IN"
                },
                {
                    "city_id": 37549,
                    "city_name": "Karwar",
                    "country_id": "IN"
                },
                {
                    "city_id": 37563,
                    "city_name": "Yercaud",
                    "country_id": "IN"
                },
                {
                    "city_id": 37564,
                    "city_name": "Pench National Park area",
                    "country_id": "IN"
                },
                {
                    "city_id": 37598,
                    "city_name": "Parwanoo",
                    "country_id": "IN"
                },
                {
                    "city_id": 37602,
                    "city_name": "Kushinagar",
                    "country_id": "IN"
                },
                {
                    "city_id": 37615,
                    "city_name": "Bhimtal",
                    "country_id": "IN"
                },
                {
                    "city_id": 37616,
                    "city_name": "Guruvayur",
                    "country_id": "IN"
                },
                {
                    "city_id": 37655,
                    "city_name": "Bhijhariya",
                    "country_id": "IN"
                },
                {
                    "city_id": 37666,
                    "city_name": "Shivpuri",
                    "country_id": "IN"
                },
                {
                    "city_id": 37688,
                    "city_name": "Umaria",
                    "country_id": "IN"
                },
                {
                    "city_id": 37740,
                    "city_name": "Malabar Hill",
                    "country_id": "IN"
                },
                {
                    "city_id": 37761,
                    "city_name": "Kasaragod",
                    "country_id": "IN"
                },
                {
                    "city_id": 37853,
                    "city_name": "Kutta",
                    "country_id": "IN"
                },
                {
                    "city_id": 37862,
                    "city_name": "Sriperumbudur",
                    "country_id": "IN"
                },
                {
                    "city_id": 37907,
                    "city_name": "Sanchi",
                    "country_id": "IN"
                },
                {
                    "city_id": 37968,
                    "city_name": "Vagamon",
                    "country_id": "IN"
                },
                {
                    "city_id": 38039,
                    "city_name": "Srimangla",
                    "country_id": "IN"
                },
                {
                    "city_id": 38165,
                    "city_name": "Bekal",
                    "country_id": "IN"
                },
                {
                    "city_id": 38196,
                    "city_name": "Bhopal area",
                    "country_id": "IN"
                },
                {
                    "city_id": 38225,
                    "city_name": "Malpe",
                    "country_id": "IN"
                },
                {
                    "city_id": 38226,
                    "city_name": "Neeleshwar",
                    "country_id": "IN"
                },
                {
                    "city_id": 38238,
                    "city_name": "Kothamangalam",
                    "country_id": "IN"
                },
                {
                    "city_id": 38269,
                    "city_name": "Guduvancheri",
                    "country_id": "IN"
                },
                {
                    "city_id": 38338,
                    "city_name": "Rajula",
                    "country_id": "IN"
                },
                {
                    "city_id": 38416,
                    "city_name": "Kasagorod area",
                    "country_id": "IN"
                },
                {
                    "city_id": 38439,
                    "city_name": "Pahalgam",
                    "country_id": "IN"
                },
                {
                    "city_id": 38460,
                    "city_name": "Mandawa",
                    "country_id": "IN"
                },
                {
                    "city_id": 38534,
                    "city_name": "Kalimpong",
                    "country_id": "IN"
                },
                {
                    "city_id": 38552,
                    "city_name": "Puttaparthi",
                    "country_id": "IN"
                },
                {
                    "city_id": 38597,
                    "city_name": "Marchula",
                    "country_id": "IN"
                },
                {
                    "city_id": 38598,
                    "city_name": "Khejarla",
                    "country_id": "IN"
                },
                {
                    "city_id": 38695,
                    "city_name": "Suntikoppa",
                    "country_id": "IN"
                },
                {
                    "city_id": 38698,
                    "city_name": "Behror",
                    "country_id": "IN"
                },
                {
                    "city_id": 38702,
                    "city_name": "Satna",
                    "country_id": "IN"
                },
                {
                    "city_id": 38703,
                    "city_name": "Rewari",
                    "country_id": "IN"
                },
                {
                    "city_id": 38720,
                    "city_name": "Kodungallur",
                    "country_id": "IN"
                },
                {
                    "city_id": 38721,
                    "city_name": "Hunsur",
                    "country_id": "IN"
                },
                {
                    "city_id": 38784,
                    "city_name": "Bageshwar",
                    "country_id": "IN"
                },
                {
                    "city_id": 38789,
                    "city_name": "Tuticorin area",
                    "country_id": "IN"
                },
                {
                    "city_id": 38794,
                    "city_name": "Bengaluru (Bangalore)",
                    "country_id": "IN"
                },
                {
                    "city_id": 38920,
                    "city_name": "Tiruvannamalai",
                    "country_id": "IN"
                },
                {
                    "city_id": 38936,
                    "city_name": "Thane",
                    "country_id": "IN"
                },
                {
                    "city_id": 38955,
                    "city_name": "Gulmarg",
                    "country_id": "IN"
                },
                {
                    "city_id": 38983,
                    "city_name": "Phagwara",
                    "country_id": "IN"
                },
                {
                    "city_id": 39047,
                    "city_name": "Bidadi",
                    "country_id": "IN"
                },
                {
                    "city_id": 39156,
                    "city_name": "Pelling",
                    "country_id": "IN"
                },
                {
                    "city_id": 39219,
                    "city_name": "Kushalnagar",
                    "country_id": "IN"
                },
                {
                    "city_id": 39224,
                    "city_name": "Korampallam",
                    "country_id": "IN"
                },
                {
                    "city_id": 39230,
                    "city_name": "Bandipur",
                    "country_id": "IN"
                },
                {
                    "city_id": 39253,
                    "city_name": "Nagercoil",
                    "country_id": "IN"
                },
                {
                    "city_id": 39260,
                    "city_name": "Kasauli",
                    "country_id": "IN"
                },
                {
                    "city_id": 39264,
                    "city_name": "Maheshwar",
                    "country_id": "IN"
                },
                {
                    "city_id": 39301,
                    "city_name": "Ramoji Film City",
                    "country_id": "IN"
                },
                {
                    "city_id": 39330,
                    "city_name": "Bandhavgarh National Park area",
                    "country_id": "IN"
                },
                {
                    "city_id": 39378,
                    "city_name": "Athirapally",
                    "country_id": "IN"
                },
                {
                    "city_id": 39452,
                    "city_name": "Shamirpet",
                    "country_id": "IN"
                },
                {
                    "city_id": 39460,
                    "city_name": "Lavasa",
                    "country_id": "IN"
                },
                {
                    "city_id": 39513,
                    "city_name": "Pali",
                    "country_id": "IN"
                },
                {
                    "city_id": 39603,
                    "city_name": "Kodakaikanal",
                    "country_id": "IN"
                },
                {
                    "city_id": 39614,
                    "city_name": "Bhedaghat",
                    "country_id": "IN"
                },
                {
                    "city_id": 39628,
                    "city_name": "Rameshwaram",
                    "country_id": "IN"
                },
                {
                    "city_id": 39630,
                    "city_name": "Falaknuma",
                    "country_id": "IN"
                },
                {
                    "city_id": 39634,
                    "city_name": "Thodupuzha",
                    "country_id": "IN"
                },
                {
                    "city_id": 39685,
                    "city_name": "Sardar Samand",
                    "country_id": "IN"
                },
                {
                    "city_id": 39701,
                    "city_name": "Darjeeling area",
                    "country_id": "IN"
                },
                {
                    "city_id": 39728,
                    "city_name": "Thrissur",
                    "country_id": "IN"
                },
                {
                    "city_id": 39736,
                    "city_name": "Gaya area",
                    "country_id": "IN"
                },
                {
                    "city_id": 39742,
                    "city_name": "Balrampur",
                    "country_id": "IN"
                },
                {
                    "city_id": 39818,
                    "city_name": "Dahej",
                    "country_id": "IN"
                },
                {
                    "city_id": 39868,
                    "city_name": "Kashipur",
                    "country_id": "IN"
                },
                {
                    "city_id": 39896,
                    "city_name": "Lumbini area",
                    "country_id": "IN"
                },
                {
                    "city_id": 39931,
                    "city_name": "Chail",
                    "country_id": "IN"
                },
                {
                    "city_id": 39977,
                    "city_name": "Pachmarhi",
                    "country_id": "IN"
                },
                {
                    "city_id": 40106,
                    "city_name": "Kanha",
                    "country_id": "IN"
                },
                {
                    "city_id": 40107,
                    "city_name": "Panna",
                    "country_id": "IN"
                },
                {
                    "city_id": 40116,
                    "city_name": "Nedumangad",
                    "country_id": "IN"
                },
                {
                    "city_id": 40145,
                    "city_name": "Fatehpur Sikri",
                    "country_id": "IN"
                },
                {
                    "city_id": 40174,
                    "city_name": "Tuticorin",
                    "country_id": "IN"
                },
                {
                    "city_id": 40215,
                    "city_name": "Kanyakumari",
                    "country_id": "IN"
                },
                {
                    "city_id": 40267,
                    "city_name": "Belapur",
                    "country_id": "IN"
                },
                {
                    "city_id": 40382,
                    "city_name": "Hoskote",
                    "country_id": "IN"
                },
                {
                    "city_id": 40390,
                    "city_name": "Gorakhpur area",
                    "country_id": "IN"
                },
                {
                    "city_id": 40438,
                    "city_name": "Velankanni",
                    "country_id": "IN"
                },
                {
                    "city_id": 40457,
                    "city_name": "Raichak",
                    "country_id": "IN"
                },
                {
                    "city_id": 40478,
                    "city_name": "Madikeri",
                    "country_id": "IN"
                },
                {
                    "city_id": 40506,
                    "city_name": "Auli",
                    "country_id": "IN"
                },
                {
                    "city_id": 40555,
                    "city_name": "Baddi",
                    "country_id": "IN"
                },
                {
                    "city_id": 40629,
                    "city_name": "Devanahalli",
                    "country_id": "IN"
                },
                {
                    "city_id": 40649,
                    "city_name": "Kuchwahi",
                    "country_id": "IN"
                },
                {
                    "city_id": 40678,
                    "city_name": "Ponnampet",
                    "country_id": "IN"
                },
                {
                    "city_id": 40682,
                    "city_name": "Bheeramballi",
                    "country_id": "IN"
                },
                {
                    "city_id": 40769,
                    "city_name": "Ankaleshwar",
                    "country_id": "IN"
                },
                {
                    "city_id": 1764,
                    "city_name": "Calicut",
                    "country_id": "IN"
                },
                {
                    "city_id": 1765,
                    "city_name": "Ootacamund",
                    "country_id": "IN"
                },
                {
                    "city_id": 1766,
                    "city_name": "Mahabalipuram",
                    "country_id": "IN"
                },
                {
                    "city_id": 1767,
                    "city_name": "Alleppey",
                    "country_id": "IN"
                },
                {
                    "city_id": 1768,
                    "city_name": "Tamilnadu",
                    "country_id": "IN"
                },
                {
                    "city_id": 1769,
                    "city_name": "Nainital",
                    "country_id": "IN"
                },
                {
                    "city_id": 1771,
                    "city_name": "Vapi",
                    "country_id": "IN"
                }
            ];
        },
        setSelectedHotel: function (data) {
            selectedHotel = data;
        },
        getSelectedHotel: function() {
            return selectedHotel;
        }


    }
});
