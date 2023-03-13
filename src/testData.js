const products = [
  {
    id: 1,
    imgUrl:
      'https://store.uniqbe.com/images/product/c2ef2bf8-f690-4525-8d71-1b3601087c6a.png',
    name: 'iPhone 13 Pro',
    sku: '897YHN90OX',
    description:
      'Hollywood-worthy video shooting made easy. A lightning-fast chip. And a big boost in battery life you’ll notice every day.',
    price: '999',
    quantity: '9',
    status: { value: 'On order', label: 'On order', labelColor: '#E6F29B' },
  },
  {
    id: 2,
    imgUrl:
      'https://www.wirelessearbuds.best/wp-content/uploads/2020/02/710rzW2RGcL._SL1500_-2.jpg',
    name: 'Air Pods Pro 2 ',
    sku: '845765P53Q',
    description:
      'Enjoy a rich audio experience. Features include next-level Active Noise Cancellation, Adaptive Transparency and Spatial Audio',
    price: 249,
    quantity: 120,
    status: { value: 'In stock', label: 'In stock', labelColor: '#E6F29B' },
  },
  {
    id: 3,
    imgUrl:
      'https://cdn.hughes.co.uk/live/media/image/69/1a/6e/son-dualsense-rdc.jpg',
    name: 'Sony Playstation 5 DualSense Wireless Controller',
    sku: '30006392',
    description:
      'Discover a deeper, highly immersive gaming experience1 that brings the action to life in the palms of your hands. The DualSense™ wireless controller offers immersive haptic feedback2, dynamic adaptive triggers2 and a built-in microphone, all integrated into an iconic comfortable design.',
    price: 69.99,
    quantity: 10,
    status: {
      value: 'Out of stock',
      label: 'Out of stock',
      labelColor: '#E6F29B',
    },
  },
]

export { products }
