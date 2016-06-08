angular.module('app').animation('.main-slide-animation',function ()
{
    return {
        addClass: function (element, className, done)
        {
            var scope = element.scope();

            if (className == 'ng-hide')
            {
                var elem = $(element);
                var finishPoint = elem.parent().width();
                if(scope.direction !== 'right')
                {
                    finishPoint = -finishPoint;
                }
                TweenMax.to(elem, 0.3, {left: finishPoint, onComplete: done ,ease:Cubic.easeOut});
            }
            else
            {
                done();
            }
        },
        removeClass: function (element, className, done)
        {
            var scope = element.scope();

            if (className == 'ng-hide')
            {
                var elem = $(element);
                elem.removeClass('ng-hide');

                var startPoint = elem.parent().width();
                if(scope.direction === 'right')
                {
                    startPoint = -startPoint;
                }

                TweenMax.set(elem, { left: startPoint });
                TweenMax.to(elem, 0.3, {left: 0, onComplete: done ,ease:Cubic.easeOut});
            }
            else
            {
                done();
            }
        }
    };
});

angular.module('app').directive('compileTemplate', function ($compile, $parse)
{
    return {
        restrict: 'A',
        link: function (scope, element, attr)
        {
            var parsed = $parse(attr.ngBindHtml);

            //Recompile if the template changes
            scope.$watch(
                function ()
                {
                    return (parsed(scope) || '').toString();
                },
                function ()
                {
                    $compile(element, null, -9999)(scope);  //The -9999 makes it skip directives so that we do not recompile ourselves
                }
            );
        }
    };
});


angular.module('app').directive('camanCanvas', function (EVENTS,$rootScope) {
    function link(scope, element, attrs)
    {
        var canvas = element[0];
        Caman(canvas, "/img/post-comonJS.png", function () {
            for (var i = 0; i < Object.keys(scope.camanObj).length; i++){
                this[Object.keys(scope.camanObj)[i]](scope.camanObj[Object.keys(scope.camanObj)[i]]);
            }
            this.render();
        });
    }

    return {
        link: link
    };
});
