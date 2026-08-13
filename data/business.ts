export const BUSINESS = {
  name: 'Your Cafe Name',
  tagline: 'Where cravings meet their match.',
  shortTagline: 'Coffee, drinks, snacks & more — made for your everyday cravings.',
  address: {
    street: '123, Your Street Name',
    area: 'Your Area',
    city: 'Your City',
    state: 'Your State',
    pincode: '000000',
    full: '123, Your Street Name, Your Area, Your City, Your State - 000000',
    short: 'Your Area • Your City',
  },
  phone: {
    raw: '0000000000',
    display: '00000 00000',
    tel: 'tel:+910000000000',
    whatsapp: 'https://wa.me/910000000000',
  },
  rating: {
    score: 4.8,
    count: 120,
    platform: 'Google',
  },
  pricing: {
    display: '₹100–300',
    label: 'Approx. per person',
  },
  services: ['Dine-in', 'Takeaway', 'Delivery'],
  social: {
    instagram: 'https://instagram.com/yourcafe',
    instagramHandle: '@yourcafe',
  },
  maps: {
    directions: 'https://maps.google.com',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152648011933!2d-73.98822368459372!3d40.74844047932822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus',
  },
  review: {
    quote: 'This is a placeholder review. Customers love our food, coffee and ambiance! Replace this with a real review from your Google page.',
    reviewer: 'Happy Customer',
    rating: 5,
  },
} as const;
