import ColorSwatch from './ColorSwatch'
export default {
  example: {
    props: {
      variant: ['primary', 'secondary']
    },
    component: ({ variant }) => h => (
      <ColorSwatch variant={variant} />
    )
  }
}
