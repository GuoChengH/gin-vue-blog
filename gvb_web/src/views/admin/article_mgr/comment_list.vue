<template>
    <div>
      <a-modal title="发布评论" v-model:open="data.visible" @ok="okHandler">
        <a-form :model="data.state"
                name="basic"
                ref="formRef"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 20 }"
                autocomplete="off"
        >
          <a-form-item label="文章" name="article_id" has-feedback
                       :rules="[{ required: true, message: '请选择文章' ,trigger: 'blur'}]">
            <a-select
                class="gvb_select"
                v-model:value="data.state.article_id"
                style="width: 200px"
                allowClear
                :options="data.articleIDTitleList"
                placeholder="选择文章"
            ></a-select>
          </a-form-item>
          <a-form-item label="评论内容" name="content" has-feedback
                       :rules="[{ required: true, message: '请输入评论内容' ,trigger: 'blur'}]">
            <a-textarea placeholder="评论内容" v-model:value="data.state.content"
                        class="user_ipt" :auto-size="{ minRows: 2, maxRows: 5 }"></a-textarea>
          </a-form-item>
          <a-form-item label="父评论id" name="parent_comment_id" has-feedback>
            <a-input-number placeholder="父评论id" v-model:value="data.state.parent_comment_id"></a-input-number>
          </a-form-item>
        </a-form>
      </a-modal>
      <GVBTable
          :columns="data.columns"
          baseURL="/api/comments_all"
          like-title="搜索评论内容"
          :is-batch-delete="false"
          ref="gvbTable"
          :is-edit="false"
          :is-select="false"
          default-delete
      >
        <template #add>
          <a-button type="primary" @click="showModal">添加</a-button>
        </template>
        <template #edit="{record}">
  
        </template>
        <template #cell="{column, record, index }">
          <template v-if="column.key === 'article_banner'">
            <img :src="record.article_banner" alt="" height="60" style="border-radius: 5px">
          </template>
           <template v-if="column.key === 'parent_comment_id'">
            <a-tag v-if="record.parent_comment_id === null" color="red">
              根评论
            </a-tag>
          </template>
        </template>
        <template #delete="{record}">
          <a-popconfirm
              title="是否确定删除?"
              ok-text="删除"
              cancel-text="取消"
              @confirm="commentRemove(record)"
          >
            <a-button class="gvb_table_action delete" type="danger">删除</a-button>
          </a-popconfirm>
        </template>
      </GVBTable>
    </div>
  </template>
  
  <script setup>
  import {reactive, ref} from "vue";
  import GVBTable from "@/components/admin/gvb_table.vue"
  import {useRouter} from "vue-router";
  import {message} from "ant-design-vue";
  import {getArticleIDTitle} from "@/api/article_api";
import { commentCreateApi } from "@/api/comment_api";
import { commentRemoveApi } from "@/api/comment_api";

  const router = useRouter()
  const gvbTable = ref(null)
  const formRef = ref(null)
  const data = reactive({
    list: [],
    columns: [
      {title: 'id', dataIndex: 'id', key: 'id'},
      {title: '文章标题', dataIndex: 'article_title', key: 'article_title'},
      {title: '文章封面', dataIndex: 'article_banner', key: 'article_banner'},
      {title: '父评论id', dataIndex: 'parent_comment_id', key: 'parent_comment_id'},
      {title: '评论内容', dataIndex: 'content', key: 'content'},
      {title: '点赞数', dataIndex: 'digg_count', key: 'digg_count'},
      {title: '评论数', dataIndex: 'comment_count', key: 'comment_count'},
      {title: '评论人昵称', dataIndex: 'user_nick_name', key: 'user_nick_name'},
      {title: '评论时间', dataIndex: 'created_at', key: 'created_at'},
      {title: '操作', dataIndex: 'action', key: 'action'},
    ],
    visible: false,
    state: {
      article_id: null,
      content: "",
      parent_comment_id: null
    },
    articleIDTitleList: []
  })
  
  async function commentRemove(record) {
    
    let res = await commentRemoveApi(record.id)
    if (res.code) {
      message.error(res.msg)
      return
    }
    message.success(res.msg)
    gvbTable.value.ExportList()
    return
  }
  
  function showModal() {
    getData()
    data.visible = true
  }
  
  async function getData() {
    let t1 = await getArticleIDTitle()
    data.articleIDTitleList = t1.data
  }
  
  async function okHandler() {
    try {
      await formRef.value.validate()
    } catch (e) {
      return
    }
    
    let res = await commentCreateApi(data.state)
    if (res.code) {
      message.error(res.msg)
      return
    }
    message.success(res.msg)
    data.state.content = ""
    data.visible = false
    gvbTable.value.ExportList()
  }
  </script>
  
  <style lang="scss">
  .gvb_article_data {
    span {
      margin-right: 7px;
  
      i {
        margin-right: 3px;
      }
  
      &:last-child {
        margin-right: 0;
      }
    }
  }
  
  .gvb_article_abstract {
    max-width: 12rem;
    overflow-x: hidden;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  .gvb_article_tags {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-items: self-start;
  }
  
  .gvb_article_title {
    em {
      color: red;
      margin-right: 1px;
    }
  }
  </style>
  