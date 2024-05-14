package config

//密钥过期时间
type Jwt struct {
	Secret  string `json:"secret" yaml:"secret"`   //密钥
	Expires int    `json:"expires" yaml:"expires"` //过期时间
	Issuer  string `json:"issuer" yaml:"issuer"`   //颁发人
}