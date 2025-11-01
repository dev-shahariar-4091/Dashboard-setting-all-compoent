import React from "react";
import { Form, Input, Button, Typography, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

const { Text } = Typography;

const ChangePass = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate(); // ✅ initialize navigate

  const onFinish = (values) => {
    console.log("Password Change:", values);
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "80px auto",
        background: "#f9eed9",
        padding: "40px 30px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Current Password"
          name="currentPassword"
          rules={[
            { required: true, message: "Please enter your current password" },
          ]}
        >
          <Input.Password
            placeholder="Enter your password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            { required: true, message: "Please enter your new password" },
          ]}
        >
          <Input.Password
            placeholder="Enter your password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item
          label="Re-enter New Password"
          name="confirmPassword"
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "Please re-enter your new password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Re-enter your password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Space
          direction="vertical"
          style={{ width: "100%", marginBottom: 16 }}
          size={2}
        >
       
          <Text
            type="danger"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/settings/forgot-password")}
          >
            Forgot Password?
          </Text>
        </Space>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              backgroundColor: "#2d2b29",
              borderColor: "#2d2b29",
              height: "40px",
              borderRadius: "8px",
            }}
          >
            Confirm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePass;
