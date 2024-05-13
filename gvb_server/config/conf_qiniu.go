package config

type QiNiu struct {
	Enable    bool    `json:"enable" yaml:"enable"` //是否启用qiniu存储
	AccessKey string  `json:"access_key" yaml:"access_key"`
	SecretKey string  `json:"secret_key" yaml:"secret_key"`
	Bucket    string  `json:"bucket" yaml:"bucket"` //访问桶的名字
	CDN       string  `json:"cdn" yaml:"cdn"`       //访问图片的地址前缀-图床
	Zone      string  `json:"zone" yaml:"zone"`     //存储的地区
	Prefix    string  `json:"prefix" yaml:"prefix"` //前缀
	Size      float64 `json:"size" yaml:"size"`     //存储的大小是 MB，yaml中是5mM

}
