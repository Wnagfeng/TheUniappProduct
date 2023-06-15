<template>
	{{props.itemdata}}
</template>

<script setup>
	const props = defineProps({
		itemdata: {
			type: Object,
			default: () => {
				return {}
			}
		}
	})
</script>

<style>
</style>