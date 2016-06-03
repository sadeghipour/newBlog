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