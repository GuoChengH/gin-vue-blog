<template>
    <div>
        <GVBArticleModal v-model:visible="visible" @ok="okHandler"></GVBArticleModal>
        <md-editor v-model="data.content" @onUploadImg="onUploadImg" @on-save="onSave" />
    </div>

</template>

<script setup>
import { onUnmounted, reactive, ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { uploadImageApi } from '@/api/image_api';
import { createArticleApi } from '@/api/article_api';

import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/stores/store';
import GVBArticleModal from '@/components/admin/gvb_article_model.vue'
const store = useStore();
const router = useRouter();

const visible = ref(false);
const onUploadImg = async (files, callback) => {
    const res = await Promise.all(
        files.map((file) => {
            return uploadImageApi(file);
        })
    );

    // 处理返回结果，提取文件路径并保证路径以 / 开头
    const fileUrls = res.map((item) => {
        const data = item.data;
        if (Array.isArray(data) && data.length > 0) {
            let url = data[0].file_name; // 假设每次只上传一个文件
            // 确保路径以 '/' 开头
            if (!url) {
                return ''; // 返回空字符串以过滤掉错误路径
            }
            const finalUrl = url.startsWith('/') ? url : '/' + url;
            return finalUrl;
        }
        return '';
    }).filter(url => url !== ''); // 过滤掉空字符串

    // 打印处理后的文件路径
    console.log("Final file URLs:", fileUrls);

    // 执行回调函数，传递处理后的文件路径
    callback(fileUrls);
};
const _data = reactive({
    content: "",
    title: "",
    abstract: "",
    banner_id: 0,
    category: "",
    tags: [],
    link: "",
    source: "",
})
const data = reactive({
    content: "",
    title: "",
    abstract: "",
    banner_id: 0,
    category: "",
    tags: [],
    link: "",
    source: "",
})


function ctrlSave(e) {
    if (e.ctrlKey && e.key === 's') {
        showDrawer();
        e.preventDefault();
        // onSave(data.value, '');
    }
}
function showDrawer() {
    visible.value = true
}
window.addEventListener('keydown', ctrlSave);
onUnmounted(() => {
    window.removeEventListener('keydown', ctrlSave);
});
// ctrl + s 保存 md是md原文，h是转换后的
const onSave = (md, h) => {
    showDrawer();
}


async function okHandler(state) {
    Object.assign(data, state)
    console.log(data)
    console.log(state)

    let res = await createArticleApi(data)
    if (res.code) {
        message.error(res.msg)
        return
    }
    message.success(res.msg)

    visible.value = false
    Object.assign(data, _data)
    // 先切换到文章列表
    router.push({
        name: "article_list"
    })
    // 删除添加文章的tab
    store.removeTab({ name: "add_article" })
    return
}

</script>