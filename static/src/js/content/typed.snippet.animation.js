odoo.define('website_typed.content.snippet.animation', function (require) {
    'use strict';

    let animation = require('website.content.snippets.animation');

    animation.registry['typed'] = animation.Class.extend({
        selector: '.typedjs',

        /**
         * @override
         */
        start: function () {
            if (!this.editableMode) {
                this._renderElement();
            }
            return this._super.apply(this, arguments);
        },
        /**
         * @override
         */
        destroy: function () {
            this._super.apply(this, arguments);
            if(this.$element) {
                this.typed.destroy();
                this.$element.remove();
                this.$target.show();
            }
        },

        _renderElement: function () {
            let elementId = _.uniqueId('typed_animation_');
            this.$element = $('<span/>', {id: elementId});
            this.$target.after(this.$element);
            this.typed = new Typed('#' + elementId, this._setOptions());
            this.$target.hide();
        },

        _setOptions: function () {
            let strings = this.$target.html().split(',').map(element => element.trim());
            let options = this.$target.data();
            options.strings = strings;

            return options;
        }
    });
});