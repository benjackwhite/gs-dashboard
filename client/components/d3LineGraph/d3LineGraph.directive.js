'use strict';

angular.module('gosquaredApp')
    .directive('d3LineGraph', function($parse, $window) {
        return {
            template: '<svg width="100%" height="100%"></svg>',
            restrict: 'EA',
            link: function(scope, element, attrs) {
                var expData = $parse(attrs.chartData);
                var xParam = attrs.chartXData;
                var yParam = attrs.chartYData;

                var dataToPlot = [{"timestamp":1431553958935,"usersOnline":31258},{"timestamp":1431553959939,"usersOnline":30780},{"timestamp":1431553960942,"usersOnline":30382},{"timestamp":1431553961944,"usersOnline":30777},{"timestamp":1431553962948,"usersOnline":30592},{"timestamp":1431553963950,"usersOnline":30370},{"timestamp":1431553964953,"usersOnline":30512},{"timestamp":1431553965955,"usersOnline":30112},{"timestamp":1431553966959,"usersOnline":30307},{"timestamp":1431553967959,"usersOnline":30001},{"timestamp":1431553968960,"usersOnline":29977},{"timestamp":1431553969963,"usersOnline":30218},{"timestamp":1431553970963,"usersOnline":30218},{"timestamp":1431553971966,"usersOnline":29953},{"timestamp":1431553972970,"usersOnline":29989},{"timestamp":1431553973975,"usersOnline":29818},{"timestamp":1431553974979,"usersOnline":29802},{"timestamp":1431553975979,"usersOnline":30070},{"timestamp":1431553976983,"usersOnline":30419},{"timestamp":1431553977986,"usersOnline":30007},{"timestamp":1431553978990,"usersOnline":29873},{"timestamp":1431553979995,"usersOnline":29880},{"timestamp":1431553980998,"usersOnline":29903},{"timestamp":1431553982002,"usersOnline":29663},{"timestamp":1431553983008,"usersOnline":29639},{"timestamp":1431553984011,"usersOnline":29304},{"timestamp":1431553985014,"usersOnline":29204},{"timestamp":1431553986016,"usersOnline":28962},{"timestamp":1431553987018,"usersOnline":29321},{"timestamp":1431553988022,"usersOnline":29713},{"timestamp":1431553989026,"usersOnline":30138},{"timestamp":1431553990031,"usersOnline":29899},{"timestamp":1431553991033,"usersOnline":29909},{"timestamp":1431553992036,"usersOnline":30158},{"timestamp":1431553993037,"usersOnline":29743},{"timestamp":1431553994041,"usersOnline":29356},{"timestamp":1431553995045,"usersOnline":29637},{"timestamp":1431553996049,"usersOnline":30132},{"timestamp":1431553997051,"usersOnline":30183},{"timestamp":1431553998054,"usersOnline":29740},{"timestamp":1431553999056,"usersOnline":30050},{"timestamp":1431554000057,"usersOnline":29900},{"timestamp":1431554001062,"usersOnline":29786},{"timestamp":1431554002067,"usersOnline":29646},{"timestamp":1431554003070,"usersOnline":29496},{"timestamp":1431554004073,"usersOnline":29189},{"timestamp":1431554005076,"usersOnline":29455},{"timestamp":1431554006078,"usersOnline":29561},{"timestamp":1431554007081,"usersOnline":29589},{"timestamp":1431554008084,"usersOnline":29408},{"timestamp":1431554009086,"usersOnline":29492},{"timestamp":1431554010092,"usersOnline":29562},{"timestamp":1431554011094,"usersOnline":29188},{"timestamp":1431554012100,"usersOnline":28825},{"timestamp":1431554013102,"usersOnline":29150},{"timestamp":1431554014106,"usersOnline":29270},{"timestamp":1431554015107,"usersOnline":29699},{"timestamp":1431554016112,"usersOnline":29514},{"timestamp":1431554017116,"usersOnline":29312},{"timestamp":1431554018119,"usersOnline":29597},{"timestamp":1431554019123,"usersOnline":29281},{"timestamp":1431554020127,"usersOnline":29489},{"timestamp":1431554021132,"usersOnline":29196},{"timestamp":1431554022135,"usersOnline":29407},{"timestamp":1431554023139,"usersOnline":29684},{"timestamp":1431554024141,"usersOnline":29640},{"timestamp":1431554025145,"usersOnline":30007},{"timestamp":1431554026148,"usersOnline":30394},{"timestamp":1431554027152,"usersOnline":30059},{"timestamp":1431554028155,"usersOnline":30535},{"timestamp":1431554029155,"usersOnline":30778},{"timestamp":1431554030158,"usersOnline":30339},{"timestamp":1431554031158,"usersOnline":29899},{"timestamp":1431554032160,"usersOnline":30327},{"timestamp":1431554033164,"usersOnline":30524},{"timestamp":1431554034168,"usersOnline":30388},{"timestamp":1431554035172,"usersOnline":30838},{"timestamp":1431554036176,"usersOnline":30377},{"timestamp":1431554037178,"usersOnline":30228},{"timestamp":1431554038178,"usersOnline":29907},{"timestamp":1431554039180,"usersOnline":30261},{"timestamp":1431554040183,"usersOnline":29802},{"timestamp":1431554041186,"usersOnline":29691},{"timestamp":1431554042186,"usersOnline":30036},{"timestamp":1431554043187,"usersOnline":30226},{"timestamp":1431554044193,"usersOnline":30328},{"timestamp":1431554045195,"usersOnline":29967},{"timestamp":1431554046198,"usersOnline":29739},{"timestamp":1431554047200,"usersOnline":29870},{"timestamp":1431554048205,"usersOnline":29638},{"timestamp":1431554049207,"usersOnline":30133},{"timestamp":1431554050208,"usersOnline":29982},{"timestamp":1431554051213,"usersOnline":30027},{"timestamp":1431554052219,"usersOnline":30049},{"timestamp":1431554053220,"usersOnline":30101},{"timestamp":1431554054221,"usersOnline":30564},{"timestamp":1431554055222,"usersOnline":30579},{"timestamp":1431554056226,"usersOnline":30805},{"timestamp":1431554057226,"usersOnline":31088},{"timestamp":1431554058228,"usersOnline":30971},{"timestamp":1431554059233,"usersOnline":31061},{"timestamp":1431554060236,"usersOnline":30574},{"timestamp":1431554061239,"usersOnline":30507},{"timestamp":1431554062242,"usersOnline":30868},{"timestamp":1431554063245,"usersOnline":31306},{"timestamp":1431554064246,"usersOnline":31029},{"timestamp":1431554065247,"usersOnline":31281},{"timestamp":1431554066251,"usersOnline":30926},{"timestamp":1431554067256,"usersOnline":30875},{"timestamp":1431554068257,"usersOnline":31220},{"timestamp":1431554069261,"usersOnline":31407},{"timestamp":1431554070263,"usersOnline":31800},{"timestamp":1431554071267,"usersOnline":31598},{"timestamp":1431554072268,"usersOnline":32064},{"timestamp":1431554073271,"usersOnline":31658},{"timestamp":1431554074276,"usersOnline":31231},{"timestamp":1431554075278,"usersOnline":31034},{"timestamp":1431554076279,"usersOnline":31505},{"timestamp":1431554077282,"usersOnline":31592},{"timestamp":1431554078286,"usersOnline":31802},{"timestamp":1431554079288,"usersOnline":31946},{"timestamp":1431554080293,"usersOnline":31509},{"timestamp":1431554081296,"usersOnline":31374},{"timestamp":1431554082300,"usersOnline":31414},{"timestamp":1431554083304,"usersOnline":30975},{"timestamp":1431554084309,"usersOnline":30631},{"timestamp":1431554085314,"usersOnline":31063},{"timestamp":1431554086318,"usersOnline":31186},{"timestamp":1431554087318,"usersOnline":31130},{"timestamp":1431554088319,"usersOnline":31470},{"timestamp":1431554089321,"usersOnline":31797},{"timestamp":1431554090322,"usersOnline":31610},{"timestamp":1431554091324,"usersOnline":31642},{"timestamp":1431554092326,"usersOnline":31527},{"timestamp":1431554093327,"usersOnline":31169},{"timestamp":1431554094332,"usersOnline":31106},{"timestamp":1431554095334,"usersOnline":31035},{"timestamp":1431554096337,"usersOnline":31068},{"timestamp":1431554097341,"usersOnline":31369},{"timestamp":1431554098341,"usersOnline":31798},{"timestamp":1431554099343,"usersOnline":31336},{"timestamp":1431554100346,"usersOnline":31452},{"timestamp":1431554101349,"usersOnline":31052},{"timestamp":1431554102354,"usersOnline":31317},{"timestamp":1431554103358,"usersOnline":31341},{"timestamp":1431554104362,"usersOnline":30932},{"timestamp":1431554105364,"usersOnline":30473},{"timestamp":1431554106369,"usersOnline":30755},{"timestamp":1431554107370,"usersOnline":31160},{"timestamp":1431554108369,"usersOnline":30910},{"timestamp":1431554109372,"usersOnline":31161},{"timestamp":1431554110377,"usersOnline":30891},{"timestamp":1431554111380,"usersOnline":30398},{"timestamp":1431554112382,"usersOnline":30585},{"timestamp":1431554113386,"usersOnline":30860},{"timestamp":1431554114390,"usersOnline":30658},{"timestamp":1431554115392,"usersOnline":30581},{"timestamp":1431554116392,"usersOnline":30823},{"timestamp":1431554117393,"usersOnline":30980},{"timestamp":1431554118397,"usersOnline":31255},{"timestamp":1431554119399,"usersOnline":31468},{"timestamp":1431554120404,"usersOnline":31842},{"timestamp":1431554121405,"usersOnline":32233},{"timestamp":1431554122406,"usersOnline":32327},{"timestamp":1431554123409,"usersOnline":32168},{"timestamp":1431554124409,"usersOnline":32613},{"timestamp":1431554125409,"usersOnline":32335},{"timestamp":1431554126414,"usersOnline":32610},{"timestamp":1431554127415,"usersOnline":32115},{"timestamp":1431554128418,"usersOnline":32092},{"timestamp":1431554129420,"usersOnline":32385},{"timestamp":1431554130423,"usersOnline":32338},{"timestamp":1431554131426,"usersOnline":32425},{"timestamp":1431554132429,"usersOnline":32490},{"timestamp":1431554133433,"usersOnline":32451},{"timestamp":1431554134437,"usersOnline":32924},{"timestamp":1431554135440,"usersOnline":33399},{"timestamp":1431554136442,"usersOnline":33081},{"timestamp":1431554137448,"usersOnline":33374},{"timestamp":1431554138451,"usersOnline":33207},{"timestamp":1431554139454,"usersOnline":32854},{"timestamp":1431554140455,"usersOnline":32587},{"timestamp":1431554141460,"usersOnline":32988},{"timestamp":1431554142460,"usersOnline":33284},{"timestamp":1431554143463,"usersOnline":33718},{"timestamp":1431554144465,"usersOnline":33805},{"timestamp":1431554145467,"usersOnline":33793},{"timestamp":1431554146469,"usersOnline":33589},{"timestamp":1431554147471,"usersOnline":33609},{"timestamp":1431554148472,"usersOnline":33787},{"timestamp":1431554149473,"usersOnline":33661},{"timestamp":1431554150473,"usersOnline":33312},{"timestamp":1431554151475,"usersOnline":33782},{"timestamp":1431554152476,"usersOnline":33435},{"timestamp":1431554153488,"usersOnline":32991},{"timestamp":1431554154489,"usersOnline":32932},{"timestamp":1431554155494,"usersOnline":33331},{"timestamp":1431554156497,"usersOnline":33091},{"timestamp":1431554157497,"usersOnline":33566},{"timestamp":1431554158500,"usersOnline":33982}];
                

                var promiseData = expData(scope);
                var padding = 20;
                var pathClass = "path";
                var xScale, yScale, xAxisGen, yAxisGen, lineFun;

                var d3 = $window.d3;

                var rawSvg = element.find('svg');
                var svg = d3.select(rawSvg[0]);

                scope.$watchCollection(expData, function(newVal, oldVal) {
                    dataToPlot = newVal;
                    redrawLineChart();
                });

                function setChartParameters() {

                    xScale = d3.scale.linear()
                        .domain([dataToPlot[0][xParam], dataToPlot[dataToPlot.length - 1][xParam]])
                        .range([padding + 5, rawSvg.width() - padding]);

                    yScale = d3.scale.linear()
                        .domain([0, d3.max(dataToPlot, function(d) {
                            return d[yParam];
                        })])
                        .range([rawSvg.height() - padding, 0]);

                    xAxisGen = d3.svg.axis()
                        .scale(xScale)
                        .orient("bottom")
                        .ticks(5);

                    yAxisGen = d3.svg.axis()
                        .scale(yScale)
                        .orient("left")
                        .ticks(5);

                    lineFun = d3.svg.line()
                        .x(function(d) {
                            return xScale(d[xParam]);
                        })
                        .y(function(d) {
                            return yScale(d[yParam]);
                        })
                        .interpolate("basis");
                }

                function drawLineChart() {

                	if(!dataToPlot.length) return;

                    setChartParameters();

                    svg.append("svg:g")
                        .attr("class", "x-axis")
                        .attr("transform", "translate(0,180)")
                        .call(xAxisGen);

                    svg.append("svg:g")
                        .attr("class", "y-axis")
                        .attr("transform", "translate(20,0)")
                        .call(yAxisGen);

                    svg.append("svg:path")
                        .attr({
                            d: lineFun(dataToPlot),
                            "stroke": "white",
                            "stroke-width": 2,
                            "fill": "none",
                            "class": pathClass
                        });
                }

                function redrawLineChart() {

                	if(!dataToPlot.length) return;

                    setChartParameters();

                    svg.selectAll("g.y.axis").call(yAxisGen);

                    svg.selectAll("g.x.axis").call(xAxisGen);

                    svg.selectAll("." + pathClass)
                        .attr({
                            d: lineFun(dataToPlot)
                        });
                }

				window.addEventListener('resize', function(){
					redrawLineChart();
				});

				drawLineChart();
            }
        };
    });
