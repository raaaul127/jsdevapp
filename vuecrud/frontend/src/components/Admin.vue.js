import UserService from "../services/UserService";
export default (await import('vue')).defineComponent({
    name: "users-list",
    data() {
        return {
            users: [],
            currentUser: null,
            currentIndex: -1,
            nameUser: "",
        };
    },
    methods: {
        retrieveUsers() {
            UserService.getAll()
                .then((response) => {
                this.users = response.data["data"];
                console.log(response.data["data"]);
            })
                .catch((e) => {
                console.log(e);
            });
        },
        deleteUser() {
            UserService.delete(this.currentUser.id)
                .then((response) => {
                console.log(response.data);
                this.$router.push({ name: "users" });
            })
                .catch((e) => {
                console.log(e);
            });
        },
        statusUser() {
            UserService.status(this.currentUser.id, this.currentUser.status)
                .then((response) => {
                console.log(response.data);
                this.$router.push({ name: "users" });
            })
                .catch((e) => {
                console.log(e);
            });
        },
        refreshList() {
            this.retrieveUsers();
            this.currentUser = null;
            this.currentIndex = -1;
        },
        setActiveUser(user, index) {
            this.currentUser = user;
            this.currentIndex = user ? index : -1;
        },
        removeAllUsers() {
            UserService.deleteAll()
                .then((response) => {
                console.log(response.data);
                this.refreshList();
            })
                .catch((e) => {
                console.log(e);
            });
        },
        searchName() {
            UserService.findByName(this.nameUser)
                .then((response) => {
                this.users = response.data;
                this.setActiveUser(null);
                console.log(response.data);
            })
                .catch((e) => {
                console.log(e);
            });
        },
    },
    mounted() {
        this.retrieveUsers();
    },
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "list row" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-md-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "input-group mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "text",
    ...{ class: "form-control" },
    placeholder: "Search by name",
    value: (__VLS_ctx.nameUser),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "input-group-append" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.searchName) },
    ...{ class: "btn btn-outline-secondary" },
    type: "button",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-md-6" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "list-group" },
});
for (const [user, index] of __VLS_getVForSourceType((__VLS_ctx.users))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.setActiveUser(user, index);
            } },
        ...{ class: "list-group-item" },
        ...{ class: ({ active: index == __VLS_ctx.currentIndex }) },
        key: (index),
    });
    (user.nume);
    (user.prenume);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-md-6" },
});
if (__VLS_ctx.currentUser) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.currentUser.nume);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.currentUser.prenume);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.currentUser.email);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    if (__VLS_ctx.currentUser.cnp) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    }
    (__VLS_ctx.currentUser.cnp);
    const __VLS_0 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: ('/edituser/' + __VLS_ctx.currentUser.id),
        ...{ class: "btn btn-outline-primary me-2 mt-2" },
    }));
    const __VLS_2 = __VLS_1({
        to: ('/edituser/' + __VLS_ctx.currentUser.id),
        ...{ class: "btn btn-outline-primary me-2 mt-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_3.slots.default;
    var __VLS_3;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.deleteUser) },
        ...{ class: "btn btn-danger me-2 mt-2" },
    });
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
}
/** @type {__VLS_StyleScopedClasses['list']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-8']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group-append']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
/** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-outline-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-danger']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
var __VLS_dollars;
let __VLS_self;
