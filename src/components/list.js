module.exports = (tailwind) => {

    let listStyles = tailwind.generateListStyles();

    tailwind.addComponents({
        '.list': {
            '@apply list-reset block': '',

            '& li': {
                '@apply flex items-center justify-start relative px-3 py-2 border-b border-l border-r no-underline': '',
                'background-color': listStyles.bg,
                'border-color': listStyles.border,

                '&:first-child': {
                    '@apply border-t rounded-t': '',
                },

                '&:last-child': {
                    '@apply rounded-b': '',
                },

                '&:disabled, &.disabled': {
                    '@apply opacity-50 cursor-not-allowed pointer-events-none': '',
                },
            },

            '&.hoverable li:hover': {
                'background-color': listStyles.bgHover,
                'border-color': listStyles.borderHover,
            },

            '& li .icon': {
                '@apply block w-4 h-4 mr-2 pointer-events-none': '',
            },
        },
    });

};
