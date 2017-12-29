import ActionButton from './ActionButton'
export default {
  example: {
    props: {
      variant: ['primary', 'secondary', 'cta'],
      href: '#',
      children: 'Lorem ipsum dolor sit amet.'
    },
    component: ({ variant, href, children }) => h => (
      <ActionButton variant={variant} href={href}>
        {children}
      </ActionButton>
    )
  }
}
