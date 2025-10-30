import { Alert, Button, Checkbox, Form, Input } from "antd";
import { Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

const EmailVerficiation = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(values.password);

    navigate("/otp-verfication");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <Form
        name="basic"
        //   labelCol={{ span: 8 }}
        //   wrapperCol={{ span: 32 }}
        style={{ maxWidth: 800 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="mb-5">
          <Title level={4}>Email</Title>
          <Text>Enter your email for verification</Text>
        </div>

        <Title level={5}>Email</Title>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Enter you email!" }]}
        >
          <Input placeholder="Enter you email!" />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" className="w-full">
            Get OTP
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default EmailVerficiation;
