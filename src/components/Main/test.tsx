import { render, screen } from '@testing-library/react'

import Main from '.'
import colors from '../../styles/colors'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /TypeScript, ReactJS, NextJS, e Styled Components/i
      })
    ).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': `${colors.background_color_01}`,
      color: `${colors.primary_color_01}`
    })
  })
})
