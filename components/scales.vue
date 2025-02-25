<template>
    <div class="zone-scales">
        <div class="scales">
            <div
                class="scale"
                v-for="scale in displayedScalesSorted"
                v-bind:key="scale.id"
                @click.stop="selectScale(scale)"
                v-bind:class="{
                    highlight: scale.id === selectedScale.id,
                }"
            >
                {{ scale.tonic }} {{ scale.name }}
            </div>
            <div v-if="!displayedScales.length">Nothing…</div>
        </div>
        <div class="actions">
            <Arpegiator v-if="selectedScale.noteNames" :arpegiatedNotes="notesMatchingScale" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Arpegiator from '@/components/arpegiator.vue'
import { HandpanUser } from '@/domain/handpan'
import { sortHandpanNotes, uniqueHandpanNotesAsString } from '@/music'
export default Vue.extend({
    props: {
        displayedScales: Array,
        handpansUser: Array,
    },
    components: {
        Arpegiator,
    },
    computed: {
        selectedScale: {
            get(): any {
                return this.$store.state.selection.selectedScale
            },
            set(scale: any) {
                this.$store.commit('selection/setSelectedScale', scale)
            },
        },
        displayedScalesSorted(): any[] {
            return this.displayedScales.sort((a: any, b: any) => b.totalNotes - a.totalNotes)
        },
        notesMatchingScale(): string[] {
            const notesInScale = (this.handpansUser as HandpanUser[]).flatMap((handpan) =>
                handpan.handpanModel.notes.filter((note) => this.selectedScale.noteNames.indexOf(note.noteName) !== -1),
            )
            const notesSorted = sortHandpanNotes(notesInScale)
            const indexOfTonic = notesSorted.findIndex((note) => note.noteName === this.selectedScale.tonic)
            return uniqueHandpanNotesAsString(notesSorted.splice(indexOfTonic))
        },
    },
    beforeDestroy() {
        this.$store.commit('player/setRecordPlaying', null)
        this.unselectScale()
    },
    methods: {
        selectScale(scale: any) {
            if (scale.id === this.selectedScale.id) {
                this.unselectScale()
            } else {
                this.selectedScale = scale
            }
        },
        unselectScale(): void {
            this.$store.commit('player/setRecordPlaying', null)
            this.selectedScale = {}
        },
    },
})
</script>

<style scoped>
.zone-scales {
    padding: 8px;
}
</style>
