export const BUSINESS = {
  name: 'Blend Align Cafe',
  tagline: 'Where cravings meet their match.',
  shortTagline: 'Coffee, coolers, momos, pasta & more — made for your everyday cravings.',
  address: {
    street: '43, West Madam Street',
    area: 'Theradi, Tiruvottiyur',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600019',
    full: '43, West Madam Street, Theradi, Tiruvottiyur, Chennai, Tamil Nadu 600019',
    short: 'Theradi, Tiruvottiyur • Chennai',
  },
  phone: {
    raw: '07094985603',
    display: '070949 85603',
    tel: 'tel:+917094985603',
    whatsapp: 'https://wa.me/917094985603',
  },
  rating: {
    score: 4.7,
    count: 3,
    platform: 'Google',
  },
  pricing: {
    display: '₹1–200',
    label: 'Approx. per person',
  },
  services: ['Dine-in', 'Takeaway', 'Delivery'],
  social: {
    instagram: 'https://instagram.com/blendaligncafe',
    instagramHandle: '@blendaligncafe',
  },
  maps: {
    directions: 'https://maps.google.com/?q=43+West+Madam+Street+Theradi+Tiruvottiyur+Chennai+Tamil+Nadu+600019',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.6!2d80.3052!3d13.1595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA5JzM0LjIiTiA4MMKwMTgnMTguNyJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin',
  },
  review: {
    quote: 'Great place with amazing momos and cold coffee. Really loved the vibe and the food was super fresh. Will definitely come back!',
    reviewer: 'A Local Visitor',
    rating: 5,
  },
} as const;
