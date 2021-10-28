import { Breakpoint } from '~/types'

const lgGrid = [
  // {
  //   i: 'market-panel',
  //   x: 0,
  //   y: 0,
  //   w: 9,
  //   h: 1,
  //   minW: 9,
  //   maxH: 1,
  //   isDraggable: true,
  //   isResizable: true
  // },
  {
    i: 'market-panel',
    x: 0,
    y: 0,
    w: 12,
    h: 1,
    minW: 0,
    maxH: 1,
    isDraggable: true,
    isResizable: true
  },
  // {
  //   i: 'marquee-panel',
  //   x: 9,
  //   y: 0,
  //   w: 3,
  //   h: 1,
  //   minW: 2,
  //   maxH: 1,
  //   isDraggable: true,
  //   isResizable: true
  // },
  // {
  //   i: 'balance-panel',
  //   x: 0,
  //   y: 1,
  //   w: 3,
  //   h: 2,
  //   minW: 3,
  //   minH: 2
  // },
  {
    i: 'balance-panel',
    x: 9,
    y: 1,
    w: 3,
    h: 1.8,
    minW: 3,
    minH: 2,
    isDraggable: true,
    isResizable: true
  },
  // {
  //   i: 'market-price-chart-panel',
  //   x: 3,
  //   y: 1,
  //   w: 6,
  //   h: 9,
  //   minW: 4,
  //   minH: 9,
  //   isDraggable: true,
  //   isResizable: true
  // },
  {
    i: 'market-price-chart-panel',
    x: 3,
    y: 1,
    w: 6,
    h: 7,
    minW: 4,
    minH: 7,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'order-book-panel',
    x: 0,
    y: 10,
    w: 3,
    h: 7,
    minW: 3,
    minH: 6,
    isDraggable: true,
    isResizable: true, 
  },

  {
    i: 'trades-panel',
    x: 0,
    y: 11,
    w: 3,
    h:7.4,
    minW: 3,
    minH: 8,
    isDraggable: true,
    isResizable: true
  },
  // {
  //   i: 'order-book-panel',
  //   x: 0,
  //   y: 11,
  //   w: 5,
  //   h: 6,
  //   minW: 5,
  //   minH: 6,
  //   isDraggable: true,
  //   isResizable: true
  // },
  // {
  //   i: 'subaccount-balance-panel',
  //   x: 0,
  //   y: 3,
  //   w: 3,
  //   h: 2,
  //   minW: 3,
  //   minH: 2,
  //   isDraggable: true,
  //   isResizable: true
  // },
  {
    i: 'subaccount-balance-panel',
    x: 9,
    y: 3,
    w: 3,
    h: 1.9,
    minW: 3,
    minH: 3,
    isDraggable: true,
    isResizable: true
  },
  // {
  //   i: 'trading-panel',
  //   x: 0,
  //   y: 5,
  //   w: 3,
  //   h: 12,
  //   minW: 3,
  //   minH: 10,
  //   isDraggable: true,
  //   isResizable: true
  // },
  {
    i: 'trading-panel',
    x: 9,
    y: 6,
    w: 3,
    h: 10.7,
    minW: 3,
    minH: 12,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'positions-panel',
    x: 3,
    y: 10,
    w: 6,
    h: 2.4,
    minW: 6,
    minH: 1,
    isDraggable: true,
    isResizable: true
  },
  // {
  //   i: 'orders-panel',
  //   x: 3,
  //   y: 10,
  //   w: 6,
  //   h: 5,
  //   minW: 6,
  //   minH: 5,
  //   isDraggable: true,
  //   isResizable: true
  // }
  {
    i: 'orders-panel',
    x: 3,
    y: 10,
    w: 6,
    h: 5,
    minW: 6,
    minH: 5,
    isDraggable: true,
    isResizable: true
  },
  // {
  //   i: 'trades-panel',
  //   x: 5,
  //   y: 11,
  //   w: 3,
  //   h: 6,
  //   minW: 5,
  //   minH: 6,
  //   isDraggable: true,
  //   isResizable: true
  // }
  
]

const mdGrid = [
  {
    i: 'market-panel',
    x: 0,
    y: 0,
    w: 10,
    h: 1,
    minW: 10,
    maxH: 1,
    isDraggable: true,
    isResizable: true
  },
  // {
  //   i: 'marquee-panel',
  //   x: 0,
  //   y: 1,
  //   w: 10,
  //   h: 1,
  //   minW: 10,
  //   maxH: 1,
  //   isDraggable: true,
  //   isResizable: true
  // },
  {
    i: 'balance-panel',
    x: 0,
    y: 2,
    w: 5,
    h: 2,
    minW: 5,
    minH: 2,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'subaccount-balance-panel',
    x: 5,
    y: 2,
    w: 5,
    h: 2,
    minW: 5,
    minH: 2,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'market-price-chart-panel',
    x: 0,
    y: 4,
    w: 10,
    h: 6,
    minW: 10,
    minH: 6,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'order-book-panel',
    x: 0,
    y: 10,
    w: 5,
    h: 6,
    minW: 5,
    minH: 6,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'trades-panel',
    x: 5,
    y: 10,
    w: 5,
    h:3,
    minW: 5,
    minH: 3,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'positions-panel',
    x: 0,
    y: 16,
    w: 10,
    h: 2,
    minW: 10,
    minH: 2,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'trading-panel',
    x: 0,
    y: 18,
    w: 10,
    h: 9,
    minW: 5,
    minH: 9,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'orders-panel',
    x: 0,
    y: 18,
    w: 10,
    h: 5,
    minW: 5,
    minH: 5,
    isDraggable: true,
    isResizable: true
  }
]

