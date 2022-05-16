import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainView from "../views/MainView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "",
        name: "main",
        component: MainView,
      },
      {
        path: "teamDiscovery",
        name: "teamDiscovery",
        component: () =>
          import(
            /* webpackChunkName: "teamDiscovery" */ "../views/team/TeamView.vue"
          ),
      },
      {
        path: "myTeams",
        name: "myTeams",
        component: () =>
          import(
            /* webpackChunkName: "myTeams" */ "../views/team/MyTeamView.vue"
          ),
      },
      {
        path: "user",
        name: "user",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../views/user/UserProfileView.vue"
          ),
      },
      {
        path: "problem",
        name: "problem",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../views/problem/ProblemView.vue"
          ),
      },
    ],
  },
  {
    path: "/preview",
    name: "preview",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PreviewView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
