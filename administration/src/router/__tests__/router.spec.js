import VueRouter from 'vue-router';
import router from '../index';

describe('router', () => {
  it('router is instance of VueRouter', () => {
    expect(router).toBeInstanceOf(VueRouter);
  });

  it('navigate to "/test" and change title', () => {
    router.addRoutes([{
      path: '/test',
      name: 'test',
      meta: {
        title: 'Test',
        requiresAuth: false
      }
    }]);
    router.push('/test');
    expect(router.currentRoute.path).toBe('/test');
    expect(document.title).toContain('Test');
  });

  it('navigate to "/protected" but redirect to "/login"', () => {
    router.addRoutes([{
      path: '/protected',
      name: 'protected',
      meta: {
        title: 'Protected',
        requiresAuth: true
      }
    }]);
    // Error must be caught, known issue => https://github.com/vuejs/vue-router/issues/2881
    router.push('/protected').catch(error => error);
    expect(router.currentRoute.path).toBe('/login');
    expect(document.title).toContain('Login');
  });

  it('navigate to page without a dynamic title', () => {
    router.addRoutes([{
      path: '/notitle',
      name: 'notitle'
    }]);
    router.push('/notitle');
    expect(router.currentRoute.path).toBe('/notitle');
    expect(document.title).toBe(process.env.VUE_APP_TITLE);
  });
});
