import { Image, Space, version } from "antd";

function App() {
  return (
    <>
      <h1>antd version: {version}</h1>
      <Space size={"large"}>
        <div>
          <p>单独image可以自定义渲染preview</p>
          <Image
            width={200}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            preview={{
              imageRender(originalNode) {
                return (
                  <div
                    style={{
                      border: "1px solid red",
                    }}
                  >
                    {originalNode}
                  </div>
                );
              },
            }}
          />
        </div>
        <Image.PreviewGroup>
          <p>PreviewGroup中image自定义渲染preview失效</p>
          <Image
            width={200}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            preview={{
              imageRender(originalNode) {
                return (
                  <div
                    style={{
                      border: "1px solid red",
                    }}
                  >
                    {originalNode}
                  </div>
                );
              },
            }}
          />
        </Image.PreviewGroup>
        <Image.PreviewGroup
          preview={{
            imageRender(originalNode) {
              return (
                <div
                  style={{
                    border: "1px solid blue",
                  }}
                >
                  {originalNode}
                </div>
              );
            },
          }}
        >
          <p>PreviewGroup中定义的preview才生效</p>
          <Image
            width={200}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            preview={{
              imageRender(originalNode) {
                return (
                  <div
                    style={{
                      border: "1px solid red",
                    }}
                  >
                    {originalNode}
                  </div>
                );
              },
            }}
          />
        </Image.PreviewGroup>
      </Space>
    </>
  );
}

export default App;
