export let config = {
  apiUrl: 'https://gradescenter.net',
    tokenName: 'token',
    user: {
        register: '/auth/register',
        login: '/auth/login',
        is_login: '/auth/is-logged-in',
        social_login: '/auth/social-login',
        forgot_password:'/auth/forgot-password'
    },
    books: '/books',
    data: {
        fetch_order_options: '/data-service/fetch-option-lines',
        make_order: '/data-service/make-order',
        pay_order: '/data-service/pay-order',
        fetch_orders_list: '/data-service/fetch-orders-list',
        fetch_orders_item: '/data-service/fetch-order-item',
        order_file_upload: "/data-service/order-file-upload",
        revision_reqeust: "/data-service/revision-request",
        request_qoute: "/data-service/request-qoute"
    },
    message: {
        retrieve_message_details: '/message-service/retrieve-message-details',
        retrieve_instant_chat_details:'/message-service/retrieve-instant-chat-details',
        sent_message: '/message-service/sent-message',
        retrieve_message: "/message-service/retrieve-message",
        sent_chat: "/message-service/send-chat",
        send_instant_chats: "/message-service/send-instant-chats",
        create_instant_chat:"/message-service/create-instant-chat" 
    },
    notify: {
        save_device_token: '/notification-service/save-device-token',
        save_device_token_fcm: '/notification-service/save-device-token-fcm',
    },
};