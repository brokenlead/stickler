angular.module("customFilters", []).filter("unique", function() {
    return function(data, propertyName) {
        if (angular.isArray(data) && angular.isString(propertyName)) {
            var uniqueNames = [],
                keys = {};
            for (var i=0; i < data.length; i++) {
                var val = data[i][propertyName];
                if (angular.isUndefined(keys[val])) {
                    keys[val] = true;
                    uniqueNames.push(val);
                }
            }
            return uniqueNames;
        }
        else {
            return data;
        }
    };
});