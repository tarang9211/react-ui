import theme from '../theme'

const nightOwl = {
  color: '#d6deeb',
  backgroundColor: '#011627',
  '.changed': {
    color: 'rgb(162, 191, 252)',
    fontStyle: 'italic'
  },
  '.deleted': {
    color: 'rgba(239, 83, 80, 0.56)',
    fontStyle: 'italic'
  },
  '.inserted,.attr-name': {
    color: 'rgb(173, 219, 103)',
    fontStyle: 'italic'
  },
  '.comment': {
    color: 'rgb(99, 119, 119)',
    fontStyle: 'italic'
  },
  '.string,.url': {
    color: 'rgb(173, 219, 103)'
  },
  '.variable': {
    color: 'rgb(214, 222, 235)'
  },
  '.number': {
    color: 'rgb(247, 140, 108)'
  },
  '.builtin,.char,.constant,.function': {
    color: 'rgb(130, 170, 255)'
  },
  '.punctuation': {
    color: 'rgb(199, 146, 234)'
  },
  '.selector,.doctype': {
    color: 'rgb(199, 146, 234)',
    fontStyle: 'italic'
  },
  '.class-name': {
    color: 'rgb(255, 203, 139)'
  },
  // '.tag,.operator,.keyword': {
  // removed tag because it was applied to
  // everything, that's not a problem
  // with this theme, it's a bug in how
  // prism is applying classNames
  '.operator,.keyword': {
    color: 'rgb(127, 219, 202)'
  },
  '.boolean': {
    color: 'rgb(255, 88, 116)'
  },
  '.property': {
    color: 'rgb(128, 203, 196)'
  },
  '.namespace': {
    color: 'rgb(178, 204, 214)'
  }
}

export default {
  ...theme,
  styles: {
    pre: {
      ...nightOwl,
      padding: 2,
      borderRadius: 2
    }
  }
}