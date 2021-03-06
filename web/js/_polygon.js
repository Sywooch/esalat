/*
*
* Модуль доставки, определения адреса, определения адреса в корзине
* а также можно использовать для хэлпера и т.д для расчета поставщиков
*
* predator_pc@extremeshop.ru@24062016@1202
* version 12.3
*
* */


var arrCoords = [0,0];
var cityDistrict='';
var arrAddr = [];

//Вытащить координаты: разделитель пробел ' '
function explode( delimiter, string ) {
    var emptyArray = { 0: '' };
    if ( arguments.length != 2 || typeof arguments[0] == 'undefined' || typeof arguments[1] == 'undefined' ){       return null;    }
    if ( delimiter === '' || delimiter === false || delimiter === null ){        return false;    }
    if ( typeof delimiter == 'function' || typeof delimiter == 'object' || typeof string == 'function' || typeof string == 'object' ) {        return emptyArray;    }
    if ( delimiter === true ) {        delimiter = '1';    }
    return string.toString().split ( delimiter.toString() );
}

function ymaps_re () {
    ymaps.ready(function () {
    
    	    var myMap = new ymaps.Map('poligon', {
    			center:	[55.03023958662654,83.01634839361031],
                zoom: 9,
                controls: []
            });
    
        var myPolygon = new ymaps.Polygon([[
    			 [54.904053622494764,82.9377314754151], [54.914764620734566,82.93432939937775], [54.91450039894168,82.86056865146823], [54.8978663710481,82.84809101513093], [54.91343626358206,82.7978185184982], [54.932876378344794,82.80929837308183], [54.94455074134144,82.82841715893991], [54.95738243473404,82.83755812726264], [54.97830692462443,82.77597460828072], [54.98292241738692,82.76155505261677], [54.98830237251416,82.74739298901777], [54.991312857025136,82.73202929578008], [54.99275015998939,82.72799525342184], [54.9943847979584,82.72464785657138], [54.99987422463352,82.73151431164976], [55.00493123099267,82.74421725354486], [55.00727450462609,82.75104079327876], [55.008680402805346,82.76172671399402], [55.00972862800023,82.76571784100784], [55.0394744141261,82.73340258679612], [55.05416038050272,82.75571856580022], [55.06834838983901,82.75400195203096], [55.10193563248594,82.75594198982434], [55.10134494886453,82.77996939632749], [55.08618392563652,82.80022025253756], [55.099376210329076,82.80502677109293], [55.10497834407678,82.8078913703208], [55.125932131231764,82.82219827320621], [55.13999216067705,82.83496022369906], [55.157729145431965,82.8482103362326], [55.14872649090869,82.89373278763335], [55.15292096127003,82.91909575607814], [55.185085289983576,82.92553305771374], [55.198572695421184,82.93481077262086], [55.200275202746575,82.977047471903], [55.19661073754022,82.99697619273294], [55.16096992148841,83.01301053037461], [55.15343093616846,83.01186927347642], [55.15532797328772,82.99836839743762], [55.121824595394756,83.0118183575805], [55.12873986584527,83.04294943954946], [55.11831223996677,83.05166125443023], [55.11208640209515,83.04869703630452], [55.107631065813294,83.05517419391127], [55.090305466914685,83.07316660174331], [55.07312118604665,83.05668710955578], [55.06873776150439,83.05479883440933], [55.06361494643057,83.05067896136241], [55.06174298432482,83.03411363848652], [55.041145596740584,83.03763269671407], [55.03956832468436,83.02647470721203], [55.02458112890747,83.03042291888201], [55.01256104559947,83.04689841732782], [55.010551038002156,83.07445006832882], [54.99472640210213,83.06904273495473], [55.000968199835796,83.09187369808949], [54.990753841176314,83.09805350765981], [54.991642149959965,83.12002616390983], [54.978895495404394,83.14067917332449], [54.97508798584045,83.14654248223096], [54.954291476114484,83.12167840466293], [54.948993397630275,83.11709719166548], [54.94033465475622,83.12264399990829], [54.934540526924785,83.0989225433805], [54.92647182648579,83.08962064251682], [54.922591351848226,83.07342010006683], [54.934478751312064,83.07288365826388], [54.95258727563659,83.06050258145112], [54.94255819115071,83.00123649105808], [54.93865456754232,83.00226645931981], [54.92931397382204,82.99814658627294], [54.91082404804007,82.99745994076511], [54.910450082833385,82.9788105414846], [54.91649336572487,82.97600897416855], [54.915218650383345,82.96050446495799], [54.91180066799738,82.95994120106492], [54.904963828526434,82.95606809124747], [54.904053622494764,82.9377314754151],
            ]],
            {
                balloonContent: 'Доставка за 300р.'
            }, {
                fillColor: '#06ff00',fillOpacity: 0.3,strokeColor: '#0000FF',strokeOpacity: 0.7,strokeWidth: 1,zindex: 100,borderRadius: 12
            });
    
    //  Создаем прямоугольник с помощью вспомогательного класса.
        var myPolygonOut = new ymaps.Polygon([[
			[54.84306884274331,83.05634952253406], [54.84153407807578,83.03581935940885], [54.840023624994465,83.01431045765584], [54.84188161943492,83.0024145930127], [54.85149021194751,82.98104275158164], [54.84786249541523,82.97388661792985], [54.84728673552813,82.96816278389201], [54.84848467826445,82.96495754411919], [54.842550333005555,82.9493926852058], [54.839256191829406,82.9354237406561], [54.84408585539303,82.9326986162969], [54.86303976816581,82.94875968387807], [54.865524407200446,82.93311972311216], [54.873453801694744,82.93533254554944], [54.87534387869868,82.94303853204923], [54.87584809042809,82.98336018017011], [54.89418100688593,82.98215855053138], [54.90314648700607,82.9654215662784], [54.90189144048005,82.92443741253086], [54.91451739572074,82.92317140987582], [54.91450039894168,82.86056865146823], [54.8978663710481,82.84809101513093], [54.91343626358206,82.7978185184982], [54.932876378344794,82.80929837308183], [54.94361197666532,82.8248981007124], [54.97080252617654,82.7672198780562], [54.96717324929047,82.74147067151331], [54.96544490641759,82.69031558118057], [54.97685676005682,82.68945727429588], [54.97681356285991,82.66422305188394], [54.98146624994629,82.661476469853], [54.999454834395074,82.66902957043945], [54.99849268717271,82.6856378086596], [55.00798979235196,82.70636591992664], [55.02112167714921,82.71421942792192], [55.02951642111642,82.7316859730266], [55.04851209816938,82.74919006905778], [55.05390169802525,82.73442182622175], [55.075908338313994,82.68394265256144], [55.0816943001672,82.64718566022141], [55.08255596724475,82.64149937710982], [55.08410692101203,82.636671400883], [55.09257455546888,82.62439761243093], [55.096315494679054,82.62087855420341], [55.098678011984845,82.62422595105409], [55.09976078553626,82.63778719983337], [55.09769364681338,82.65031848035102], [55.088045579668986,82.67847094617142], [55.08181739660398,82.69589457593219], [55.07100807925905,82.72627863965293], [55.0641491668238,82.74091277203821], [55.06004803220843,82.75211367688445], [55.06834838983901,82.75400195203096], [55.10193563248594,82.75594198982434], [55.10134494886453,82.77996939632749], [55.08618392563652,82.80022025253756], [55.099376210329076,82.80502677109293], [55.10497834407678,82.8078913703208], [55.125932131231764,82.82219827320621], [55.13999216067705,82.83496022369906], [55.157729145431965,82.8482103362326], [55.14872649090869,82.89373278763335], [55.15292096127003,82.91909575607814], [55.185085289983576,82.92553305771374], [55.21096653857888,82.8807314384669], [55.223913094240444,82.87227811572083], [55.23344653298771,82.8611640416321], [55.25897759248053,82.86022190419675], [55.26724479030104,82.86614622183959], [55.26640497354549,82.8744301139291], [55.26257247980065,82.87919448662593], [55.252049322025506,82.88584736505177], [55.24418368349576,82.8853970039545], [55.238043307710775,82.88216774930919], [55.23651267034457,82.89155560586997], [55.221853103279585,82.91558869867788], [55.198769534072795,82.93687670955804], [55.200275202746575,82.977047471903], [55.19661073754022,82.99697619273294], [55.16096992148841,83.01301053037461], [55.15343093616846,83.01186927347642], [55.15532797328772,82.99836839743762], [55.121824595394756,83.0118183575805], [55.12873986584527,83.04294943954946], [55.11831223996677,83.05166125443023], [55.11208640209515,83.04869703630452], [55.107631065813294,83.05517419391127], [55.090305466914685,83.07316660174331], [55.07312118604665,83.05668710955578], [55.06873776150439,83.05479883440933], [55.06361494643057,83.05067896136241], [55.06174298432482,83.03411363848652], [55.041145596740584,83.03763269671407], [55.03956832468436,83.02647470721203], [55.02458112890747,83.03042291888201], [55.01256104559947,83.04689841732782], [55.010551038002156,83.07445006832882], [54.99472640210213,83.06904273495473], [55.000968199835796,83.09187369808949], [54.990753841176314,83.09805350765981], [54.991642149959965,83.12002616390983], [54.978895495404394,83.14067917332449], [54.97271813717107,83.1568421648482], [54.96160142552715,83.165452055786], [54.96770025963661,83.18684535488882], [54.971008549739366,83.20096450314315], [54.96814467272026,83.21512656674174], [54.9468072727124,83.2346959637144], [54.93961815561643,83.21115689739982], [54.92722563305669,83.20453720555102], [54.92570564791606,83.19568591580182], [54.92296211409536,83.18536477551257], [54.92872084670478,83.17487197384636], [54.92844899382551,83.1656022594909], [54.92282616834258,83.15959411129752], [54.914730385051655,83.16148238644404], [54.90102562582681,83.13332992062364], [54.891867963569446,83.13882308468614], [54.88245460123149,83.13813643917834], [54.877877003962645,83.12749343380726], [54.873608233227586,83.1180520580748], [54.86815096936067,83.1154771374206], [54.85768275987847,83.12417240956728], [54.84364563331617,83.12771784040547], [54.837756636622146,83.12210576018725], [54.832483204132096,83.11414987876947], [54.82443402477649,83.1020741243049], [54.82716534060976,83.08684900697733], [54.837693239843766,83.06844015786137], [54.84385977442994,83.0637642189017], [54.84306884274331,83.05634952253406],
    //	28062016	//	  [54.84306884274331,83.05634952253406], [54.84153407807578,83.03581935940885], [54.840023624994465,83.01431045765584], [54.84188161943492,83.0024145930127], [54.85149021194751,82.98104275158164], [54.84786249541523,82.97388661792985], [54.84728673552813,82.96816278389201], [54.84848467826445,82.96495754411919], [54.842550333005555,82.9493926852058], [54.839256191829406,82.9354237406561], [54.84408585539303,82.9326986162969], [54.86303976816581,82.94875968387807], [54.865524407200446,82.93311972311216], [54.873453801694744,82.93533254554944], [54.87534387869868,82.94303853204923], [54.87584809042809,82.98336018017011], [54.89418100688593,82.98215855053138], [54.90314648700607,82.9654215662784], [54.90189144048005,82.92443741253086], [54.91451739572074,82.92317140987582], [54.91450039894168,82.86056865146823], [54.8978663710481,82.84809101513093], [54.91343626358206,82.7978185184982], [54.932876378344794,82.80929837308183], [54.94361197666532,82.8248981007124], [54.97080252617654,82.7672198780562], [54.96717324929047,82.74147067151331], [54.96544490641759,82.69031558118057], [54.97685676005682,82.68945727429588], [54.97681356285991,82.66422305188394], [54.98146624994629,82.661476469853], [54.999454834395074,82.66902957043945], [54.99849268717271,82.6856378086596], [55.009124360372994,82.70413432202628], [55.03453270106783,82.70932707867874], [55.0460788400936,82.72722277722579], [55.062338808091425,82.68825564465752], [55.07962622309978,82.62053523144952], [55.09690613715223,82.61461291394473], [55.10871714599498,82.63589892468706], [55.11752390775286,82.65739951215043], [55.07573597762629,82.75305781445766], [55.10193563248594,82.75594198982434], [55.10134494886453,82.77996939632749], [55.08618392563652,82.80022025253756], [55.099376210329076,82.80502677109293], [55.10497834407678,82.8078913703208], [55.125932131231764,82.82219827320621], [55.13999216067705,82.83496022369906], [55.157729145431965,82.8482103362326], [55.14872649090869,82.89373278763335], [55.15292096127003,82.91909575607814], [55.185085289983576,82.92553305771374], [55.198572695421184,82.93481077262086], [55.200275202746575,82.977047471903], [55.19661073754022,82.99697619273294], [55.16096992148841,83.01301053037461], [55.15343093616846,83.01186927347642], [55.15532797328772,82.99836839743762], [55.121824595394756,83.0118183575805], [55.12873986584527,83.04294943954946], [55.11831223996677,83.05166125443023], [55.11208640209515,83.04869703630452], [55.107631065813294,83.05517419391127], [55.090305466914685,83.07316660174331], [55.07312118604665,83.05668710955578], [55.06873776150439,83.05479883440933], [55.06361494643057,83.05067896136241], [55.06174298432482,83.03411363848652], [55.041145596740584,83.03763269671407], [55.03956832468436,83.02647470721203], [55.02458112890747,83.03042291888201], [55.01256104559947,83.04689841732782], [55.010551038002156,83.07445006832882], [54.99472640210213,83.06904273495473], [55.000968199835796,83.09187369808949], [54.990753841176314,83.09805350765981], [54.991642149959965,83.12002616390983], [54.978895495404394,83.14067917332449], [54.97271813717107,83.1568421648482], [54.96160142552715,83.165452055786], [54.96770025963661,83.18684535488882], [54.971008549739366,83.20096450314315], [54.96814467272026,83.21512656674174], [54.9468072727124,83.2346959637144], [54.93961815561643,83.21115689739982], [54.92722563305669,83.20453720555102], [54.92570564791606,83.19568591580182], [54.92296211409536,83.18536477551257], [54.92872084670478,83.17487197384636], [54.92844899382551,83.1656022594909], [54.92282616834258,83.15959411129752], [54.914730385051655,83.16148238644404], [54.90102562582681,83.13332992062364], [54.891867963569446,83.13882308468614], [54.88245460123149,83.13813643917834], [54.877877003962645,83.12749343380726], [54.873608233227586,83.1180520580748], [54.86815096936067,83.1154771374206], [54.85768275987847,83.12417240956728], [54.84364563331617,83.12771784040547], [54.837756636622146,83.12210576018725], [54.832483204132096,83.11414987876947], [54.82443402477649,83.1020741243049], [54.82716534060976,83.08684900697733], [54.837693239843766,83.06844015786137], [54.84385977442994,83.0637642189017], [54.84306884274331,83.05634952253406],
            ]],
            {
                balloonContent: 'Доставка за 500р.'
            }, {
                fillColor: '#ff8a00',fillOpacity: 0.3,strokeColor: '#0000FF',strokeOpacity: 0.7,strokeWidth: 1,borderRadius: 12
            });
    
        getCoordsByAddress("Россия, Новосибирск, ул. Кирова 44/1 ");
        var kirova = new ymaps.Placemark(arrCoords, {balloonContent: 'Кирова 44'}, {preset: 'islands#icon',iconColor: '#0095b6'});
        myMap.geoObjects.add(kirova);
        kirova.events.add('click', function (e) { if(!kirova.balloon.open()) kirova.balloon.open();	else  kirova.balloon.close(); });
    
        getCoordsByAddress("Россия, Новосибирск, пл. Карла Маркса 3");
        var marksa = new ymaps.Placemark(arrCoords, {balloonContent: 'пл К. Маркса 3'}, {preset: 'islands#icon',iconColor: '#0095b6'});
        myMap.geoObjects.add(marksa);
        marksa.events.add('click', function (e) { if(!marksa.balloon.open()) marksa.balloon.open();	else  marksa.balloon.close(); });
    
        getCoordsByAddress("Россия, Новосибирск, ул. Советская 64 ");
        var soviet = new ymaps.Placemark(arrCoords, {balloonContent: 'Советская 64'}, {preset: 'islands#icon',iconColor: '#0095b6'});
        myMap.geoObjects.add(soviet);
        soviet.events.add('click', function (e) { if(!soviet.balloon.open()) soviet.balloon.open();	else soviet.balloon.close(); });
    
        getCoordsByAddress("Россия, Новосибирск, ул. Семьи Шамшиных ");
        var shamsh = new ymaps.Placemark(arrCoords, {balloonContent: 'Семьи Шамшиных 20'}, {preset: 'islands#icon',iconColor: '#0095b6'});
        myMap.geoObjects.add(shamsh);
        shamsh.events.add('click', function (e) { if(!shamsh.balloon.open()) shamsh.balloon.open();	else  shamsh.balloon.close(); });
    
        getCoordsByAddress("Россия, Новосибирск, ул. Красный Проспект 220 ");
        var krpr = new ymaps.Placemark(arrCoords, {balloonContent: 'Красный проспект 220'}, {preset: 'islands#icon',iconColor: '#0095b6'});
        myMap.geoObjects.add(krpr);
        krpr.events.add('click', function (e) { if(!krpr.balloon.open()) krpr.balloon.open();	else  krpr.balloon.close(); });
    
    //добавляем полигон на карту иначе не будет искать
        myMap.geoObjects.add(myPolygonOut);
        myMap.geoObjects.add(myPolygon);
    
        myMap.events.add('click', function (e) {
            myMap.balloon.close();
            var coords = e.get('coords');
            if (!myMap.balloon.isOpen())
            {
    
                myMap.balloon.open(coords,{
                    contentBody:'<p>Нет доставки</p>'});
    
            }
        });
    
        $('#test').click(function(){
          //  var city_id = $('.address_point').val();
          //  console.log(getCoordsByAddress("Россия, "+city_id));
        });
    
    
        $(document).on('keyup','.address_point',function() {
            //Подготавливаем локальные переменные для выбора адреса
    //        var maybeAdressPlace =  $(this).closest('.wrapper_adress').find('.maybeArdess');//$(this).next();
            var address = $(this).val();
    	    var arrAddr = [];
    
            //глубокое очищение организма
            $("input.city").val(' ');
         //   $("input.district").val(' ');
            $("input.street").val(' ');
            $("input.house").val(' ');
            $("input.delivery").val(' ');
    
            console.log(address);
            //Ограничиваем поиск областью и полигоном доставки глобальной
    
    
                ymaps.geocode('Новосибирская область ' + address, {
                    boundedBy: [
                        [55.34135720046549, 82.37386017578001], [55.344487770122115, 83.53429108398261], [54.674436675439296, 83.53841095702923], [54.67523252352715, 82.37248688476419],
                    ]
                }).then(function (res) {
    
                    var firstGeoObject = res.geoObjects.get(0);
                    var tz = firstGeoObject.properties.get('text');
    //					console.log(tz);
    
                    arrAddr = explode(', ', tz);
    //						console.log(arrAddr);
                    var a = +arrAddr.length;
    //						console.log('A = '+a);
                    var adressPoint = tz;
                    //	console.log(arrAddr);
    
                    if (a <= 3) { //если адрес короткий в городе
                        $("input.city").val(arrAddr[1]);
                        $("input.street").val(arrAddr[a - 1]);
                        //$("input.district").val(arrAddr[a-3]);
                    } else {


                        if(a==5){ //если адрес Академ
							if(tz.search(/снт/i)!=-1)    {
//								console.log('YEAH!');
	                            $("input.city").val(arrAddr[2]); $("input.street").val(arrAddr[a-1]); //$("input.house").val(arrAddr[a-1]);
							}
							else{
                             							//	console.log('YEAH!');
	                            $("input.city").val(arrAddr[2]); $("input.street").val(arrAddr[a-2]);  $("input.house").val((parseInt(arrAddr[a - 1]) ? arrAddr[a - 1] : ''));
							}
                            //$("input.district").val(arrAddr[a-3]);
                        }
                        else{ //если любой другой
							
							if(tz.search(/снт/i)!=-1)    {
								console.log(tz.search(/снт/i));
	                            $("input.city").val(arrAddr[2]); $("input.street").val(arrAddr[a-1]);// $("input.house").val(arrAddr[a-1]);
							}
							else{
                             							//	console.log('YEAH!');
	                            $("input.city").val(arrAddr[2]); $("input.street").val(arrAddr[a-2]); $("input.house").val((parseInt(arrAddr[a - 1]) ? arrAddr[a - 1] : ''));
							}

//                            $("input.city").val(arrAddr[1]); $("input.street").val(arrAddr[a-2]); $("input.house").val(arrAddr[a-1]);
                           // $("input.district").val(arrAddr[a-3]);
                        }//Проверяем цену доставки


                                /*
                        if (a == 5) { //если адрес Академ
                            $("input.city").val(arrAddr[2]);
                            $("input.street").val(arrAddr[a - 2]);
                            $("input.house").val((parseInt(arrAddr[a - 1]) ? arrAddr[a - 1] : ''));
                            //$("input.district").val(arrAddr[a-3]);
                        }
                        else { //если любой другой
                            $("input.city").val(arrAddr[1]);
                            $("input.street").val(arrAddr[a - 2]);
                            $("input.house").val((parseInt(arrAddr[a - 1]) ? arrAddr[a - 1] : ''));
                            // $("input.district").val(arrAddr[a-3]);
                        }//Проверяем цену доставки
                                            */
                        $("input.district").val(arrAddr[a - 3]);
                        checkDeliveryPrice(tz); //Запрашиваем стоимость отдельной функцией она же проставит деливери
                    }
    
                }).then(function () {
                    $.ajax({ //Получаем координаты нашего адреса
                        url: "https://geocode-maps.yandex.ru/1.x/?format=json&geocode=" + 'Новосибирская область ' + address + "&results=3",
                        type: "GET",
                        data: {},
                        dataType: "JSON",
                        async: false,
                        success: function (response) {
                            var arr = [];
                            arr = explode(' ', response.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos);
    //                            console.debug(arr);
                            //Запрашиваем отдельно район
                            ymaps.geocode(arr[1] + ', ' + arr[0], {
                                kind: 'district'
                            }).then(function (res) {
    
                                var firstGeoObject = res.geoObjects.get(0);
                                var cityDistrict = firstGeoObject.properties.get('name');
                                // console.debug(cityDistrict);
    //                             else
                                $("input.district").val(cityDistrict);
    
                            });
                        }
                    });
                    if(address == '') {
                        $("input.city").val('');
                        $("input.street").val('');
                        $("input.house").val('');
                        $("input.delivery").val('');
                    }
    
                }).then(function(){
                    //yaPoints.push(arrAddr);
                    var textAd = $('.data-address-hidden').text();
                    if(arrAddr && address != '') {
                        $('.maybeArdess').html("<span class='i'><span class='adr_str' onclick=\"$(this).closest('.wrapper_adress').find('input.address_point').val('" + arrAddr + "'); $('.maybeArdess').empty(); \">" + arrAddr + "</span></span>");
                    }else{
                        $('.maybeArdess').html('');
                    }
    
                    /*
                    for (var i = 0; i <= yaPoints.length; i++) {
                        console.log(yaPoints[i]);
                        $('.maybeAdress').append("<span class=''>" + yaPoints[i] + "</span></br>");
                    }*/
                    /*
                    var textAd = $('.data-address-hidden').text();
                    if(arrAddr && address != '') {
                        $('.data-address-hidden').append(arrAddr + ':');
                    }else{
                        $('.data-address-hidden').html('');
                    }*/
    
                });
    
    
    
             // Подключаем подсказка;
    
         //   yaPoints.push(arrAddr);
         //   console.log('!!! '+$("input.city").val()+' '+$("input.district").val()+' '+$("input.street").val()+' '+$("input.house").val());
            //$('.maybeAdress').append("<span class=''>" + arrAddr + "</span></br>");
    
           // console.log();
    //                     $('.maybeAdress').("<span class='i'><span class='adr_str' onclick=\"$(this).closest('.wrapper_adress').find('input.address_point').val('" + arrAddr + "'); $('.maybeArdess').empty(); set_array('" + indx + "', '" + id + "'); \">" + arrAddr + "</span></span></br>");
    //					$('.maybeAdress').append("<span>"+arrAddr+"<br></span>");
    //                   consol.log($('.maybeAdress').append("<span class=''><a href='#' class='adr_str' onclick=\" $(this).closest('.wrapper_adress').find('input.address_point').val('"+arrAddr+"'); $('.maybeAdress').empty(); \">"+123+arrAddr+"</a></span></br>"));
    //                   consol.log($('.maybeAdress').append("<span class=''><a href='#' class='adr_str' onclick=\" $(this).closest('.wrapper_adress').find('input.address_point').val('"+arrAddr+"'); $('.maybeAdress').empty(); \">"+123+arrAddr+"</a></span></br>"));
    
    
    	});
    
    
    
    //Проверка адресов и записи в базе
        function pushDelivery(id, value)
        {
            $.ajax({
                url: "http://basic/addon?id="+id+"&value="+value,
                type: "GET",
                data: {},
                async: false,
                dataType: "JSONP",
                success: function(response){
                    console.log(response);
                }
    
            });
    
        }
    
    
    //	Получить координаты по адресу
    //	для установки меток синхронно.
    
        function getCoordsByAddress(city_id){
            var arr = [];
            $.ajax({
                url: "https://geocode-maps.yandex.ru/1.x/?format=json&geocode="+city_id+"&results=3",
                type: "GET",
                data: {},
                dataType: "JSON",
                async: false,
                success: function(response){
                    arr = explode(' ',response.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos);
                }
            }).done(function(){
                arrCoords[0] = arr[1];
                arrCoords[1] = arr[0];
            });
            return arrCoords;
        }
    
    
        // С формы вытягиваем адресс
        $(document).on('keyup','#s1',function(){
            // Улица;
            var street = $('#s1').val();
            //var street =  'улица урманова 6';
            checkDeliveryPrice("Россия, Новосибирск " + street);
            // alert(cite_date);
            return false;
        });
    
        $(document).on('keyup','input[name="house"]',function(){
            // Улица;
            var street = $('input[name="street"]').val();
            // Квартира;
            //var room = $('input[name="room"]').val();
            // Дом;
            var house = $('input[name="house"]').val();
            var cite_date = street + ' ' + (house != '' ? house : '');
            // alert(cite_date);
            if(cite_date != '')
                checkDeliveryPrice("Россия, Новосибирск," + cite_date);
            return false
        });
    
        function checkDeliveryPrice(city_id){
            $.ajax({
                url: "https://geocode-maps.yandex.ru/1.x/?format=json&geocode="+city_id+"&results=3",
                type: "GET",
                data: {},
                dataType: "JSONP",
                success: function(response){
                    var arr = [];
                    arr = explode(' ',response.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos);
    
                    if(myPolygon.geometry.contains([arr[1],arr[0]])) {
                        // alert(city_id + ', Доставка: 300 р.');
                        return $('input.delivery').val('1006');
                    }else if(myPolygonOut.geometry.contains([arr[1],arr[0]])) {
                        //  alert(city_id + ', Доставка: 600 р.');
                        return $('input.delivery').val('1007');
                    } else {
                        // alert(city_id + ', Доставка: Нет доставки!');
                        return $('input.delivery').val('');
    
                    }
    
                    console.log(response.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos);
                    console.log(arr[1]+' '+arr[0]);
                    console.log(myPolygon.geometry.contains([arr[1],arr[0]]));
                }
            });
        }
    
    
    });
}