const smGrid = [
  {
    i: 'market-panel',
    x: 0,
    y: 0,
    w: 6,
    h: 1,
    minW: 6,
    maxH: 1,
    isDraggable: true,
    isResizable: true
  },
  // {
  //   i: 'marquee-panel',
  //   x: 0,
  //   y: 1,
  //   w: 6,
  //   h: 1,
  //   minW: 6,
  //   maxH: 1,
  //   isDraggable: true,
  //   isResizable: true
  // },
  {
    i: 'balance-panel',
    x: 0,
    y: 2,
    w: 3,
    h: 2,
    minW: 3,
    minH: 2,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'subaccount-balance-panel',
    x: 3,
    y: 2,
    w: 3,
    h: 2,
    minW: 3,
    minH: 2,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'market-price-chart-panel',
    x: 0,
    y: 4,
    w: 6,
    h: 6,
    minW: 6,
    minH: 6,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'order-book-panel',
    x: 0,
    y: 10,
    w: 3,
    h: 6,
    minW: 3,
    minH: 6,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'trades-panel',
    x: 3,
    y: 10,
    w: 3,
    h: 6,
    minW: 3,
    minH: 6,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'positions-panel',
    x: 0,
    y: 16,
    w: 6,
    h: 2,
    minW: 6,
    minH: 2,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'trading-panel',
    x: 0,
    y: 18,
    w: 6,
    h: 10,
    minW: 6,
    minH: 10,
    isDraggable: true,
    isResizable: true
  },
  {
    i: 'orders-panel',
    x: 0,
    y: 27,
    w: 6,
    h: 5,
    minW: 6,
    minH: 5,
    isDraggable: true,
    isResizable: true
  }
]

const xsGrid = [
  {
    i: 'market-panel',
    x: 0,
    y: 0,
    w: 4,
    h: 2,
    minW: 4,
    maxH: 2,
    isDraggable: false,
    isResizable: false
  },
  // {
  //   i: 'marquee-panel',
  //   x: 0,
  //   y: 2,
  //   w: 4,
  //   h: 1,
  //   minW: 4,
  //   maxH: 1,
  //   isDraggable: false,
  //   isResizable: false
  // },
  {
    i: 'balance-panel',
    x: 0,
    y: 3,
    w: 4,
    h: 2,
    minW: 4,
    minH: 2,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'subaccount-balance-panel',
    x: 0,
    y: 5,
    w: 4,
    h: 2,
    minW: 4,
    minH: 2,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'market-price-chart-panel',
    x: 0,
    y: 7,
    w: 4,
    h: 6,
    minW: 4,
    minH: 6,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'order-book-panel',
    x: 0,
    y: 13,
    w: 4,
    h: 6,
    minW: 4,
    minH: 6,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'trades-panel',
    x: 0,
    y: 19,
    w: 4,
    h: 6,
    minW: 4,
    minH: 6,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'positions-panel',
    x: 0,
    y: 25,
    w: 4,
    h: 2,
    minW: 4,
    minH: 2,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'trading-panel',
    x: 0,
    y: 27,
    w: 4,
    h: 10,
    minW: 4,
    minH: 10,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'orders-panel',
    x: 0,
    y: 37,
    w: 4,
    h: 5,
    minW: 4,
    minH: 5,
    isDraggable: false,
    isResizable: false
  }
]

const xxsGrid = [
  {
    i: 'market-panel',
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    minW: 2,
    maxH: 2,
    isDraggable: false,
    isResizable: false
  },
  // {
  //   i: 'marquee-panel',
  //   x: 0,
  //   y: 2,
  //   w: 2,
  //   h: 1,
  //   minW: 2,
  //   maxH: 1,
  //   isDraggable: false,
  //   isResizable: false
  // },
  {
    i: 'balance-panel',
    x: 0,
    y: 3,
    w: 2,
    h: 1.9,
    minW: 2,
    minH: 2,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'subaccount-balance-panel',
    x: 0,
    y: 5,
    w: 2,
    h: 1.9,
    minW: 2,
    minH: 2,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'market-price-chart-panel',
    x: 0,
    y: 7,
    w: 2,
    h: 6,
    minW: 2,
    minH: 6,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'order-book-panel',
    x: 0,
    y: 13,
    w: 2,
    h: 6,
    minW: 2,
    minH: 6,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'trades-panel',
    x: 0,
    y: 19,
    w: 2,
    h: 6,
    minW: 2,
    minH: 6,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'positions-panel',
    x: 0,
    y: 25,
    w: 2,
    h: 2,
    minW: 2,
    minH: 2,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'trading-panel',
    x: 0,
    y: 27,
    w: 2,
    h: 10,
    minW: 2,
    minH: 10,
    isDraggable: false,
    isResizable: false
  },
  {
    i: 'orders-panel',
    x: 0,
    y: 37,
    w: 2,
    h: 5,
    minW: 2,
    minH: 5,
    isDraggable: false,
    isResizable: false
  }
]

const layouts = {
  [Breakpoint.Lg]: lgGrid,
  [Breakpoint.Md]: mdGrid,
  [Breakpoint.Sm]: smGrid,
  [Breakpoint.Xs]: xsGrid,
  [Breakpoint.Xxs]: xxsGrid
}

export const gridLayouts = (breakpoint: Breakpoint = Breakpoint.Lg) =>
  layouts[breakpoint]
