import Chip from '@mui/material/Chip';
import JavascriptOriginal from "react-devicons/javascript/original";
import Css3Original from "react-devicons/css3/original";
import Html5Original from "react-devicons/html5/original";
import ReactOriginal from "react-devicons/react/original";
import BootstrapOriginal from "react-devicons/bootstrap/original";
import MaterialuiOriginal from "react-devicons/materialui/original";
import NodejsOriginal from "react-devicons/nodejs/original";
import PhpOriginal from "react-devicons/php/original";
import GraphqlPlain from "react-devicons/graphql/plain";
import FirebasePlain from "react-devicons/firebase/plain";
import VscodeOriginal from "react-devicons/vscode/original";
import NestjsOriginal from "react-devicons/nestjs/original";
import LinuxOriginal from "react-devicons/linux/original";
import AzureOriginal from "react-devicons/azure/original";
import DockerOriginal from "react-devicons/docker/original";
import KubernetesPlain from "react-devicons/kubernetes/plain";
import TerraformOriginal from "react-devicons/terraform/original";
import AmazonwebservicesOriginalWordmarkIcon from "react-devicons/amazonwebservices/original-wordmark";
import CplusplusOriginal from "react-devicons/cplusplus/original";
import DotnetcoreOriginal from "react-devicons/dotnetcore/original";
import GitOriginal from "react-devicons/git/original";
import MysqlOriginal from "react-devicons/mysql/original";
import MicrosoftsqlserverPlain from "react-devicons/microsoftsqlserver/plain";
import JqueryOriginal from "react-devicons/jquery/original";
import TypescriptOriginal from "react-devicons/typescript/original";
import NextjsOriginal from "react-devicons/nextjs/original";
import GooglecloudOriginal from "react-devicons/googlecloud/original";
import JestPlain from "react-devicons/jest/plain";
import CsharpOriginal from "react-devicons/csharp/original";
import SQL from '/img/sql.svg'

const TechCards = ({ tech, size = 20 }) => {
    const { icon, label } = (
        tech == 'react' ? { icon: <ReactOriginal size={size} />, label: 'REACT' }
            : tech == 'js' ? { icon: <JavascriptOriginal size={size} />, label: 'JAVASCRIPT' }
                : tech == 'css3' ? { icon: <Css3Original size={size} />, label: 'CSS3' }
                    : tech == 'html5' ? { icon: <Html5Original size={size} />, label: 'HTML5' }
                        : tech == 'bootstrap' ? { icon: <BootstrapOriginal size={size} />, label: 'BOOTSTRAP' }
                            : tech == 'material-ui' ? { icon: <MaterialuiOriginal size={size} />, label: 'MATERIAL UI' }
                                : tech == 'nodejs' ? { icon: <NodejsOriginal size={size} />, label: 'NODE.JS' }
                                    : tech == 'php' ? { icon: <PhpOriginal size={size} />, label: 'PHP' }
                                        : tech == 'graphql' ? { icon: <GraphqlPlain size={size} />, label: 'GRAPHQL' }
                                            : tech == 'firebase' ? { icon: <FirebasePlain size={size} />, label: 'FIREBASE' }
                                                : tech == 'vscode' ? { icon: <VscodeOriginal size={size} />, label: 'VS CODE' }
                                                    : tech == 'nestjs' ? { icon: <NestjsOriginal size={size} />, label: 'NEST.JS' }
                                                        : tech == 'linux' ? { icon: <LinuxOriginal size={size} />, label: 'LINUX' }
                                                            : tech == 'azure' ? { icon: <AzureOriginal size={size} />, label: 'AZURE' }
                                                                : tech == 'docker' ? { icon: <DockerOriginal size={size} />, label: 'DOCKER' }
                                                                    : tech == 'kubernetes' ? { icon: <KubernetesPlain size={size} />, label: 'KUBERNETES' }
                                                                        : tech == 'terraform' ? { icon: <TerraformOriginal size={size} />, label: 'TERRAFORM' }
                                                                            : tech == 'aws' ? { icon: <AmazonwebservicesOriginalWordmarkIcon size={size} />, label: 'AWS' }
                                                                                : tech == 'c++' ? { icon: <CplusplusOriginal size={size} />, label: 'C++' }
                                                                                    : tech == '.net' ? { icon: <DotnetcoreOriginal size={size} />, label: '.NET' }
                                                                                        : tech == 'git' ? { icon: <GitOriginal size={size} />, label: 'GIT' }
                                                                                            : tech == 'mysql' ? { icon: <MysqlOriginal size={size} />, label: 'MYSQL' }
                                                                                                : tech == 'sqlserver' ? { icon: <MicrosoftsqlserverPlain size={size} />, label: 'SQL SERVER' }
                                                                                                    : tech == 'jquery' ? { icon: <JqueryOriginal size={size} />, label: 'JQUERY' }
                                                                                                        : tech == 'ts' ? { icon: <TypescriptOriginal size={size} />, label: 'TYPESCRIPT' }
                                                                                                            : tech == 'nextjs' ? { icon: <NextjsOriginal size={size} />, label: 'NEXT.JS' }
                                                                                                                : tech == 'gcloud' ? { icon: <GooglecloudOriginal size={size} />, label: 'GOOGLE CLOUD' }
                                                                                                                    : tech == 'jest' ? { icon: <JestPlain size={size} />, label: 'JEST' }
                                                                                                                        : tech == 'c#' ? { icon: <CsharpOriginal size={size} />, label: 'C#' }
                                                                                                                            : tech == 'sql' ? { icon: <img src={SQL} style={{ width: `${size}px`, height: 'auto' }} />, label: 'SQL' }
                                                                                                                                : { icon: <div />, label: tech.toUpperCase() }
    );
    return (
        <Chip sx={{ backgroundColor: 'var(--main-gray)', color: 'var(--main-white)', fontSize: '9px', borderRadius: 0 }} icon={icon} label={label} />
    );
};

export default TechCards;