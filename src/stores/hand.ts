// src/store/hand.ts
import { defineStore } from 'pinia'

export const useHandStore = defineStore('hand', () => {
  const combinations = [
    [
      {
        card: 'AA',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      {
        card: 'AKs',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      {
        card: 'AQs',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      {
        card: 'AJs',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      {
        card: 'ATs',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      { card: 'A9s', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'A8s', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'A7s', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'A6s', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'A5s', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1, utg: 1 } },
      { card: 'A4s', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'A3s', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'A2s', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1 } }
    ],
    [
      {
        card: 'AKo',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      {
        card: 'KK',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      {
        card: 'KQs',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      {
        card: 'KJs',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      { card: 'KTs', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'K9s', open: { bt: 1, sb: 1, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'K8s', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'K7s', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'K6s', open: { bt: 0.5, sb: 0.5 }, '3bet': {} },
      { card: 'K5s', open: { bt: 0.5, sb: 0.5 }, '3bet': {} },
      { card: 'K4s', open: { bt: 0.5, sb: 0.5 }, '3bet': {} },
      { card: 'K3s', open: { bat: 0.5, sb: 0.5 }, '3bet': {} },
      { card: 'K2s', open: { bt: 0.5, sb: 0.5 }, '3bet': {} }
    ],
    [
      {
        card: 'AQo',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      { card: 'KQo', open: { bt: 1, sb: 1, utg: 1, co: 1 }, '3bet': { bt: 1, sb: 1, co: 1 } },
      {
        card: 'QQ',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      {
        card: 'QJs',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      { card: 'QTs', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'Q9s', open: { bt: 1, sb: 1, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'Q8s', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'Q7s', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'Q6s', open: { bt: 0.5, sb: 0.5 }, '3bet': {} },
      { card: 'Q5s', open: { bt: 0.5, sb: 0.5 }, '3bet': {} },
      { card: 'Q4s', open: {}, '3bet': {} },
      { card: 'Q3s', open: {}, '3bet': {} },
      { card: 'Q2s', open: {}, '3bet': {} }
    ],
    [
      { card: 'AJo', open: { bt: 1, sb: 1, utg: 1, co: 1 }, '3bet': { bt: 1, sb: 1, co: 1 } },
      { card: 'KJo', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'QJo', open: { bt: 1, sb: 1, co: 1 }, '3bet': {} },
      {
        card: 'JJ',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      { card: 'JTs', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'J9s', open: { bt: 1, sb: 1, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'J8s', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'J7s', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'J6s', open: { bt: 0.5 }, '3bet': {} },
      { card: 'J5s', open: {}, '3bet': {} },
      { card: 'J4s', open: {}, '3bet': {} },
      { card: 'J3s', open: {}, '3bet': {} },
      { card: 'J2s', open: {}, '3bet': {} }
    ],
    [
      { card: 'ATo', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'KTo', open: { bt: 1, sb: 1, co: 1 }, '3bet': {} },
      { card: 'QTo', open: { bt: 1, sb: 1, co: 1 }, '3bet': {} },
      { card: 'JTo', open: { bt: 1, sb: 1, co: 1 }, '3bet': {} },
      {
        card: 'TT',
        open: { bt: 1, sb: 1, utg: 1, co: 1 },
        '3bet': { bt: 1, sb: 1, utg: 1, co: 1 }
      },
      { card: 'T9s', open: { bt: 1, sb: 1, utg: 0.5, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: 'T8s', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'T7s', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'T6s', open: { bt: 0.5 }, '3bet': {} },
      { card: 'T5s', open: {}, '3bet': {} },
      { card: 'T4s', open: {}, '3bet': {} },
      { card: 'T3s', open: {}, '3bet': {} },
      { card: 'T2s', open: {}, '3bet': {} }
    ],
    [
      { card: 'A9o', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'K9o', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'Q9o', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'J9o', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'T9o', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: '99', open: { bt: 1, sb: 1, utg: 1, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: '98s', open: { bt: 1, sb: 1, utg: 0, co: 0.5 }, '3bet': {} },
      { card: '97s', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: '96s', open: { bt: 0.5 }, '3bet': {} },
      { card: '95s', open: {}, '3bet': {} },
      { card: '94s', open: {}, '3bet': {} },
      { card: '93s', open: {}, '3bet': {} },
      { card: '92s', open: {}, '3bet': {} }
    ],
    [
      { card: 'A8o', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'K8o', open: { bt: 0.5, sb: 0.5 }, '3bet': {} },
      { card: 'Q8o', open: {}, '3bet': {} },
      { card: 'J8o', open: {}, '3bet': {} },
      { card: 'T8o', open: {}, '3bet': {} },
      { card: '98o', open: { sb: 0.5 }, '3bet': {} },
      { card: '88', open: { bt: 1, sb: 1, utg: 1, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: '87s', open: { bt: 1, sb: 1, utg: 0, co: 0.5 }, '3bet': {} },
      { card: '86s', open: { bt: 0.5, sb: 0.5 }, '3bet': {} },
      { card: '85s', open: { bt: 0.5 }, '3bet': {} },
      { card: '84s', open: {}, '3bet': {} },
      { card: '83s', open: {}, '3bet': {} },
      { card: '82s', open: {}, '3bet': {} }
    ],
    [
      { card: 'A7o', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'K7o', open: {}, '3bet': {} },
      { card: 'Q7o', open: {}, '3bet': {} },
      { card: 'J7o', open: {}, '3bet': {} },
      { card: 'T7o', open: {}, '3bet': {} },
      { card: '97o', open: {}, '3bet': {} },
      { card: '87o', open: { sb: 0.5 }, '3bet': {} },
      { card: '77', open: { bt: 1, sb: 1, utg: 1, co: 1 }, '3bet': { bt: 1, sb: 1 } },
      { card: '76s', open: { bt: 1, sb: 1, co: 0.5 }, '3bet': {} },
      { card: '75s', open: { bt: 0.5, sb: 0.5 }, '3bet': {} },
      { card: '74s', open: { bt: 0.5 }, '3bet': {} },
      { card: '73s', open: {}, '3bet': {} },
      { card: '72s', open: {}, '3bet': {} }
    ],
    [
      { card: 'A6o', open: { bt: 0.5, sb: 0.5 }, '3bet': {} },
      { card: 'K6o', open: {}, '3bet': {} },
      { card: 'Q6o', open: {}, '3bet': {} },
      { card: 'J6o', open: {}, '3bet': {} },
      { card: 'T6o', open: {}, '3bet': {} },
      { card: '96o', open: {}, '3bet': {} },
      { card: '86o', open: {}, '3bet': {} },
      { card: '76o', open: {}, '3bet': {} },
      { card: '66', open: { bt: 1, sb: 1, utg: 1, co: 1 }, '3bet': {} },
      { card: '65s', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: '64s', open: { bt: 0.5 }, '3bet': {} },
      { card: '63s', open: {}, '3bet': {} },
      { card: '62s', open: {}, '3bet': {} }
    ],
    [
      { card: 'A5o', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'K5o', open: {}, '3bet': {} },
      { card: 'Q5o', open: {}, '3bet': {} },
      { card: 'J5o', open: {}, '3bet': {} },
      { card: 'T5o', open: {}, '3bet': {} },
      { card: '95o', open: {}, '3bet': {} },
      { card: '85o', open: {}, '3bet': {} },
      { card: '75o', open: {}, '3bet': {} },
      { card: '65o', open: {}, '3bet': {} },
      { card: '55', open: { bt: 1, sb: 1, co: 1 }, '3bet': {} },
      { card: '54s', open: { bt: 1, sb: 0.5 }, '3bet': {} },
      { card: '53s', open: {}, '3bet': {} },
      { card: '52s', open: {}, '3bet': {} }
    ],
    [
      { card: 'A4o', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'K4o', open: {}, '3bet': {} },
      { card: 'Q4o', open: {}, '3bet': {} },
      { card: 'J4o', open: {}, '3bet': {} },
      { card: 'T4o', open: {}, '3bet': {} },
      { card: '94o', open: {}, '3bet': {} },
      { card: '84o', open: {}, '3bet': {} },
      { card: '74o', open: {}, '3bet': {} },
      { card: '64o', open: {}, '3bet': {} },
      { card: '54o', open: {}, '3bet': {} },
      { card: '44', open: { bt: 1, sb: 1, co: 1 }, '3bet': {} },
      { card: '43s', open: { bt: 0.5 }, '3bet': {} },
      { card: '42s', open: {}, '3bet': {} }
    ],
    [
      { card: 'A3o', open: { bt: 1, sb: 1 }, '3bet': {} },
      { card: 'K3o', open: {}, '3bet': {} },
      { card: 'Q3o', open: {}, '3bet': {} },
      { card: 'J3o', open: {}, '3bet': {} },
      { card: 'T3o', open: {}, '3bet': {} },
      { card: '93o', open: {}, '3bet': {} },
      { card: '83o', open: {}, '3bet': {} },
      { card: '73o', open: {}, '3bet': {} },
      { card: '63o', open: {}, '3bet': {} },
      { card: '53o', open: {}, '3bet': {} },
      { card: '43o', open: {}, '3bet': {} },
      { card: '33', open: { bt: 1, sb: 1, co: 1 }, '3bet': {} },
      { card: '32s', open: {}, '3bet': {} }
    ],
    [
      { card: 'A2o', open: { bt: 0.5, sb: 0.5 }, '3bet': {} },
      { card: 'K2o', open: {}, '3bet': {} },
      { card: 'Q2o', open: {}, '3bet': {} },
      { card: 'J2o', open: {}, '3bet': {} },
      { card: 'T2o', open: {}, '3bet': {} },
      { card: '92o', open: {}, '3bet': {} },
      { card: '82o', open: {}, '3bet': {} },
      { card: '72o', open: {}, '3bet': {} },
      { card: '62o', open: {}, '3bet': {} },
      { card: '52o', open: {}, '3bet': {} },
      { card: '42o', open: {}, '3bet': {} },
      { card: '32o', open: {}, '3bet': {} },
      { card: '22', open: { bt: 1, sb: 1, co: 1 }, '3bet': {} }
    ]
  ]

  return { combinations }
})
