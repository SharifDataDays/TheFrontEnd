import styled from 'styled-components';
import React from 'react';
import { Grid, Segment, Sidebar, List, Input, Header } from 'semantic-ui-react';

const LargeSideBar = styled(Sidebar)`
  width: 25%;
  background-color: #f3f4f7;
`;

const LargeGrid = styled(Grid)`
  min-width: 100%;
  background-color: #f3f4f7;
  border-radius: 0;
`;

const StyledLists = styled(List)`
  width: 100%;
  background-color: #f3f4f7;
`;

const StyledInput = styled(Input)`
  width: 90%;
  height: 45px;
  margin: 0 auto;
  margin-top: 50px;
`;

const StyledHeader = styled(Header)`
  font-family: FreightSans, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1.1rem;
  color: #262626;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 40px auto 8px 7%;
  opacity: 0.85;
`;

const StyledLink = styled(List.Item)`
  color: #6c6c6d;
  display: block;
  margin-left: 7%;
  font-size: 0.875rem;
  opacity: 0.8;
  margin-bottom: 5px;
`;

const VeryLastElement = styled(List.Item)`
  margin-bottom: 10%;
s`;

const HorizontalSidebar = () => (
  <LargeSideBar as={Segment} animation="push" direction="left" visible>
    <LargeGrid textAlign="left" columns={1} divided>
      <StyledInput placeholder="Search..." />
      <StyledHeader as="p">Getting Started</StyledHeader>
      <StyledLists link>
        <StyledLink as="a" href="./resources">
          Deep Learning with PyTorch: A 60 Minute Blitz
        </StyledLink>
        <StyledLink as="a" href="./resources">
          Writing Custom Datasets, DataLoaders and Transforms
        </StyledLink>
        <StyledLink as="a" href="./resources">
          Writing Custom Datasets, DataLoaders and Transforms
        </StyledLink>
      </StyledLists>
      <StyledHeader as="p">Image</StyledHeader>
      <StyledLists link>
        <StyledLink as="a" href="./resources">
          TorchVision Object Detection Finetuning Tutorial
        </StyledLink>
        <StyledLink as="a" href="./resources">
          Transfer Learning for Computer Vision Tutorial
        </StyledLink>
        <StyledLink as="a" href="./resources">
          Spatial Transformer Networks Tutorial
        </StyledLink>
        <StyledLink as="a" href="./resources">
          Neural Transfer Using PyTorch
        </StyledLink>
        <StyledLink as="a" href="./resources">
          Adversarial Example Generation
        </StyledLink>
        <StyledLink as="a" href="./resources">
          DCGAN Tutorials
        </StyledLink>
      </StyledLists>
      <StyledHeader as="p">Text</StyledHeader>
      <StyledLists link>
        <StyledLink as="a" href="./resources">
          NLP From Scratch: Classifying Names with a Character-Level RNN
        </StyledLink>
        <StyledLink as="a" href="./resources">
          NLP From Scratch: Generating Names with a Character-Level RNN
        </StyledLink>
      </StyledLists>
      <VeryLastElement content="" />
    </LargeGrid>
  </LargeSideBar>
);

export default HorizontalSidebar;
