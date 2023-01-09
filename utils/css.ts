export const tabsDesignAuth = computed(() => {
  return useCss({
    '.nav-tabs': {
      'borderBottom': '1px solid #D7DEDF',
      'marginBottom': '24px',
      '.nav-item': {
        width: '50%',
      },
      '.nav-link': {
        'fontSize': '24px',
        'lineHeight': 1.2,
        'width': '100%',
        'color': '#8EA0A4',
        'borderTopLeftRadius': 0,
        'borderTopRightRadius': 0,
        'border': 0,
        'borderBottom': '1px solid transparent',
        '&.active': {
          color: 'var(--bs-primary)',
          borderBottom: '4px solid transparent',
          borderBottomColor: 'var(--bs-primary)',
        },
      },
    },
  })
})
