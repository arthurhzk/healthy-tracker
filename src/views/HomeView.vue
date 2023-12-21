<template>

  <Container>
    <h1 class="text-2xl font-bold md:text-3xl">
      <span class="text-blue-400 font-bold">Uma simples solução</span>
      <br />para o monitoramento de suas<br />
      necessidades.
    </h1>

    <h2 class="text-l font-semibold text-gray-500">
      Nosso sistema arquiva o histórico de sua saúde.
    </h2>

    <div class="space-y-6">
      <h2 class="text-l font-bold text-blue-400 pt-3">
        SERVIÇOS QUE OFERECEMOS
      </h2>
      <h1 class="text-2xl font-bold md:text-3xl">Calcular o IMC é fácil.</h1>

      <h2 class="text-l font-semibold text-gray-500">
        Oferecemos um serviço onde é possível calcular o seu IMC<br />
        e ver todo o seu progresso ao passar do tempo.
      </h2>
    </div>

    <ServicesCard
      v-for="(card, index) in cards"
      :key="index"
      :title="card.title"
      :description="card.description"
      :image="card.image"
    />
    <h2 class="text-l font-bold text-blue-400 pt-3">TÓPICOS DE AJUDA</h2>
    <h1 class="text-2xl font-bold md:text-3xl">Melhore o seu lifestyle!</h1>
    <h1 class="text-l font-bold text-blue-400 pt-3">
      Melhore a sua alimentação através das receitas dos nossos melhores Chefs.
    </h1>

    <div class="flex flex-col items-center gap-4">
      <ReceipeCard
        class="cursor-pointer"
        v-for="(receipe, index) in receipes"
        :key="index"
        :receipe="receipe"
      />
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import TheNav from "@/components/TheNav.vue";
import ServicesCard from "@/components/ServicesCard.vue";
import { useRecipeStore } from "@/stores/recipe";
import cards from "@/data/cards";
import { onMounted } from "vue";
import ReceipeCard from "@/components/ReceipeCard.vue";
const { fetchRecipeApi, receipes } = useRecipeStore();

onMounted(() => {
  fetchRecipeApi();
  console.log(receipes);
});
</script>
