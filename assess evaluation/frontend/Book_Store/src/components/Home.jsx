import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Input } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'


export const Home = () => {
    return (
        <>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Register</Tab>
                        <Tab>Login</Tab>
                        <Tab>Logout</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <div>
                                <FormControl>
                                    <FormLabel>Username</FormLabel>
                                    <Input type='email' />
                                    <FormLabel>Password</FormLabel>
                                    <Input type='password' />
                                    <FormHelperText>We'll never share your details.</FormHelperText>
                                </FormControl>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <FormControl>
                                    <FormLabel>Username</FormLabel>
                                    <Input type='email' />
                                    <FormLabel>Password</FormLabel>
                                    <Input type='password' />
                                    <FormHelperText>We'll never share your details.</FormHelperText>
                                </FormControl>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <Button>Logout</Button>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </>
    )
}
