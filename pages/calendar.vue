<script setup lang="ts">
import type { GetCalendarResponse } from '~/types/response/GetCalendarResponse';

const { data } = await useFetch<GetCalendarResponse>('/api/calendar')

function handleCalendarDayClick(e: { date: string }) {
  console.log(e)
}

</script>

<template>
  <div class="mx-auto max-w-7xl p-4">

    <ul class="flex flex-col gap-4">
      <li v-for="year in data?.years" :key="year.value" class="px-4 py-4 border border-neutral-300 rounded-lg">
        <h1 class="mb-4 text-2xl font-semibold">{{ year.value }}</h1>
        
        <!-- Year view -->
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          <li v-for="month in year.months" :key="month.title">
            <h2 class="mb-4 text-lg font-medium">{{ month.title }}</h2>
            
            <!-- Month view -->
            <ul class="grid grid-cols-7 gap-2">
              <li v-for="day in month.days" :key="day.date">

                <CalendarDay
                  :text="String(day.number)"
                  :date="day.date"
                  @on-click="handleCalendarDayClick"
                />

              </li>
            </ul>

          </li>
        </ul>

      </li>
    </ul>

  </div>
</template>