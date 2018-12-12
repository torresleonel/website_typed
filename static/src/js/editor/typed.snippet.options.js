odoo.define('website_typed.snippets.options', function (require) {
    'use strict';

    let options = require('web_editor.snippets.options');

    options.registry['typedjs_editor'] = options.Class.extend({

        //--------------------------------------------------------------------------
        // Options
        //--------------------------------------------------------------------------

        typeSpeed: function (previewMode, value, $li) {
            this.$target.removeAttr('data-type-speed').attr('data-type-speed', value);
        },

        fadeOut: function (previewMode, value, $li) {
            this.$target.removeAttr('data-fade-out').attr('data-fade-out', value);
        },

        backSpeed: function (previewMode, value, $li) {
            this.$target.removeAttr('data-back-speed').attr('data-back-speed', value);
        },

        smartBackspace: function (previewMode, value, $li) {
            this.$target.removeAttr('data-smart-backspace').attr('data-smart-backspace', value);
        },

        backDelay: function (previewMode, value, $li) {
            this.$target.removeAttr('data-back-delay').attr('data-back-delay', value);
        },

        loop: function (previewMode, value, $li) {
            this.$target.removeAttr('data-loop').attr('data-loop', value);
        },

        showCursor: function (previewMode, value, $li) {
            this.$target.removeAttr('data-show-cursor').attr('data-show-cursor', value);
        },

        cursorChar: function (previewMode, value, $li) {
            this.$target.removeAttr('data-cursor-char').attr('data-cursor-char', value);
        },

        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------

        /**
         * @override
         */
        _setActive: function () {
            this.$el.find('li[data-type-speed]').removeClass('active')
                .filter('li[data-type-speed="' + this.$target.attr('data-type-speed') + '"]').addClass('active');
            this.$el.find('li[data-fade-out]').removeClass('active')
                .filter('li[data-fade-out="' + this.$target.attr('data-fade-out') + '"]').addClass('active');
            this.$el.find('li[data-back-speed]').removeClass('active')
                .filter('li[data-back-speed="' + this.$target.attr('data-back-speed') + '"]').addClass('active');
            this.$el.find('li[data-smart-backspace]').removeClass('active')
                .filter('li[data-smart-backspace="' + this.$target.attr('data-smart-backspace') + '"]').addClass('active');
            this.$el.find('li[data-back-delay]').removeClass('active')
                .filter('li[data-back-delay="' + this.$target.attr('data-back-delay') + '"]').addClass('active');
            this.$el.find('li[data-loop]').removeClass('active')
                .filter('li[data-loop="' + this.$target.attr('data-loop') + '"]').addClass('active');
            this.$el.find('li[data-show-cursor]').removeClass('active')
                .filter('li[data-show-cursor="' + this.$target.attr('data-show-cursor') + '"]').addClass('active');
            this.$el.find('li[data-cursor-char]').removeClass('active')
                .filter('li[data-cursor-char="' + this.$target.attr('data-cursor-char') + '"]').addClass('active');

            this.$el.find('[data-back-speed]:first').parent().parent()
                .toggle(this.$target.attr('data-fade-out') === 'false');
            this.$el.find('[data-smart-backspace]:first').parent().parent()
                .toggle(this.$target.attr('data-fade-out') === 'false');
            this.$el.find('[data-cursor-char]:first').parent().parent()
                .toggle(this.$target.attr('data-show-cursor') === 'true');
        }
    });
});
