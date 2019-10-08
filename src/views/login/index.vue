<template>
    <!-- 登录页面 -->
    <div class="login">
        <div class="login-warp">
            <!-- logo 区域 -->
            <div class="loginlogo">
                <img src="./logo_index.png" alt="">
            </div>
            <!-- el-form: 管理所有表单元素的父容器  ref: vue 中提供的操作 dom 的方式 model: 表单元素的数据源 label-width： 描述文本的宽度 -->
            <el-form ref="form" :model="form">
                <!-- el-form-item：表单域 label: 当前选项的描述文字 -->
                <el-form-item>
                    <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <!-- 一行 -->
                    <el-row>
                        <el-col :span="14">
                            <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button>获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button class="loginbtn" type="primary">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    .login-warp {
        background-color: #fff;
        padding: 30px;
        min-width: 300px;
        .loginlogo {
            text-align: center;
            img {
                width: 150px;
                margin-bottom: 20px;
            }
        }
        .loginbtn {
            width: 100%;
        }
    }
}
</style>
