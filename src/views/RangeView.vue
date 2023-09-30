<template>
  <v-container>
    <div>
      <div
        style="max-width: 676px"
        v-for="(row, index) in combinations"
        :key="index"
        class="d-flex"
      >
        <div
          v-for="cell in row"
          :key="cell.card"
          class="d-flex cell"
          :class="getCellClass(cell)"
          @click.left="onLeftClick(cell)"
          @click.right.prevent="onRightClick(cell)"
          ref="cells"
        >
          <span>{{ cell.card }}</span>
        </div>
      </div>
      <v-divider class="overwrite-divider"></v-divider>
    </div>
    <div class="d-flex align-center flex-column">
      <v-btn-toggle v-model="selectedMode" borderless>
        <v-btn :value="mode" :key="mode" v-for="mode in modeList">
          <span>{{ mode }}</span>
        </v-btn>
      </v-btn-toggle>
    </div>
    <v-divider class="overwrite-divider"></v-divider>
    <div class="d-flex align-center flex-column">
      <v-btn-toggle v-model="selectedPosition" borderless>
        <v-btn :value="position" :key="position" v-for="position in positionList">
          <span>{{ position }}</span>
        </v-btn>
      </v-btn-toggle>
    </div>
    <v-divider class="overwrite-divider"></v-divider>
    <v-row class="d-flex align-center">
      <v-col>
        <v-switch color="primary" v-model="isEditing" label="Edit"></v-switch>
      </v-col>
      <v-col>
        <v-btn @click="copyToClipboard" icon="mdi-content-copy" size="x-small"></v-btn>
      </v-col>
    </v-row>
    <v-divider class="overwrite-divider"></v-divider>
  </v-container>
</template>

<script lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { useHandStore } from '@/stores/hand'

export default {
  setup() {
    const { combinations } = useHandStore()
    const positionList = ['bt', 'sb', 'utg', 'co']
    const selectedPosition = ref('bt')
    const modeList = ['open', '3bet']
    const selectedMode = ref('open')
    const isEditing = ref(false)
    const cells =  ref<HTMLElement[]>([])
    const selectedCell = ref(null)

    onMounted(() => {
      watchEffect(() => {
        if (cells.value) {
          for (const cell of cells.value ) {
            cell.style.height = `${cell.offsetWidth}px`
          }
        }
      })
    })

    function onLeftClick(cell: any) {
      if (isEditing.value) {
        if (!cell[selectedMode.value][selectedPosition.value]) {
          cell[selectedMode.value][selectedPosition.value] = 0.5
        } else {
          cell[selectedMode.value][selectedPosition.value] = Math.min(
            cell[selectedMode.value][selectedPosition.value] + 0.5,
            1
          )
        }
      } else {
        selectedCell.value = cell
      }
    }

    function onRightClick(cell: any) {
      if (isEditing.value) {
        cell[selectedMode.value][selectedPosition.value] = Math.max(
          cell[selectedMode.value][selectedPosition.value] - 0.5,
          0
        )
      } else {
        selectedCell.value = null
      }
    }

    function getCellClass(cell: any) {
      let classList: {
        'cell-selected': boolean
        'cell-green'?: boolean
        'cell-yellow'?: boolean
        'cell-red'?: boolean
      } = {
        'cell-selected': cell === selectedCell.value
      }
      if (selectedMode.value === 'open') {
        classList['cell-green'] = cell[selectedMode.value][selectedPosition.value] === 1
        classList['cell-yellow'] = cell[selectedMode.value][selectedPosition.value] === 0.5
      } else if (selectedMode.value === '3bet') {
        classList['cell-red'] = cell[selectedMode.value][selectedPosition.value] === 1
        classList['cell-yellow'] = cell[selectedMode.value][selectedPosition.value] === 0.5
      }
      return classList
    }

    async function copyToClipboard() {
      await navigator.clipboard.writeText(JSON.stringify(combinations))
    }

    return {
      combinations,
      positionList,
      selectedPosition,
      modeList,
      selectedMode,
      isEditing,
      cells,
      selectedCell,
      getCellClass,
      onLeftClick,
      onRightClick,
      copyToClipboard
    }
  }
}
</script>

<style scoped>
.cell {
  flex: 1;
  border-radius: 5px;
  background-color: lightgrey;
  font-size: 12px;
  max-width: 50px;
  margin: 2px;
  border: 1px solid lightgrey;
}

.cell span {
  margin: auto;
}

.cell-selected {
  border: 1px solid black;
}

.cell-yellow {
  background-color: yellow;
  color: black;
}
.cell-green {
  background-color: green;
  color: white;
}
.cell-red {
  background-color: red;
  color: white;
}

.overwrite-divider {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
