import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='keyword'
        content={keywords}
      />
    </Helmet>
  )
}


Meta.defaultProps = {
  title: 'Welcome to ProShop',
  keywords: 'electronics, buy electronics, buy cheap electronics',
  description: 'We sell the best products for cheap'
}

export default Meta
