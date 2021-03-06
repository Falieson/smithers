const tabBorderSize = 2

export default ({theme, color, rgba, px}) => ({
  tab: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: color(theme.primaryColor, 700)
  },
  tabActive: {
    borderBottom: `${px(tabBorderSize)} solid white`
  },
  a: {
    display: 'block',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: '14px',
    color: rgba('#fff', 0.7),
    height: (theme.tabHeight - tabBorderSize),
    lineHeight: px(theme.tabHeight - tabBorderSize),
    paddingLeft: (theme.tabHeight / 2),
    paddingRight: (theme.tabHeight / 2),
    cursor: 'default'
  },
  aActive: {
    color: 'white'
  }
})
