export default  {
    items: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-home',
        badge: {
          variant: 'info',
          text: 'NEW',
        },
      },
      {
        title: true,
        name: 'Other Views',
        wrapper: {            // optional wrapper object
          element: '',        // required valid HTML5 element tag
          attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
        },
        class: ''             // optional class names space delimited list for title item ex: "text-center"
      },
      {
        name: 'Favorites',
        url: '/favorites',
        icon: 'icon-star',
      },
      {
        name: 'Quote to Cash',
        url: '/quotetocash',
        icon: 'icon-diamond',
      },
      {
        name: 'Quote to Pay',
        url: '/quotetopay',
        icon: 'icon-credit-card',
      },
      {
        name: 'Logistics',
        url: '/logistics',
        icon: 'icon-plane',
      },
      {
        name: 'Automotive Planning',
        url: '/automotiveplanning',
        icon: 'icon-speedometer',
      },
      {
        name: 'Product Management',
        url: '/productmanagement',
        icon: 'icon-briefcase',
      },
    ]
}