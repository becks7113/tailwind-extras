module.exports = (tailwind) => {

    let sliderStyles = tailwind.generateSliderStyles();

    tailwind.addComponents({

        // All Browsers
        '.slider': {
            '@apply appearance-none w-full mx-0 my-2': '',
        },

        '.slider:focus': {
            '@apply outline-none': '',
        },

        '.slider:disabled, .slider.disabled': {
            '@apply opacity-50 cursor-not-allowed pointer-events-none': '',
        },


        // Webkit
        '.slider::-webkit-slider-runnable-track': {
            '@apply w-full h-2 cursor-pointer rounded-full': '',
            'background-color': sliderStyles.trackBg,
            'border': '1px solid ' + sliderStyles.trackBorder,
        },

        '.slider:hover::-webkit-slider-runnable-track': {
            'background-color': sliderStyles.trackBgHover,
            'border': '1px solid ' + sliderStyles.trackBorderHover,
        },

        '.slider:focus:not(:active)::-webkit-slider-runnable-track': {
            'background-color': sliderStyles.trackBgFocus,
            'border': '1px solid ' + sliderStyles.trackBorderFocus,
        },

        '.slider::-webkit-slider-thumb': {
            '@apply appearance-none w-6 h-6 rounded cursor-pointer -mt-2': '',
            'background-color': sliderStyles.thumbBg,
            'border': '1px solid ' + sliderStyles.thumbBorder,
        },

        '.slider:hover::-webkit-slider-thumb': {
            'background-color': sliderStyles.thumbBgHover,
            'border': '1px solid ' + sliderStyles.thumbBorderHover,
        },

        '.slider:focus:not(:active)::-webkit-slider-thumb': {
            '@apply outline-none shadow-outline': '',
            'background-color': sliderStyles.thumbBgFocus,
            'border': '1px solid ' + sliderStyles.thumbBorderFocus,
        },

        '.slider:active::-webkit-slider-thumb': {
            'background-color': sliderStyles.thumbBgActive,
            'border': '1px solid ' + sliderStyles.thumbBorderActive,
        },


        // Moz
        '.slider::-moz-range-track': {
            '@apply w-full h-2 cursor-pointer rounded-full': '',
            'background-color': sliderStyles.trackBg,
            'border': '1px solid ' + sliderStyles.trackBorder,
        },

        '.slider:hover::-moz-range-track': {
            'background-color': sliderStyles.trackBgHover,
            'border': '1px solid ' + sliderStyles.trackBorderHover,
        },

        '.slider:focus:not(:active)::-moz-range-track': {
            'background-color': sliderStyles.trackBgFocus,
            'border': '1px solid ' + sliderStyles.trackBorderFocus,
        },

        '.slider::-moz-range-thumb': {
            '@apply w-6 h-6 rounded bg-grey-lightest cursor-pointer': '',
            'background-color': sliderStyles.thumbBg,
            'border': '1px solid ' + sliderStyles.thumbBorder,
        },

        '.slider:hover::-moz-range-thumb': {
            'background-color': sliderStyles.thumbBgHover,
            'border': '1px solid ' + sliderStyles.thumbBorderHover,
        },

        '.slider:focus:not(:active)::-moz-range-thumb': {
            '@apply outline-none shadow-outline': '',
            'background-color': sliderStyles.thumbBgFocus,
            'border': '1px solid ' + sliderStyles.thumbBorderFocus,
        },

        '.slider:active::-moz-range-thumb': {
            'background-color': sliderStyles.thumbBgActive,
            'border': '1px solid ' + sliderStyles.thumbBorderActive,
        },

        // MS
        '.slider::-ms-track': {
            '@apply w-full h-2 cursor-pointer bg-transparent rounded-full border-transparent text-transparent': '',
        },

        '.slider::-ms-fill-lower': {
            '@apply rounded-full': '',
            'background-color': sliderStyles.trackBg,
            'border': '1px solid ' + sliderStyles.trackBorder,
        },

        '.slider:hover::-ms-fill-lower': {
            'background-color': sliderStyles.trackBgHover,
            'border': '1px solid ' + sliderStyles.trackBorderHover,
        },

        '.slider:focus:not(:active)::-ms-fill-lower': {
            'background-color': sliderStyles.trackBgFocus,
            'border': '1px solid ' + sliderStyles.trackBorderFocus,
        },

        '.slider::-ms-fill-upper': {
            '@apply rounded-full': '',
            'background-color': sliderStyles.trackBg,
            'border': '1px solid ' + sliderStyles.trackBorder,
        },

        '.slider:hover::-ms-fill-upper': {
            'background-color': sliderStyles.trackBgHover,
            'border': '1px solid ' + sliderStyles.trackBorderHover,
        },

        '.slider:focus:not(:active)::-ms-fill-upper': {
            'background-color': sliderStyles.trackBgFocus,
            'border': '1px solid ' + sliderStyles.trackBorderFocus,
        },

        '.slider::-ms-thumb': {
            '@apply appearance-none w-6 h-6 rounded cursor-pointer -mt-2': '',
            'background-color': sliderStyles.thumbBg,
            'border': '1px solid ' + sliderStyles.thumbBorder,
        },

        '.slider:hover::-ms-thumb': {
            'background-color': sliderStyles.thumbBgHover,
            'border': '1px solid ' + sliderStyles.thumbBorderHover,
        },

        '.slider:focus:not(:active)::-ms-thumb': {
            '@apply outline-none shadow-outline': '',
            'background-color': sliderStyles.thumbBgFocus,
            'border': '1px solid ' + sliderStyles.thumbBorderFocus,
        },

        '.slider:active::-ms-thumb': {
            'background-color': sliderStyles.thumbBgActive,
            'border': '1px solid ' + sliderStyles.thumbBorderActive,
        },
    });

};
